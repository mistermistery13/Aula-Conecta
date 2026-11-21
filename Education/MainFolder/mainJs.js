import * as ProfileFunctions from "../Profile/profileJs.js";

let root = "";
if (window.location.href.includes("localhost")) {
    root = "/mysscode";
}

export { root };

// SERVICES

export const Profile = {
    checkLoginStatus: ProfileFunctions.checkLoginStatus
}

/**
 * @template {HTMLElement} T
 * @param {unknown} element
 * @param {{new (...args: any[]): T}} elementType
 * @returns {T}
 */
export function tsCheckElementById(element,elementType){
    if (element instanceof elementType){
        return element;
    }else{
        throw new Error("ts Error, we can't find the object of type " + elementType);
    }
}

// Objects
const arrText = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "-"
];

const arrMorseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    "",
    "",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "-.--",
    ".--.",
    "...",
    "-",
    "..-",
    "...-",
    "",
    "-..-",
    "--.-",
    "--..",
    "/",
    "-----",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "----.",
    "---..",
    "--...",
    "-....",
    "",
    ""
];

const arrAsciiCode = [
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "32",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "46",
    "45"
];

// CODE
export function textToMorseCode(text) {
    if (typeof (text) !== "string") {
        return
    }

    let morseText = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text.substring(i, i + 1);
        let morseLetter = arrMorseCode[arrText.lastIndexOf(letter)];

        if (i > 0) {
            morseText += " ";
        }

        if (typeof (morseLetter) !== "string") {
            letter = letter.toUpperCase();
            morseLetter = arrMorseCode[arrText.lastIndexOf(letter)];
        }

        morseText += morseLetter
    }

    return morseText;
}

export function textToAsciiCode(text) {
    if (typeof (text) !== "string") {
        return
    }

    let asciiText = "";

    for (let i = 0; i < text.length; i++) {
        let letter = text.substring(i, i + 1);
        let asciiLetter = arrAsciiCode[arrText.lastIndexOf(letter)];

        if (i > 0) {
            asciiText += " ";
        }

        if (typeof (asciiLetter) !== "string") {
            letter = letter.toUpperCase();
            asciiLetter = arrAsciiCode[arrText.lastIndexOf(letter)];
        }

        asciiText += asciiLetter;

    }

    return asciiText;
}