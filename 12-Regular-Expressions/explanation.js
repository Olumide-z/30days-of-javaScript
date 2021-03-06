/** RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.

Pattern
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let see some of the flags:

g:is a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline */

//Creating a pattern with RegExp Constructor
//Declaring regular expression without global flag and case insensitive flag.
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

//Declaring regular expression with global flag and case insensitive flag.

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
//Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
let regEx = new RegExp('love','gi')

/*Creating a pattern without RegExp Constructor
Declaring regular expression with global flag and case insensitive flag.
*/

let regEx= /love/gi

//The above regular expression is the same as the one which we created with RegExp constructor

let regEx= new RegExp('love','gi')


//RegExpp Object Methods
//Let see some of RegExp methods

/*Testing for a match
test():Tests for a match in a string. It returns true or false.
*/
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)
//true

//Array containing all of the match
//match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)
//["love", index: 2, input: "I love JavaScript", groups: undefined]

const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result)
//["love"]

//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)
//2

//Replacing a substring
//replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
//JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
//JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)
//JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  
//I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting
