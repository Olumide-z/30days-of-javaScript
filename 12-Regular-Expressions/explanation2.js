//regular expression method continuation
//Square Bracket
    //Let's use square bracket to include lower and upper case

const pattern = '[Aa]pple' // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
//["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an…by a banana a day keeps the doctor far far away. ", groups: undefined]

const pattern = /[Aa]pple/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
//["Apple", "apple"]
//Using the square bracket and or operator , we manage to extract Apple, apple, Banana and banana.


