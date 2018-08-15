function reverseSentence(sentence: string): string {
    return sentence
        .split(/\b/)
        .map((word: string) => reverseWord(word))
        .join('');
}

function reverseWord(word: string): string {
    const isWord: boolean = /[a-zA-Z]+/.test(word);
    if (!isWord) {
        return word;
    }

    const letters: string[] = word.split('');
    const reversed: string[] = letters
        .filter((letter: string) => /[a-zA-Z]+/.test(letter))
        .reverse();

    letters.forEach((letter: string, index: number) => {
        if (/[a-zA-Z]+/.test(letter)) { return; }
        reversed.splice(index, 0, letter);
    });

    return reversed.join('');
}
