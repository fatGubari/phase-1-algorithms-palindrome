function isPalindrome(word) {
  // Write your algorithm here
  let palindrome = ""
 
  for (let i = word.length-1; i >= 0; i--) { 
    palindrome += word[i]
  }
    console.log(palindrome)
  if (palindrome === word) {
    return true
  }else{
    return false
  } 
}

/* 
  Add your pseudocode here
  input
  funReverse(input)
    for input.leangth ; i--
      revInput += input

    if revInput === input 
      return ture
    else
      return fal

  print(check(input,revInput))
*/

/*
  Add written explanation of your solution here
  input string
  make a variable that will hold the reverse of the string
  compare the revers string with the original string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
