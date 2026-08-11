
/* 
Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string  */

function checkPalindrome(str){

    let chars = str.split("")
    let rev = ""

    for (let i = chars.length-1; i >=0; i--) {
       
        rev = rev + chars[i]
      // rev = `${rev}${chars[i]}`;  
    } 
    console.log(rev);
     
    if(str == rev){
        console.log("Its a palindrome");
        
    }else {
        console.log("Not a palindrome");
        
    }
    
}
 checkPalindrome("madam")
 checkPalindrome("level")
 checkPalindrome("hello")


