function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const brailleMapObject = {
	".": "⠲",
	",": "⠂",
	";": "⠆",
	":": "⠒",
	"!": "⠖",
	"?": "⠢",
	"'": "⠄",
	"\"": "⠦",
	"-": "⠤",
	"(": "⠐",
	")": "⠘",
	"[": "⠦",
	"]": "⠴",
	"{": "⠶",
	"}": "⠾",
	"<": "⠦",
	">": "⠲",
	"/": "⠜",
	"\\": "⠤",
	"|": "⠦",
	"@": "⠈",
	"#": "⠼⠲",
	"$": "⠼⠦",
	"%": "⠼⠴",
	"^": "⠼⠦",
	"&": "⠼⠖",
	"*": "⠼⠐",
	"_": "⠼⠤",
	"+": "⠼⠖",
	"=": "⠼⠐",
	"~": "⠼⠦",

	"a": "⠁",
	"b": "⠃",
	"c": "⠉",
	"d": "⠙",
	"e": "⠑",
	"f": "⠋",
	"g": "⠛",
	"h": "⠓",
	"i": "⠊",
	"j": "⠚",
	"k": "⠅",
	"l": "⠇",
	"m": "⠍",
	"n": "⠝",
	"o": "⠕",
	"p": "⠏",
	"q": "⠟",
	"r": "⠗",
	"s": "⠎",
	"t": "⠞",
	"u": "⠥",
	"v": "⠧",
	"w": "⠺",
	"x": "⠭",
	"y": "⠽",
	"z": "⠵",

	"1": "⠼⠁",
	"2": "⠼⠃",
	"3": "⠼⠉",
	"4": "⠼⠙",
	"5": "⠼⠑",
	"6": "⠼⠋",
	"7": "⠼⠛",
	"8": "⠼⠓",
	"9": "⠼⠊",
	"0": "⠼⠚",


	"onlyWhenStandingAlone": {
		"enough's": "⠢⠄⠎",

		"about": "⠁⠃",
		"above": "⠁⠃⠧",
		"according": "⠁⠉",
		"across": "⠁⠉⠗",
		"after": "⠁⠋",
		"afternoon": "⠁⠋⠝",
		"afterward": "⠁⠋⠺",
		"again": "⠁⠛",
		"against": "⠁⠛⠌",
		"also": "⠁⠇",
		"almost": "⠁⠇⠍",
		"already": "⠁⠇⠗",
		"altogether": "⠁⠇⠞",
		"although": "⠁⠇⠹",
		"always": "⠁⠇⠺",
		"blind": "⠃⠇",
		"braille": "⠃⠗⠇",
		"could": "⠉⠙",
		"declare": "⠙⠉⠇",
		"declaring": "⠙⠉⠇⠛",
		"deceive": "⠙⠉⠧",
		"deceiving": "⠙⠉⠧⠛",
		"either": "⠑⠊",
		"friend": "⠋⠗",
		"first": "⠋⠌",
		"good": "⠛⠙",
		"great": "⠛⠗⠞",
		"him": "⠓⠍",
		"himself": "⠓⠍⠋",
		"herself": "⠓⠻⠋",
		"immediate": "⠊⠍⠍",
		"little": "⠇⠇",
		"letter": "⠇⠗",
		"myself": "⠍⠽⠋",
		"much": "⠍⠡",
		"must": "⠍⠌",
		"necessary": "⠝⠑⠉",
		"neither": "⠝⠑⠊",
		"paid": "⠏⠙",
		"perceive": "⠏⠻⠉⠧",
		"perceiving": "⠏⠻⠉⠧⠛",
		"perhaps": "⠏⠻⠓",
		"quick": "⠟⠅",
		"receive": "⠗⠉⠧",
		"receiving": "⠗⠉⠧⠛",
		"rejoice": "⠗⠚⠉",
		"rejoicing": "⠗⠚⠉⠛",
		"said": "⠎⠙",
		"such": "⠎⠡",
		"today": "⠞⠙",
		"together": "⠞⠛⠗",
		"tomorrow": "⠞⠍",
		"tonight": "⠞⠝",
		"itself": "⠭⠋",
		"its": "⠭⠎",
		"your": "⠽⠗",
		"yourself": "⠽⠗⠋",
		"yourselves": "⠽⠗⠧⠎",
		"themselves": "⠮⠍⠧⠎",
		"children": "⠡⠝",
		"should": "⠩⠙",
		"thyself": "⠹⠽⠋",
		"ourselves": "⠳⠗⠧⠎",
		"would": "⠺⠙",
		"because": "⠆⠉",
		"before": "⠆⠋",
		"behind": "⠆⠓",
		"below": "⠆⠇",
		"beneath": "⠆⠝",
		"beside": "⠆⠎",
		"between": "⠆⠞",
		"beyond": "⠆⠽",
		"conceive": "⠒⠉⠧",
		"conceiving": "⠒⠉⠧⠛",
		"oneself": "⠐⠕⠋",

		"orHasCommonContraction": {
			"but": "⠃",
			"can": "⠉",
			"do": "⠙",
			"every": "⠑",
			"from": "⠋",
			"go": "⠛",
			"have": "⠓",
			"just": "⠚",
			"knowledge": "⠅",
			"like": "⠇",
			"more": "⠍",
			"not": "⠝",
			"people": "⠏",
			"quite": "⠟",
			"rather": "⠗",
			"so": "⠎",
			"that": "⠞",
			"us": "⠥",
			"very": "⠧",
			"it": "⠭",
			"you": "⠽",
			"as": "⠵",
			"will": "⠺",

			"child": "⠡",
			"shall": "⠩",
			"this": "⠹",
			"which": "⠱",
			"out": "⠳",
			"still": "⠌"
		},

		"WithoutLowerPunctuation": {
			"be": "⠆",
			"enough": "⠢",
			"were": "⠶",
			"his": "⠦",
			"was": "⠴"
		}
	},

	"upon": "⠘⠥",
	"these": "⠘⠮",
	"those": "⠘⠹",
	"whose": "⠘⠱",
	"word": "⠘⠺",

	"cannot": "⠸⠉",
	"had": "⠸⠓",
	"many": "⠸⠍",
	"spirit": "⠸⠎",
	"their": "⠸⠮",
	"world": "⠸⠺",
	
	"day": "⠐⠙",
	"ever": "⠐⠑",
	"father": "⠐⠋",
	"here": "⠐⠓",
	"know": "⠐⠅",
	"lord": "⠐⠇",
	"mother": "⠐⠍",
	"name": "⠐⠝",
	"part": "⠐⠏",
	"question": "⠐⠟",
	"right": "⠐⠗",
	"some": "⠐⠎",
	"time": "⠐⠞",
	"young": "⠐⠽",
	"there": "⠐⠮",
	"character": "⠐⠡",
	"through": "⠐⠹",
	"where": "⠐⠱",
	"ought": "⠐⠳",
	"work": "⠐⠺",

	"and": "⠯",
	"for": "⠿",
	"of": "⠷",
	"the": "⠮",
	"with": "⠾",

	"gh": "⠣",
	"ed": "⠫",
	"er": "⠻",
	"ow": "⠪",
	"ar": "⠜",

	"in": "⠔",
	"exceptWhenStandingAlone": {
		"en": "⠢",

		"ch": "⠡",
		"sh": "⠩",
		"th": "⠹",
		"wh": "⠱",
		"ou": "⠳",
		"st": "⠌"
	},
	"exceptAtBeginning": {
		"ing": "⠬",
		
		"ound": "⠨⠙",
		"ance": "⠨⠑",
		"sion": "⠨⠝",
		"less": "⠨⠎",
		"ount": "⠨⠞",

		"ence": "⠰⠑",
		"ong": "⠰⠛",
		"ful": "⠰⠇",
		"tion": "⠰⠝",
		"ness": "⠰⠎",
		"ment": "⠰⠞",
		"ity": "⠰⠽"
	},
	"onlyAtBeginning": {
		"be": "⠆",
		"con": "⠒",
		"dis": "⠲"
	},
	"whenSurrounded": {
		"ea": "⠂",
		"bb": "⠆",
		"cc": "⠒",
		"ff": "⠖",
		"gg": "⠶"
	},
	"exceptAfterO": {
		"one": "⠐⠕"
	},
	"exceptAfterAorO": {
		"under": "⠐⠥"
	}
}
const brailleMap = {};

