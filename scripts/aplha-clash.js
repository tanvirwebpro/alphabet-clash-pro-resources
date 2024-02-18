// function play(){
//     // 1---
//     const homeSection =document.getElementById('first-section');
//     homeSection.classList.add('hidden');
//      const playGroundSection =document.getElementById('play-ground-section');
//      playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    // generate a random  alphabet
    const alphabet =getARandomAlphabet();
    console.log('your random aplphabet',alphabet);
    // set randomly generated alphabet to the screen
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('first-section');
    showElementById('play-ground-section');
    continueGame();

}
