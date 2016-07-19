
//instructions and original story for the user
alert('Take a minute to read my story, then answer the questions accordingly. I graduated from the University of Washington in 2009 with a degree in journalism. I used to work for KUOW and KIRO radio stations and have taught English in South Korea. I worked as a paralegal for the last two years, but realized I hated it and desparately want a career change. I do standup comedy and improv as my hobbies because I like making people laugh.');

// global variable for if user answers yes or no
var right = "Great job. You got it right!";
var wrong = "Sorry, incorrect!";



//the first prompt
var firstPrompt = prompt ("Did Judy graduate with a degree in English? Type Yes or No.").toUpperCase();
{
//printing to the console
  console.log('The user answered ' + firstPrompt + ' to this question.')

//if statements prompting user to type yes or no
//maybe put a while loop in here to force user to type 'yes' or 'no.'??

    if (firstPrompt === "YES")
    {
       alert("You answered " + firstPrompt + ". "+ wrong );
    }
    else if (firstPrompt === "NO")
    {
       alert("You answered " + firstPrompt + ". "+right);
    }
    else
    {
      alert('WTF, dude! I said type yes or no!');
    }
};




/*
//second prompt
var secondPrompt = prompt ("Did Judy graduate in 2007? Type Yes or No.").toUpperCase();
{
  //printing to the console
  console.log('The user answered ' + secondPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (secondPrompt === "YES")
    {
       alert("You answered " + secondPrompt + ". "+ wrong );
    }
    else
    {
       alert("You answered " + secondPrompt + ". "+right);
    }
};

//third prompt
var thirdPrompt = prompt ("Did Judy teach English in North Korea? Type Yes or No.").toUpperCase();
{

  //printing to the console
  console.log('The user answered ' + thirdPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (thirdPrompt === "YES")
    {
       alert("You answered " + thirdPrompt + ". "+ wrong );
    }
    else
    {
       alert("You answered " + thirdPrompt + ". "+right);
    }
};

//fourth prompt
var fourthPrompt = prompt ("Was Judy formerly a paralegal? Type Yes or No.").toUpperCase();
{

  //printing to the console
  console.log('The user answered ' + fourthPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (fourthPrompt === "NO")
    {
       alert("You answered " + fourthPrompt + ". "+wrong);
    }
    else
    {
       alert("You answered " + fourthPrompt + ". "+ right );
    }
};

//fifth prompt
var fifthPrompt = prompt ("Does Judy perform improv as a hobby? Type Yes or No.").toUpperCase();
{
  //printing to the console
  console.log('The user answered ' + fifthPrompt + ' to this question.')

//if statements prompting user to type yes or no
  if (fifthPrompt === "NO")
  {
     alert("You answered " + fifthPrompt + ". "+wrong);
  }
  else
  {
     alert("You answered " + fifthPrompt + ". "+ right );
  }
};
*/
