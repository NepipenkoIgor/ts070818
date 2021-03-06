export function reverseSentence(sentence: string): string {
    // Split sentence using /\s/, '.' or ',' signs.
    // ('hell\noeeew  ,jii.wefff  ' ==> ['hell', '\n', 'oeeew', '  ,', 'jii', '.', 'wefff'])
    // If this functionality is excess you can use sentence.split(' ').map(...).join(' ');
    const splittedSentence: string[] = splitSentence(sentence);
    return splittedSentence
        .map((word: string) => reverseWord(word))
        .join('');
}

function splitSentence(sentence: string): string[] {
    const regExp: RegExp = /[\s,.]+/g;
    let match: RegExpExecArray | null = regExp.exec(sentence);
    const result: string[] = [];
    let lastIndex: number = 0;

    while (match !== null) {
        const word: string = sentence.slice(lastIndex, match.index);
        const splitterLength: number = match[0].length;

        lastIndex = match.index + splitterLength;
        result.push(word, match[0]);
        match = regExp.exec(sentence);
    }

    const lastWord: string = sentence.slice(lastIndex, sentence.length);
    result.push(lastWord);

    return result;
}

function reverseWord(word: string): string {
    const wordRegExp: RegExp = /[a-zA-Z]+/;
    const isWord: boolean = wordRegExp.test(word);
    if (!isWord) {
        return word;
    }

    const letters: string[] = word.split('');
    // extract special signs and revers
    const reversed: string[] = letters
        .filter((letter: string) => wordRegExp.test(letter))
        .reverse();

    // paste special signs in their indexes
    letters.forEach((letter: string, index: number) => {
        if (wordRegExp.test(letter)) { return; }
        reversed.splice(index, 0, letter);
    });

    return reversed.join('');
}