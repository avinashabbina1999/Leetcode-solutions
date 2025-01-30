/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let i=0,j=s.length-1;
    let arr = s.split('');

    while(i<j){
        while(i<arr.length && !vowels.includes(arr[i])) i++;
        while(j>-1 && !vowels.includes(arr[j])) j--;

        if(i<j){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }
    return arr.join('');
};