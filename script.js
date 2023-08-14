
//   validaton or pattern matching in javascript (REGEX → Regular expression)
// if we write something in javascript inside the double forward slash(//) then it's considered as regex

let regex1 = /you/g
let string1 = "hello nn yes you are nitish how are you"

// here i want to find out the nitish keyword in the string1, so for that i will use here exec() function which is used with the regex


//EXEC()
// exec() function returns a array  with the index value if it found the value if they not find any value then it return null

const output1 = regex1.exec(string1)
console.log(output1);

//GLOBAL MODIFIER
// using global modifier "g" to identify the same keyword if present in the string 
const output2 = regex1.exec(string1)
console.log(output2);



// CASE INSENSITIVE MODIFIER
// case insensitive in javascirpt we use modifier "i";
let regex2 = /niTIsH/i
let string2 = "hello nn yes you are nitish how are you"

const output3 = regex2.exec(string2)
console.log(output3);

// TEST() FUNCTION
// test() function is used with regex to match the value if they are present in the string and it returns either true or false
// test() function is checking every letter that's why when we write a single letter of a word it's return true

let regex3 = /exp/
let string3 = "today nitish is study regex i.e regular expression"

const output4 = regex3.test(string3)
console.log(output4);


// MATCH() FUNCTION
// match () function match all the keyword that we put into the regex matching expression
let regex4 = /match/g
let string4 = "This function is match function match isn't it match"

const output5 = string4.match(regex4)
console.log(output5);   

// REPLACE() METHOD
// with the replace() method if we are using global("g") modifier then it changes all the replace value that we want to change and if we not use global modifier then it will change only one value that it will get first time
let regex5 = /is/g
let string5 = "This is replace method of regex is it correct yes it is correct"

const output6 = string5.replace(regex5,"nitish")
console.log(output6);

//METACHARACTER IN JAVASCRIPTS
// there is some javascript expression in js which help us in find out the matching character
// here dot(.) metacharacter match the missing character and return the true if we use test() method and return index if we use exec() method  following is the example
// here we can also match the pattern which has only the initial and last character using the astrisk(*)

// let regex6 = /wel.ome/ // find out one missing character also it will match if you write we.lc.m.e
// let regex6 = /w*e/ // find out multiple missing character which is continious removed from a given word
// let regex6 = /^welcome/ // caret(meta character) match the para which is starting welcome (return true if found or false if not found)
// let regex6 = /again$/ // matching from the last
let regex6 = /welc?ome?/ // here you can remove c and e still it will give you true and index in exec() method

let string6 = "welome you all in my yt channel nitish official,  you all again"

 const output7 = regex6.test(string6)
 console.log('check Op →',output7);

 const output8 = regex6.exec(string6)
 console.log(output8);



 // CHARACTER SETS AND RANGES IN RegEx
//  let regex7 = /[abc]def/ 
// let string8 = "Hello tody i am reading character sets and ranges regex adef"

 // here we are checking def along with either of a,b or c it's doesn't matter you write whatever but for matching  you need def along with a or b or c then it will return true with test method otherwise it will return false

//  let regex7 = /[a-z]def/
//  let string8 = "Hello tody i am reading character sets and ranges regex xdef"

let regex7 = /[^def]def/ // inside the bracket [^def] says not to include def
 let string8 = "Hello tody i am reading character sets and ranges regex ddef"

 let output9 = regex7.test(string8)
 console.log(output9);



// FORM VALIDATION
function confirmEmployee(){
    let eid = document.getElementById('eid').value;
    let matchregEx = /[DE]256[10-99]/i

   const output =  matchregEx.test(eid)

   if(output===true){
    alert('this employee is real!!')
   }else{
    alert('this employee is not real!!! ')
   }
}



// short hand character class
// let regex8 = /321/ // match only the digits 321
 let regex8 = /\d+321\d/ // backslash (\d) ensure take a digit before 3 which is 4 and + ensure take all digits 
 let string9 = "Hello this is regex checking ph number 9876543210"

 let output10 = regex8.exec(string9);
 console.log(output10);
