
/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
function getUnique<T>(arr: T[]): T[] {
    const res: T[] = [];
    const uniq: Map<T, boolean> = new Map();
    for (const v of arr) {
        uniq.set(v, true);
    }
    uniq.forEach((v: boolean, k: T) => {
        res.push(k);
    });
    return res;
}

/*
  console.log(getUnique<number>([1, 3, 5, 67, 3, 45, 5, 98, 22]));
  console.log(getUnique<string>([1, 3, 5, 67, 3, 45, 5, 98, 22])); // tslint ERROR
  console.log(getUnique<string>(['sd', '4', '45345rtfgr', '4', 'gg', 'sd'])); //["sd", "4", "45345rtfgr", "gg"]
  */

/**
 * Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 * цифры и специальные символы должны остаться на месте
 *   s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 *   s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 *   s1tar3t 2   low5  ->  t1rat3s 2   wol5
 */
function reverseWords(str: string): string {
    function reverseItem(item: string): string {
        const arr: string[] = item.match(/[a-zа-яё]/gi) || [];
        return item
            .split('')
            .map((v: string, i: number) => {
                return /([a-zа-яё])/gi.test(item[i])
                    ? arr.pop() || ''
                    : v;
            })
            .join('');
    }
    return str.split(' ').map((v: string) => {
        return isNaN(parseFloat(v))
            ? reverseItem(v)
            : v;
    }).join(' ');
}
