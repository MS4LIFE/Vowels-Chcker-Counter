'Use Strict'

function checkVowels() {

    let text = document.getElementById("inputText").value
    text = text.toLowerCase();
    let vowelCount = 0;
    let vowelRes = []

    for (let i = 0; i < text.length; i++) {

        let char = text.charAt(i);
        isVowel(char) && (vowelCount++, vowelRes.push(char))
    }
    console.log(vowelRes);
    const result = document.getElementById('result');
    result.textContent = `Total Vowels: ${vowelCount}, Vowels are: (${vowelRes})`

}

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return vowels.includes(char)
}