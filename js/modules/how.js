import { sound } from "../data/sound.js";
import Home from "./home.js";

const How = (_ => {
    // cache the DOM
    const $hangman = document.querySelector(".hangman");

    const init = _ => {
      render();
    listeners();
    };

    const listeners = _ => {
        document.querySelector(".hangman__trigger").addEventListener("click" , _ => {
            sound.click.play();
            Home.init();
        });
    };

    const render = _ => {
        let markup = `
        <h1 class="hangman__title">Instructions</h1>
        <ul class="how">
            <li>Here is how to play</li>
            <li>
            When you start a new game, the game will automatically choose a random word.
            </li>
            <li>
            Your job is to guess the chosen word completely by guessing     a letter at a time by clicking on that letter.</li>
            <li>
            If you successfully guess the word within 7 tries, you win      or else you lose.
            </li>
            <li>
            If you lose, you will be hanged without mercy!!! &#9760;
            </li>
        </ul>
        <button class="button hangman__trigger">Main Menu</button>
        `;
        $hangman.innerHTML = markup;
    };

    return {
        init
    };
})();

export default How;