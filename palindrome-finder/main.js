


// User inserts a sentence
var inputWord;
do {
    inputWord = prompt("Inserire una parola/frase per verificare se sia palindroma");
} while(!isNaN(inputWord))

// display it in the console
console.log(inputWord);

// comunicate if the sentence is palindrome or not, calling the isPalindrome function
if (isPalindrome(inputWord)) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita non è palindroma");
}




function isPalindrome(word) {
    // make the word lowercase and erase all whitespaces
    word = word.toLowerCase().replace(/ /g, '');

    // initialize the variable with the result as true
    var result = true;

    // Compare the first and last letter, then the second and the last-but-one and so on
    // if they are equal go on, otherwise change he result in false and end the loop
    var leftIndex = 0;
    var rightIndex = word.length - 1;
    while (leftIndex < Math.floor(word.length / 2) && result) {

        if (word[leftIndex] != word[rightIndex]) {
            result = false;
        }
        leftIndex++;
        rightIndex--;
        
    }
    return result;
}
