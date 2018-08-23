/*
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
 */

type primitive = boolean | string | number;

function isInArray(list: primitive[], ...rest: primitive[]): boolean {
    const hash: {[id: string]: boolean} = {};

    list.forEach((val: primitive) => hash[`${val}`] = true);

    for (let i: number = 0; i < rest.length; i++) {
        const val: primitive = rest[i];
        if (!(val in hash)) {
            return false;
        }
    }

    return true;
}
