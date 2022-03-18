let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//using the split function to generate array of the individual words
let storyWords = story.split(' ');
//console.log(storyWords.length)

//Filtering out the words in the unnecessary words from the story
let betterWords = storyWords.filter(word => {
  return !(unnecessaryWords.includes(word))
  }
);
//For creating the story again without the unnecessary words
//console.log(betterWords.join(' '));

//checking the count of each overused word 
let checkCount = overusedWords.map(word => {
  return storyWords.filter(check => {
    //console.log(word, check)
    let result = check === word? word: null;
    return result;
  }).length;
});

//Display each over used word and its count 
/*
for(let i = 0; i<overusedWords.length; i++){
  console.log(`${overusedWords[i]} : ${checkCount[i]}`);
}
*/

//spliting the story into sentences delimited by (.) or (!)
let sentences = story.split('.').join('!').split('!');
//checking for empty elements in the list before talking count, as the last fullstop at the end of story was seen as a separate statement
let sentencesCount = sentences.filter(statement => {
  return statement !== ''? statement: 0;
});


//For viewing the the various sentences in story
//sentences.forEach(elem => {console.log(elem+'\n')})


//logging the betterWords to the console
//console.log(betterWords.join(' '));


//Function to display the word and sentence count and also the number of times an overused word appears
let variousCounts = (story,overusedWords) => {
  let storyWords = story.split(' ');

  let sentences = story.split('.').join('!').split('!');
  let sentencesCount = sentences.filter(statement => {
  return statement !== ''? statement: 0;
});

  let checkCount = overusedWords.map(word => {
  return storyWords.filter(check => {
    //console.log(word, check)
    let result = check === word? word: null;
    return result;
  }).length;
});

console.log(`The word count: ${storyWords.length}\n`)

console.log(`The sentence count: ${sentencesCount.length}\n`)

//Display each over used word and its count 
console.log('The over used words and their counts')
for(let i = 0; i<overusedWords.length; i++){
  console.log(`${overusedWords[i]} : ${checkCount[i]}`);
}

};

//Calling the variousCount function with the story and overusedWords parameters
variousCounts(story, overusedWords);


//function to check the word that appears the greatest number of times
let maxWordCount = story => {
  let resultList = [];
  let storyWords = story.split(' ');
  let checkCount = storyWords.map(word => {
  return storyWords.filter(check => {
    //console.log(word, check)
    let result = check === word? word: null;
    return result;
  }).length;
});
  
  let max = Math.max.apply(Math,checkCount);
  for(let i = 0; i<storyWords.length; i++){
    resultList.push([storyWords[i], checkCount[i]]);
  }
  
  let maxWord = '';
  let theCount = 0;
   for(let i = 0; i<storyWords.length; i++){
     if(checkCount[i] >= max){
      maxWord = storyWords[i];
      theCount = checkCount[i];
     }
  }
    console.log('\nWord that appears the greatest number of times')
    return `${maxWord}: ${theCount}`;
};

//displaying the 
console.log(maxWordCount(story))
