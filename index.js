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

//function upperCaseFirstLetter(string) {
//  return string.charAt(0).toUpperCase()+string.slice(1);
//}

// const titleCased = tutorials.map(function(tutorial) {
//   for (let i = 0; i < tutorials.length; i++) {
//     newTutorial.push(tutorial[i].charAt(0).toUpperCase()+tutorial[i].slice(1)) }
//   return newTutorial; 
//   }

function titleCased() { 
  return tutorials.map(function(tutorial) {
  const splitSentence = tutorial.split(" "); 
  for (let i = 0; i < splitSentence.length; i++) {
      const UpperCaseWords = splitSentence[i].charAt(0).toUpperCase()+splitSentence[i].slice(1); 
      splitSentence[i] = UpperCaseWords;  
  } 
  return splitSentence.join(" ");

  //result = result.push(JoinCasedWords); 
  //return result
  }) 
}
titleCased(tutorials);



