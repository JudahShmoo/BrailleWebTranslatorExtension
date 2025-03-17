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

function braillizeWord(word) {
    if (word.length == 0) return "";
    if (word.length == 1) return braillizeChar(word);

    let braille = "";

    if (isUpperAlpha(word)) {
        braille += String.fromCodePoint(0x2820);
        braille += String.fromCodePoint(0x2820);
        word = word.toLowerCase();
    }

    while (word.length > 0) {
        if (isUpperAlpha(word)) {
            braille += String.fromCodePoint(0x2820);
            word = word.toLowerCase();
        }

        let possibleCombo = word.slice(0, 3);
        while (true) {
            if (brailleMap[possibleCombo]) {
                braille += brailleMap[possibleCombo];
                word = word.slice(possibleCombo.length);
                break;
            }
            else if (possibleCombo.length <= 0) {
                braille += word[0];
                word = word.slice(1);
                break;
            }
            possibleCombo = possibleCombo.slice(0, -1);
        }
    }
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