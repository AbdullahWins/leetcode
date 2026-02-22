function isPalindrome(x) {
    //convert the number to a string
    const string: string = x.toString();

    //get a new string to store reversed number
    let reversed: string = "";

    //use reverse for loop to go through every character from the end
    for (let i = string.length-1; i >= 0; i--) {
        reversed = reversed + string[i]
    }

    //return the result by comparing both strings
    return string === reversed;
}
