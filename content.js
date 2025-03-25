let brailleMap = {};

function braillize(text) {
    let lines = text.split('\n');
    let braillizedLines = lines.map((line) => braillizeLine(line));
    return braillizedLines.join('\n');
}

function braillizeLine(line) {
	if (line.trim().length == 0) return line;
    let words = line.split(' ');
    let braillizedWords = words.map((word) => braillizeWord(word));
    return braillizedWords.join('⠀ ');
}

const commonContractions = ["d", "ll", "re", "s", "t", "ve"];
const lowerPunctuation = [];
function braillizeWord(word) {
    if (word.length == 0) return "";
    let braille = "";

    if (isUpperAlpha(word)) {
        braille += "⠠⠠";
        word = word.toLowerCase();
    }

    let standingAloneWord = brailleMap['onlyWhenStandingAlone'][word];
    if (standingAloneWord != undefined) {
        braille += standingAloneWord;
        return braille;
    }

    let contraction = word.split("'");
    if (contraction.length == 2) {
        if (commonContractions.includes(contraction[1])) {
            let standingWithContraction = brailleMap['onlyWhenStandingAlone']['orHasCommonContraction'][contraction[0]];
            if (standingWithContraction != undefined) {
                braille += standingWithContraction + "⠄";
                braille += BraillizeNonContraction(contraction[1]);
                return braille;
            }
        }
    }

    braille += BraillizeNonContraction(word);
    return braille;
}

function BraillizeNonContraction(word) {
    if (word.length == 0) return "";
    let braille = "";
    let chunkInfo = {position : "beginning", standingAlone: true, afterO: false, afterA: false};

    while (word.length > 0) {
        if (isUpperAlpha(word)) {
            braille += "⠠";
            word = word.toLowerCase();
        }

        let possibleCombo = word.slice(0, 9);
        while (true) {
            let braillized = BraillizeChunk(possibleCombo, chunkInfo);
            chunkInfo.standingAlone = false;
            console.log("Possible Combo: " + possibleCombo + "    Braillized Combo: " + braillized);
            if (braillized != undefined) {
                chunkInfo.position = "surrounded";
                braille += braillized;
                
                chunkInfo.afterA = word[possibleCombo.length - 1] == 'a' || word[possibleCombo.length - 1] == 'A';
                chunkInfo.afterO = word[possibleCombo.length - 1] == 'o' || word[possibleCombo.length - 1] == 'O';
                word = word.slice(possibleCombo.length);
                if (possibleCombo.length <= 0) {
                    braille += word[0];
                    chunkInfo.afterA = false;
                    chunkInfo.afterO = false;
                    word = word.slice(1);
                }
                break;
            }
            possibleCombo = possibleCombo.slice(0, -1);
        }
    }
    return braille;
}

function BraillizeChunk(chunk, chunkInfo) {
    if (chunk.length == 0) return "";
    let braille = "";

    let allButFirst = chunk.slice(1);
    if (isUpperAlpha(chunk[0]) && (allButFirst.length == 0 || isLowerAlpha(allButFirst))) {
        braille += "⠠";
        chunk = chunk.toLowerCase();
    }

    if (chunkInfo.standingAlone) {
        let standingAloneChunk = brailleMap['onlyWhenStandingAlone'][chunk];
        if (standingAloneChunk != undefined) {
            braille += standingAloneChunk;
            return braille;
        }
    }
    else {
        if (brailleMap['exceptWhenStandingAlone'][chunk] != undefined) {
            braille += brailleMap['exceptWhenStandingAlone'][chunk];
            return braille;
        }
    }

    if (chunkInfo.position === "beginning") {
        if (brailleMap['onlyAtBeginning'][chunk] != undefined){
            braille += brailleMap['onlyAtBeginning'][chunk];
            return braille;
        }
    }
    else {
        if (chunkInfo.position === "surrounded" && brailleMap['whenSurrounded'][chunk] != undefined) {
            braille += brailleMap['whenSurrounded'][chunk];
            return braille;
        }
        if (brailleMap['exceptAtBeginning'][chunk] != undefined) {
            braille += brailleMap['exceptAtBeginning'][chunk];
            return braille;
        }
    }
    
    if ((chunkInfo.afterA || chunkInfo.afterO) && brailleMap['exceptAfterAorO'][chunk] != undefined) {
        braille += brailleMap['exceptAfterAorO'][chunk];
        return braille;
    }
    if (chunkInfo.afterO && brailleMap['exceptAfterO'][chunk] != undefined) {
        braille += brailleMap['exceptAfterO'][chunk];
        return braille;
    }

    if (brailleMap[chunk] == undefined) return undefined;

    braille += brailleMap[chunk];
    return braille;
}

function braillizeChar(char) {
    let brailleString = "";
    if (isUpperAlpha(char)) {
        brailleString += String.fromCodePoint(0x2820);
        char = char.toLowerCase();
    }
    let brailleChar = brailleMap[char];
    if (brailleChar!=undefined) brailleString += brailleChar;
    else brailleString += char;
    return brailleString;
}

function isUpperAlpha(string) {
    return string == string.toUpperCase() && string != string.toLowerCase();
}

function isLowerAlpha(string) {
    return string == string.toLowerCase() && string != string.toUpperCase();
}

function braillizeNode(node) {
    if (node.nodeType == Node.TEXT_NODE) {
        let text = node.nodeValue;
        let braille = braillize(text);
        node.nodeValue = braille;
    }
    else if (node.nodeType == Node.ELEMENT_NODE) {
        if (node.tagName == 'SCRIPT' || node.tagName == 'STYLE') return;
        node.childNodes.forEach((child) => braillizeNode(child));
    }
}

const bmURL = chrome.runtime.getURL('brailleMap.json');
fetch(bmURL)
    .then(response => response.json())
    .then(brailleMapData => {
        brailleMap = brailleMapData;

        chrome.runtime.sendMessage({ action: 'getToggleState' }, (toggleState) => {
            if (toggleState) {
                console.log("Braillizing");
                braillizeNode(document.body);
            }
        });
    });