for (let key in brailleMapObject.onlyWhenStandingAlone) {
    if (["orHasCommonContraction", "WithoutLowerPunctuation"].includes(key)) continue;
    brailleMap['(?<=(?:^| |-)[([{\'"]*)(?<=⠠?)'+key+'(?=[,;:.!?)\\]}\'"]*(?:$| |-))'] = {translation: brailleMapObject.onlyWhenStandingAlone[key], length: key.length};
}

for (let key in brailleMapObject.onlyWhenStandingAlone.orHasCommonContraction) {
    brailleMap['(?<=(?:^| |-)[([{\'"]*)(?<=⠠?)'+key+'(?=(?:\'(?:d|(?:ll)|(?:re)|s|t|(?:ve)))?[,;:.!?)\\]}\'"]*(?:$| |-))'] = {translation: brailleMapObject.onlyWhenStandingAlone.orHasCommonContraction[key], length: key.length};
}

for (let key in brailleMapObject.onlyWhenStandingAlone.WithoutLowerPunctuation) {
    brailleMap['(?<=(?:^| |-)[([{]*)(?<=⠠?)'+key+'(?=[)\\]}]*(?:$| |-))'] = {translation: brailleMapObject.onlyWhenStandingAlone.WithoutLowerPunctuation[key], length: key.length};
}

for (let key in brailleMapObject.exceptWhenStandingAlone) {
    brailleMap['(?:(?<=\\w)(?<=⠠?)'+key+')|'+key+'(?:(?=\\w))'] = {translation: brailleMapObject.exceptWhenStandingAlone[key], length: key.length};
}

for (let key in brailleMapObject.exceptAtBeginning) {
    brailleMap['(?<=\\w)(?<=⠠?)'+key] = {translation: brailleMapObject.exceptAtBeginning[key], length: key.length};
}

for (let key in brailleMapObject.onlyAtBeginning) {
    brailleMap['(?:^| )(?<=⠠?)'+key] = {translation: brailleMapObject.onlyAtBeginning[key], length: key.length};
}

for (let key in brailleMapObject.whenSurrounded) {
    brailleMap['(?<=\\w)(?<=⠠?)'+key+'(?=\\w)'] = {translation: brailleMapObject.whenSurrounded[key], length: key.length};
}

brailleMap['(?<=[^o])(?<=⠠?)one'] = {translation: brailleMapObject.exceptAfterO.one, length: 3};
brailleMap['(?<=[^ao])(?<=⠠?)under'] = {translation: brailleMapObject.exceptAfterAorO.under, length: 5};

for (let key in brailleMapObject) {
    if (["onlyWhenStandingAlone", "exceptWhenStandingAlone", "exceptAtBeginning", "onlyAtBeginning", "whenSurrounded", "exceptAfterO", "exceptAfterAorO"].includes(key)) continue;
    brailleMap[escapeRegex(key)] = {translation: brailleMapObject[key], length: key.length};
}


const entries = Object.entries(brailleMap);
entries.sort((a, b) => a[1].length - b[1].length);
const sortedList = entries.map(([key, value]) => [key, value.translation]).reverse();
