/* instructions
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".*/


// solution

function disemvowel(str) {
  // the str variable takes the given string and removes all occurences of the letters in the bracket
 	var str = str.replace(/[aeiou]/ig,'');
  return str;
}


Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")



  