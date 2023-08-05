const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const newTutorials = tutorials.map((phrase) => {
    let newPhrase = "";
  
    newPhrase += phrase[0].toUpperCase();
  
    for (let i = 1; i < phrase.length; i++) {
      if (phrase[i] === " ") {
        newPhrase += phrase[i];
        newPhrase += phrase[i + 1].toUpperCase();
        i++;
      } else {
        newPhrase += phrase[i];
      }
    }
  
    return newPhrase;
  })

  return newTutorials
}


