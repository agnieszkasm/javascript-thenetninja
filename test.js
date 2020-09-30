
/* comparing string*/

 var string1 = "abc";
 var string2 = "ABC";

 console.log(string1.toLowerCase() === string2.toLowerCase());

 var string1 = "abc";
 var string2 = "bcd";

 console.log(string1 < string2);
 /*This is true as... a is before b in the alphabet... so thats seen less than b.. */


 var string1 = "abc";
 var string2 = "Bcd";
 console.log(string1 < string2);
 /*This is false.. as... a is before b in the alphabet... so thats seen less than b.. */



/*PREVIOUS EXAMPLES*/
/*var myString = 'I am a "fun" string'; /*OK*/
/*var myString = "I am a "fun"string"; this is not correct*/
/*var myString = 'I\'m a "fun ninja" string';  */

/*if (myString.indexOf("ninja") === -1) { */
 /*ok, i am looking for the word ninja. It is not in the 
 string so it say. OK, I will make it equal to -1
 so the statement is true, so this code is executed.*/

/*
        console.log("the word ninja is not in the string");
}

else  {
    console.log("the word ninja starts at position " + myString.indexOf("ninja"));
}

/*
console.log (myString.indexOf("string")); */
