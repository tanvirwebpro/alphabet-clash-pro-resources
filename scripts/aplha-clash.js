// function play(){
//     // 1---
//     const homeSection =document.getElementById('first-section');
//     homeSection.classList.add('hidden');
//      const playGroundSection =document.getElementById('play-ground-section');
//      playGroundSection.classList.remove('hidden');
// }
// function handleKeyboardButtonPress(){
// console.log('button pressed');
// }
// document.addEventListener('keyup', handleKeyboardButtonPress)

function handleKeyboardKeyupEvent(event){
    const playerPressed =event.key;
    console.log('player pressed',playerPressed);
    const expectedAlphabet =document.getElementById('current-alphabet');
    const alphabet = (expectedAlphabet.innerText).toLowerCase() ;
    console.log(playerPressed,alphabet);

    if(playerPressed === alphabet){
        console.log('success');
        // get the current score
        const currentScoreElement =document.getElementById('current-score');
        const currentScoreText =currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // increase the score by 1
        const newScore = currentScore + 1;
        // show the updated score
        currentScoreElement.innerText=newScore;


        removeBackgroundColorById(alphabet);
        continueGame();
    }
    else {
       const currentLifeElement =document.getElementById('current-life');
       const currentLifeText =currentLifeElement.innerText;
       const currentLife =parseInt(currentLifeText);
       const newLife =currentLife -1;
       currentLifeElement.innerText = newLife;
    }
}



// function handleKeyboardKeyup(event){
//     const playerPressed = event.key; 
    
//     const currentAlphabetElement =document.getElementById('current-alphabet');
//     const currentAlphabet =currentAlphabetElement.innerText;
//     const expectedAlphabet =currentAlphabet.toLowerCase();
//     console.log(playerPressed , expectedAlphabet);

//     if( playerPressed === expectedAlphabet){
//         console.log('score +');
//     }
//     else{
//         console.log('minimize life point')
//     }




// }

document.addEventListener('keyup',handleKeyboardKeyupEvent);

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
