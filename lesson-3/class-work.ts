// const customSequence$: Observable<number> =
//     Observable.create((observer: Observer<number>) => {
//         let count: number = 0;
//         setInterval(() => {
//             observer.next(count++);
//             if (count === 5) {
//                 observer.complete();
//             }
//         }, 1000);
//     });

// const customSequence$: Observable<number> = from([1, 23, 44, 55]);
//
// customSequence$
//     .pipe(
//         map((value: number) => value * 2),
//         filter((value: number) => value > 100),
//         catchError((err: Error) => of([]))
//     )
//     .subscribe((value: number | any[]) => {
//         console.log(`Sub1 ${value}`);
//     }, () => {}, () => {
//         console.log('completed');
//     });
//
// setTimeout(() => {
//     customSequence$.subscribe((value: number) => {
//         console.log(`Sub2 ${value}`);
//     });
// }, 5000);

// const customSequence$$: BehaviorSubject<number> = new BehaviorSubject(-1);
// customSequence$$.next(1);
// // customSequence$$.next(2);
// // customSequence$$.next(3);
// // customSequence$$.next(4);
// // customSequence$$.next(5);
// setTimeout(() => {
//     customSequence$$.subscribe((value: number | string) => console.log(`Sub1 ${value}`));
//     customSequence$$.next(23);
// }, 5000);
import { from } from 'rxjs/index';
import { map, observeOn } from 'rxjs/internal/operators';
import { asap } from 'rxjs/internal/scheduler/asap';
import { async } from 'rxjs/internal/scheduler/async';

const arr: number[] = [];
for (let i: number = 0; i < 1000; i++) {
    arr.push(i);
}
console.time('Schedule');
from(arr)
    .pipe(
        observeOn(async),
        map((value: number) => value ** 2)
    )
    .subscribe(((value: number) => {}), () => {}, () => {
        console.timeEnd('Scchedule');
    });

// console.log('start');
// setTimeout(() => {
//     console.log('timeout');
// });
// Promise.resolve()
//     .then(() => {
//         console.log('promise 1');
//     });
// Promise.resolve()
//     .then(() => {
//         console.log('promise 2');
//     });
// console.log('end');