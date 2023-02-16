let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let overusedWords = ['really', 'very', 'basically'];

let storyWords = story.split(" "); 

console.log(storyWords.length);

let betterWords = storyWords.filter(function (words) {
      return words != 'extremely' && words != 'literally' && words != 'actually'; 
}); 

console.log(betterWords); 

let overusedWordCount = storyWords.reduce(function(acc, words) {
  if(words === 'really') {
    acc['really'] += 1;
  } else if(words === 'very') {
    acc['very'] += 1;
  } else if(words === 'basically') {
    acc['basically'] += 1; 
  }
return acc; 

}, {really: 0, very: 0, basically: 0}); 

var sentenceCount = 0; 

let sentenceCounter = storyWords.forEach(function(words) { 
    var periods = words.includes('.'); 
    var exclamationPoints = words.includes('!'); 
    if(periods) {
      sentenceCount += 1
    } else if (exclamationPoints) {
      sentenceCount+=1
    }
}); 

console.log(betterWords.length);
console.log(overusedWordCount);
console.log(sentenceCount); 
console.log(betterWords.join(' ')); 
