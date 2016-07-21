
//this function taken from http://stackoverflow.com/questions/17778921/javascript-onclick-prompt-boxes
document.getElementById('button').onclick = function()
{
//instructions and original story for the user
alert('Take a minute to read my story, then answer the questions accordingly. I graduated from the University of Washington in 2009 with a degree in journalism. I used to work for KUOW and KIRO radio stations and have taught English in South Korea. I worked as a paralegal for the last two years, but realized I hated it and desparately want a career change. I do standup comedy and improv as my hobbies because I like making people laugh.');

// global variable for if user answers yes or no
var right = "Great job. You got it right!";
var wrong = "Sorry, incorrect!";
var score = 0;

//the first prompt
var firstPrompt = prompt ('Did Judy graduate with a degree in English? Type Yes or No.').toUpperCase();

//printing to the console
  console.log('The user answered ' + firstPrompt + ' to this question.');

//if statements prompting user to type yes or no


    if (firstPrompt === "YES") {
       alert("You answered " + firstPrompt + ". "+ wrong );

    }
    else if (firstPrompt === "NO") {
       alert("You answered " + firstPrompt + ". "+right);
       score++;
    }
    else {
      alert('WTF, dude! I said type yes or no!');
    }


//second prompt
var secondPrompt = prompt ("Did Judy graduate in 2007? Type Yes or No.").toUpperCase()
{

  //printing to the console
  console.log('The user answered ' + secondPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (secondPrompt === "YES") {
       alert("You answered " + secondPrompt + ". "+ wrong );

    }
    else if (secondPrompt === "NO") {
       alert("You answered " + secondPrompt + ". "+right);
       score++;
    }
    else {
      alert('WTF, dude! I said type yes or no!');
    }
};

//third prompt
var thirdPrompt = prompt ("Did Judy teach English in North Korea? Type Yes or No.").toUpperCase()
{

  //printing to the console
  console.log('The user answered ' + thirdPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (thirdPrompt === "YES") {
       alert("You answered " + thirdPrompt + ". "+ wrong );

    }
    else if (thirdPrompt === "NO") {
       alert("You answered " + thirdPrompt + ". "+right);
       score++;
    }
    else {
      alert('WTF, dude! I said type yes or no!');
    }
};

//fourth prompt
var fourthPrompt = prompt ("Was Judy formerly a paralegal? Type Yes or No.").toUpperCase()
{

  //printing to the console
  console.log('The user answered ' + fourthPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (fourthPrompt === "NO"){
       alert("You answered " + fourthPrompt + ". "+wrong);
    } else if (fourthPrompt == "YES") {
       alert("You answered " + fourthPrompt + ". "+ right );
       score++;
    } else  {
      alert('WTF, dude! I said type yes or no!');
    }
};

//fifth prompt
var fifthPrompt = prompt ("Does Judy perform improv as a hobby? Type Yes or No.").toUpperCase()
{
  //printing to the console
  console.log('The user answered ' + fifthPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (fifthPrompt === "NO"){
     alert("You answered " + fifthPrompt + ". "+wrong);
  } else if(fifthPrompt === "YES"){
     alert("You answered " + fifthPrompt + ". "+ right );
     score++;
  } else {
    alert('WTF, dude! I said type yes or no!');
  }
};

//sixth prompt

//for loop
for (var i = 0; i < 4; i++){

//declare the variables and prompt
  var sixthPrompt = prompt ('BONUS QUESTION: How many nieces/nephews (combined) does Judy have?');
  sixthPrompt = parseInt(sixthPrompt);

//console statements for testing
  console.log('The answer is ' + sixthPrompt);
  console.log(typeof sixthPrompt);
//my if statements
    if (sixthPrompt < 6) {
    alert ('Too low! Go higher!');
    continue;
  } else if (sixthPrompt > 6) {
    alert ('Too high! Go lower!');
    continue;
  } else if (isNaN(sixthPrompt) === true) { //checks to see if user entered string
    alert ('Type a number!');
    continue;
  } else {
    alert ('That is right! Judy has 6 nieces and nephews total!');
    score++;
    break;
  }

};

//seventh prompt
var countries;
countries = ['South Korea', 'China', 'Japan', 'Mongolia', 'Thailand', 'Laos'];

//for loops
var numberOfGuesses = 0;


while (numberOfGuesses < 6){
  //declare the variables and prompt
  var seventhPrompt = prompt('BONUS QUESTION: Judy has visited several countries in Asia. You have 6 chances to guess one Asian country she has been to. Go!').toUpperCase();

  //boolean
  var finish = false;

  for (var k = 0; k < countries.length; k++) {
  if (seventhPrompt === countries[k].toUpperCase()) {
      alert ('Congrats! Judy has visited ' + countries[k] + '! In total, Judy has visited ' + countries + '.');
      numberOfGuesses = 7;
      score++;
      finish = true;
      break;
  }
}
  if (finish === false) {
    alert ('Nope! Keep guessing!');
    numberOfGuesses += 1;
  }

};

//scorekeeping
if (score >= 4){
  alert ('Your score was ' + score + ' out of 7. Congrats!');
}
else {
  alert ('Your score was ' + score + ' out of 7. We\'re not going on a second date!');
}



};
