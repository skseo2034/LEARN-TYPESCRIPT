/// 기본적인 타입
//js
//var str = 'hello';

//ts
//TS 대부분 ES6+를 사용하기 때문에, const 나 let 로 선언
let str: string = 'hello';
let num: number = 10;

// TS 배열
let arr1: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 'sukyo'];
let items: number[] = [1,2,3];

//TS 튜플 - 특정배열의 순서롸 타입까지 지정 하는것.
let address: [string, number] = ['gangnam', 100];

//TS 객체
let obj: object = {};
/* let person: object = {
    name: 'cape',
    age: 100
}; */
let person: {name:string, age: number} = {
    name: 'thor',
    age: 1000
}

//TS 진위값
let show: boolean = true;