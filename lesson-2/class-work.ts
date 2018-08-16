// function getAverage(...a: [number, string]): string {
//     const total = a + b + c;
//     /*  let count = 2;
//       if (typeof c !== 'undefined') {
//           total += c;
//           count++;
//       }*/
//     const average = total / 3;
//     return `The average is ${average}`;
// }
//
// const result: number = getAverage(2, 1, 1);
// type JSONData = {
//     id: string;
//     account: {}
// };
// let a;
// a = 1;
// a = 's';
//
// function transformData(data: JSONData): void {}

// function isString(a: number | string): a is string  {
//     return typeof a === 'string';
// }
//
// function average(a: string, b: number): number;
// function average(a: number, b: number, c: number): number;
// function average(a: number | string, b: number, c?: number): number {
//     let result: number = 0; // = parseInt(a);
//
//     if (isString(a)) {
//         result = parseInt(a);
//     } else {
//         result += a;
//     }
//     return 1;
// }
//
// average(1, 1);
// average(1, 1, 1);

// function f(this: void, a: number): void {
//
// }
//
// f(1);
interface IXPoint {
    x: number;

    sum(): number;
}

// interface IYPoint {
//     y: number;
// }
//
// class Point {
//
//     public readonly x: number;
//     protected y: number;
//     private z: number;
//
//     public constructor(x: number, y: number, z: number) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
//
//     public sum(): number {
//         //this.x = 1;
//         return 3;
//     }
// }
//
// const point: Point = new Point(1, 2, 3);
//
//
// class Mypoint extends Point {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//         this.
//     }
// }
//
// class Singleton {
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
//
//     private static instance: Singleton;
//
//
//     private constructor() {}
//
//
// }
//
// const instance: Singleton = Singleton.getInstance();
//
//
// abstract class Base {
//
//     public title!: string;
//
//     public abstract sum(): void;
//
//     public multi(): number {
//         return 1;
//     }
// }
//
// class A extends Base {
//     public sum(): void {}
// }

// const user: IUser;

// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

function logMethod(target: any, key: string, descriptor: any) {
    const originalDescriptorValue: any = descriptor.value;
    return {
        ...descriptor,
        value: (...args: any[]) => {
            const b: string = args.map((a: any) => JSON.stringify(a))
                .join();
            const result: any = originalDescriptorValue(args);
            const r: string = JSON.stringify(result);
            console.log(`Call: ${key}(${b}) => ${r}`);
            return result;
        }
    };
}

class MathLib {
    @logMethod
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

const lib: MathLib = new MathLib();

lib.areaOfCircle(10);
lib.areaOfCircle(2);