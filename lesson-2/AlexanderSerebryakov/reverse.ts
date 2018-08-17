

/**
 * Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 * цифры и специальные символы должны остаться на месте
 *   s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 *   s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 *   s1tar3t 2   low5  ->  t1rat3s 2   wol5
 *   */

function reverseWords(str: string): string
{
    function reverseItem(item: string): string
    {
        const arr: string[] = item.split('');
        let far: string[] = [];

        for (const v of arr)
        {
            far.unshift(v);
        }

        return far.join('');
    }

    var s : string[] = str.split(' ');
    var r: string = "";

    for (const v of s)
    {
        if (v != '')
        {
            r = r + reverseItem(v) + ' ';
        }
        else
        {
            r = r + ' ';
        }
    }

    // -
    
    return r.trim();
}

console.log(reverseWords("привет   о дивный   мир   тайпскрипта"))
