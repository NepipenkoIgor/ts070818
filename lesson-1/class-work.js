"use strict";
// interface IAccount {
//     firstName: string;
//     age: number;
// }
//
// const me = IAccount;
// const person = {
//     firstName: 'Igor',
//     age: 32
// };
//
// let me: typeof person;
// me = {
//     age: 32,
//     firstName: 'asdasd',
// };
// const account: {
//     readonly firstName: string;
//     readonly age?: number;
// } = {
//     firstName: 'Igor',
//     age: 32
// };
//
// account.age = 40;
// class A {}
//
// let b: A;
// type name = {
//     firstName: string;
// };
//
// interface IAge extends name {
//     age?: number;
// }
//
// interface IAcccount extends IAge {
//     surname: string;
// }
//
// class Person implements IAcccount {
//     public firstName!: string;
//     public surname!: string;
// }
//
// let account: Readonly<IAcccount> = {
//     firstName: 'Igor',
//     age: 32
// };
//
// account.age = 40;
// let arr: ReadonlyArray<{
//     readonly firstName: string;
//     readonly age?: number;
// }> = [
//     {
//         firstName: 'Igor',
//         age: 32
//     }
// ];
// arr[100] = '1';
// arr.push('s');
// type Admin = {
//     roles: [string]
// };
// type Manager = {
//     users: [string]
// };
//
// interface IUser<T, U, Z extends { name: string, age: number }> {
//     _id: U;
//     acount: T;
//     info: Z;
// }
//
// type SomeType = { name: string, female: false };
// let admin: IUser<Admin, string, SomeType>;
// let manager: IUser<Manager, number>;
//
//
// let cb: new (b: number) => string; // { new (b: number): string; };
//
// let coord: [number, number, number?];
// coord = [2, 2, 3];
