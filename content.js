const brailleMap = {
    '!': '⠖',
    '"': '⠈⠦',
    '#': '⠼',
    '$': '⠈⠲',
    '%': '⠈⠒⠏',
    '&': '⠈⠯',
    "'": '⠈⠄',
    '(': '⠐⠣',
    ')': '⠐⠜',
    '*': '⠐⠔',
    '+': '⠈⠬',
    ',': '⠈⠂',
    '-': '⠤',
    '.': '⠈⠲',
    '/': '⠸⠌',
    '0': '⠼⠚',
    '1': '⠼⠁',
    '2': '⠼⠃',
    '3': '⠼⠉',
    '4': '⠼⠙',
    '5': '⠼⠑',
    '6': '⠼⠋',
    '7': '⠼⠛',
    '8': '⠼⠓',
    '9': '⠼⠊',
    ':': '⠈⠒',
    ';': '⠈⠆',
    '<': '⠂⠅',
    '=': '⠨⠅',
    '>': '⠨⠂',
    '?': '⠈⠦',
    '@': '⠈⠁',
    'A': '⠠⠁',
    'B': '⠠⠃',
    'C': '⠠⠉',
    'D': '⠠⠙',
    'E': '⠠⠑',
    'F': '⠠⠋',
    'G': '⠠⠛',
    'H': '⠠⠓',
    'I': '⠠⠊',
    'J': '⠠⠚',
    'K': '⠠⠅',
    'L': '⠠⠇',
    'M': '⠠⠍',
    'N': '⠠⠝',
    'O': '⠠⠕',
    'P': '⠠⠏',
    'Q': '⠠⠟',
    'R': '⠠⠗',
    'S': '⠠⠎',
    'T': '⠠⠞',
    'U': '⠠⠥',
    'V': '⠠⠧',
    'W': '⠠⠺',
    'X': '⠠⠭',
    'Y': '⠠⠽',
    'Z': '⠠⠵',
    '[': '⠈⠠⠶',
    '\\': '⠈⠳',
    ']': '⠈⠶⠠',
    '^': '⠸⠣',
    '_': '⠸',
    '`': '⠈',
    'a': '⠁',
    'b': '⠃',
    'c': '⠉',
    'd': '⠙',
    'e': '⠑',
    'f': '⠋',
    'g': '⠛',
    'h': '⠓',
    'i': '⠊',
    'j': '⠚',
    'k': '⠅',
    'l': '⠇',
    'm': '⠍',
    'n': '⠝',
    'o': '⠕',
    'p': '⠏',
    'q': '⠟',
    'r': '⠗',
    's': '⠎',
    't': '⠞',
    'u': '⠥',
    'v': '⠧',
    'w': '⠺',
    'x': '⠭',
    'y': '⠽',
    'z': '⠵',
    '{': '⠸⠣',
    '|': '⠸⠳',
    '}': '⠸⠜',
    '~': '⠈⠱',
    "gg": '⠶',
    "st": '⠌',
    "ch": '⠡',
    "gh": '⠣',
    "sh": '⠩',
    "th": '⠹',
    "wh": '⠱',
    "ed": '⠫',
    "er": '⠻',
    "ou": '⠳',
    "ow": '⠪',
    "en": '⠢',
    "ing": '⠬',
    "ar": '⠜',
    "in": '⠔',
    "and": '⠯',
    "for": '⠿',
    "of": '⠷',
    "the": '⠮',
    "with": '⠾',
    "dis": '⠲',
    "ff": '⠖',
    "ea": '⠂',
    "con": '⠒',
    "cc": '⠒',
    "bb": '⠆',
    "be": '⠆',
};

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

chrome.runtime.sendMessage({ action: 'getToggleState' }, (toggleState) => {
    if (toggleState) {
        console.log("Braillizing");
        braillizeNode(document.body);
    }
});
