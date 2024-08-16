// let indexes = [0];
// while (indexes.length > 0) {
//     let index = indexes[indexes.length - 1];

    
// }

chrome.runtime.sendMessage({ action: 'getToggleState' }, (toggleState) => {
    if (toggleState) {
        console.log("Braillizing");
        document.querySelectorAll("p").forEach((p) => {
            let text = p.innerText;
            let braille = braillize(text);
            p.innerHTML = braille;
        });
    }
});

function braillize(string) {
    let braille = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        switch (char) {
            case " ":
                braille += String.fromCodePoint(0x2800);
                break;
            case "!":
                braille += String.fromCodePoint(0x2816);
                break;
            case "\"":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2826);
                break;
            case "#":
                braille += String.fromCodePoint(0x283c);
                break;
            case "$":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2832);
                break;
            case "%":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2812);
                braille += String.fromCodePoint(0x280f);
                break;
            case "&":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x282f);
                break;
            case "'":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2804);
                break;
            case "(":
            case ")":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2836);
                break;
            case "*":
                braille += String.fromCodePoint(0x2810);
                braille += String.fromCodePoint(0x2814);
                break;
            case "+":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x282c);
                break;
            case ",":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2802);
                break;
            case "-":
                braille += String.fromCodePoint(0x2824);
                break;
            case ".":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2832);
                break;
            case "/":
                braille += String.fromCodePoint(0x2838);
                braille += String.fromCodePoint(0x280c);
                break;
            case "0":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x281a);
                break;
            case "1":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x2801);
                break;
            case "2":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x2803);
                break;
            case "3":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x2809);
                break;
            case "4":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x2819);
                break;
            case "5":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x2811);
                break;
            case "6":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x280b);
                break;
            case "7":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x281b);
                break;
            case "8":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x2813);
                break;
            case "9":
                braille += String.fromCodePoint(0x283c);
                braille += String.fromCodePoint(0x280a);
                break;
            case ":":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2812);
                break;
            case ";":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2806);
                break;
            case "<":
                braille += String.fromCodePoint(0x2802);
                braille += String.fromCodePoint(0x2805);
                break;
            case "=":
                braille += String.fromCodePoint(0x2828);
                braille += String.fromCodePoint(0x2805);
                break;
            case ">":
                braille += String.fromCodePoint(0x2828);
                braille += String.fromCodePoint(0x2802);
                break;
            case "?":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2826);
                break;
            case "@":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2801);
                break;
            case "A":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2801);
                break;
            case "B":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2803);
                break;
            case "C":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2809);
                break;
            case "D":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2819);
                break;
            case "E":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2811);
                break;
            case "F":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x280b);
                break;
            case "G":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x281b);
                break;
            case "H":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2813);
                break;
            case "I":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x280a);
                break;
            case "J":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x281a);
                break;
            case "K":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2805);
                break;
            case "L":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2807);
                break;
            case "M":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x280d);
                break;
            case "N":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x281d);
                break;
            case "O":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2815);
                break;
            case "P":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x280f);
                break;
            case "Q":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x281f);
                break;
            case "R":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2817);
                break;
            case "S":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x280e);
                break;
            case "T":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x281e);
                break;
            case "U":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2825);
                break;
            case "V":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2827);
                break;
            case "W":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x283a);
                break;
            case "X":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x282d);
                break;
            case "Y":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x283d);
                break;
            case "Z":
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2835);
                break;
            case "[":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2820);
                braille += String.fromCodePoint(0x2836);
                break;
            case "\\":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2833);
                break;
            case "[":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2836);
                braille += String.fromCodePoint(0x2820);
                break;
            case "^":
                braille += String.fromCodePoint(0x2838);
                braille += String.fromCodePoint(0x2823);
                break;
            case "_":
                braille += String.fromCodePoint(0x2838);
                break;
            case "`":
                braille += String.fromCodePoint(0x2808);
                break;
            case "a":
                braille += String.fromCodePoint(0x2801);
                break;
            case "b":
                braille += String.fromCodePoint(0x2803);
                break;
            case "c":
                braille += String.fromCodePoint(0x2809);
                break;
            case "d":
                braille += String.fromCodePoint(0x2819);
                break;
            case "e":
                braille += String.fromCodePoint(0x2811);
                break;
            case "f":
                braille += String.fromCodePoint(0x280b);
                break;
            case "g":
                braille += String.fromCodePoint(0x281b);
                break;
            case "h":
                braille += String.fromCodePoint(0x2813);
                break;
            case "i":
                braille += String.fromCodePoint(0x280a);
                break;
            case "j":
                braille += String.fromCodePoint(0x281a);
                break;
            case "k":
                braille += String.fromCodePoint(0x2805);
                break;
            case "l":
                braille += String.fromCodePoint(0x2807);
                break;
            case "m":
                braille += String.fromCodePoint(0x280d);
                break;
            case "n":
                braille += String.fromCodePoint(0x281d);
                break;
            case "o":
                braille += String.fromCodePoint(0x2815);
                break;
            case "p":
                braille += String.fromCodePoint(0x280f);
                break;
            case "q":
                braille += String.fromCodePoint(0x281f);
                break;
            case "r":
                braille += String.fromCodePoint(0x2817);
                break;
            case "s":
                braille += String.fromCodePoint(0x280e);
                break;
            case "t":
                braille += String.fromCodePoint(0x281e);
                break;
            case "u":
                braille += String.fromCodePoint(0x2825);
                break;
            case "v":
                braille += String.fromCodePoint(0x2827);
                break;
            case "w":
                braille += String.fromCodePoint(0x283a);
                break;
            case "x":
                braille += String.fromCodePoint(0x282d);
                break;
            case "y":
                braille += String.fromCodePoint(0x283d);
                break;
            case "z":
                braille += String.fromCodePoint(0x2835);
                break;
            case "{":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2830);
                braille += String.fromCodePoint(0x2836);
                break;
            case "|":
                braille += String.fromCodePoint(0x2838);
                braille += String.fromCodePoint(0x2833);
                break;
            case "}":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2836);
                braille += String.fromCodePoint(0x2830);
                break;
            case "~":
                braille += String.fromCodePoint(0x2808);
                braille += String.fromCodePoint(0x2831);
                break;
            default:
                braille += char;
                break;
        }
    }
    return braille;
}
