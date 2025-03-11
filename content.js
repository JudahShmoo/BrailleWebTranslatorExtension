
const brailleMap = {
    // ' ': '⠀​',
    '!':   String.fromCodePoint(0x2816),
    '"':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2826),
    '#':   String.fromCodePoint(0x283c),
    '$':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2832),
    '%':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2812)+
           String.fromCodePoint(0x280f),
    '&':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x282f),
    "'":   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2804),
    '(':   String.fromCodePoint(0x2810)+
           String.fromCodePoint(0x2823),
    ')':   String.fromCodePoint(0x2810)+
           String.fromCodePoint(0x281c),
    '*':   String.fromCodePoint(0x2810)+
           String.fromCodePoint(0x2814),
    '+':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x282c),
    ',':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2802),
    '-':   String.fromCodePoint(0x2824),
    '.':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2832),
    '/':   String.fromCodePoint(0x2838)+
           String.fromCodePoint(0x280c),
    '0':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x281a),
    '1':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x2801),
    '2':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x2803),
    '3':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x2809),
    '4':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x2819),
    '5':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x2811),
    '6':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x280b),
    '7':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x281b),
    '8':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x2813),
    '9':   String.fromCodePoint(0x283c)+
           String.fromCodePoint(0x280a),
    ':':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2812),
    ';':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2806),
    '<':   String.fromCodePoint(0x2802)+
           String.fromCodePoint(0x2805),
    '=':   String.fromCodePoint(0x2828)+
           String.fromCodePoint(0x2805),
    '>':   String.fromCodePoint(0x2828)+
           String.fromCodePoint(0x2802),
    '?':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2826),
    '@':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2801),
    'A':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2801),
    'B':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2803),
    'C':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2809),
    'D':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2819),
    'E':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2811),
    'F':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x280b),
    'G':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x281b),
    'H':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2813),
    'I':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x280a),
    'J':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x281a),
    'K':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2805),
    'L':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2807),
    'M':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x280d),
    'N':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x281d),
    'O':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2815),
    'P':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x280f),
    'Q':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x281f),
    'R':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2817),
    'S':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x280e),
    'T':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x281e),
    'U':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2825),
    'V':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2827),
    'W':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x283a),
    'X':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x282d),
    'Y':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x283d),
    'Z':   String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2835),
    '[':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2820)+
           String.fromCodePoint(0x2836),
    '\\':  String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2833),
    ']':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2836)+
           String.fromCodePoint(0x2820),
    '^':   String.fromCodePoint(0x2838)+
           String.fromCodePoint(0x2823),
    '_':   String.fromCodePoint(0x2838),
    '`':   String.fromCodePoint(0x2808),
    'a':   String.fromCodePoint(0x2801),
    'b':   String.fromCodePoint(0x2803),
    'c':   String.fromCodePoint(0x2809),
    'd':   String.fromCodePoint(0x2819),
    'e':   String.fromCodePoint(0x2811),
    'f':   String.fromCodePoint(0x280b),
    'g':   String.fromCodePoint(0x281b),
    'h':   String.fromCodePoint(0x2813),
    'i':   String.fromCodePoint(0x280a),
    'j':   String.fromCodePoint(0x281a),
    'k':   String.fromCodePoint(0x2805),
    'l':   String.fromCodePoint(0x2807),
    'm':   String.fromCodePoint(0x280d),
    'n':   String.fromCodePoint(0x281d),
    'o':   String.fromCodePoint(0x2815),
    'p':   String.fromCodePoint(0x280f),
    'q':   String.fromCodePoint(0x281f),
    'r':   String.fromCodePoint(0x2817),
    's':   String.fromCodePoint(0x280e),
    't':   String.fromCodePoint(0x281e),
    'u':   String.fromCodePoint(0x2825),
    'v':   String.fromCodePoint(0x2827),
    'w':   String.fromCodePoint(0x283a),
    'x':   String.fromCodePoint(0x282d),
    'y':   String.fromCodePoint(0x283d),
    'z':   String.fromCodePoint(0x2835),
    '{':   String.fromCodePoint(0x2838)+
           String.fromCodePoint(0x2823),
    '|':   String.fromCodePoint(0x2838)+
           String.fromCodePoint(0x2833),
    '}':   String.fromCodePoint(0x2838)+
           String.fromCodePoint(0x281c),
    '~':   String.fromCodePoint(0x2808)+
           String.fromCodePoint(0x2831),
    "gg":  String.fromCodePoint(0x2836),
    "st":  String.fromCodePoint(0x280c),
    "ch":  String.fromCodePoint(0x2821),
    "gh":  String.fromCodePoint(0x2823),
    "sh":  String.fromCodePoint(0x2829),
    "th":  String.fromCodePoint(0x2839),
    "wh":  String.fromCodePoint(0x2831),
    "ed":  String.fromCodePoint(0x282b),
    "er":  String.fromCodePoint(0x283b),
    "ou":  String.fromCodePoint(0x2833),
    "ow":  String.fromCodePoint(0x282a),
    "en":  String.fromCodePoint(0x2822),
    "ing": String.fromCodePoint(0x282c),
    "ar":  String.fromCodePoint(0x281c),
    "in":  String.fromCodePoint(0x2814),
    "and": String.fromCodePoint(0x282f),
    "for": String.fromCodePoint(0x283f),
    "of":  String.fromCodePoint(0x2837),
    "the": String.fromCodePoint(0x282e),
    "with":String.fromCodePoint(0x283e),
    "dis": String.fromCodePoint(0x2832),
    "ff":  String.fromCodePoint(0x2816),
    "ea":  String.fromCodePoint(0x2802),
    "con": String.fromCodePoint(0x2812),
    "cc":  String.fromCodePoint(0x2812),
    "bb":  String.fromCodePoint(0x2806),
    "be":  String.fromCodePoint(0x2806),
};

function braillize(text) {
    let lines = text.split('\n');
    let braillizedLines = lines.map((line) => braillizeLine(line));
    return braillizedLines.join('\n');
}

function braillizeLine(line) {
    let words = line.split(' ');
    let braillizedWords = words.map((word) => braillizeWord(word));
    // return braillizedWords.join(brailleMap[' ']);
    return braillizedWords.join(' ');
}

function braillizeWord(word) {
    if (word.length == 0) return "";
    if (word.length == 1) return braillizeChar(word);

    let braille = "";

    let allCaps = word.split('').every((char) => char == char.toUpperCase());
    if (allCaps) {
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
