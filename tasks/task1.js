function palindrome(num) {
  const str = num.toString();
  const reversedArr = [...str].reverse() 
  return isPalindrom = str === reversedArr.join('')
}

palindrome(123)
palindrome(10)

