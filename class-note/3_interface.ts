// 인터페이스는 통상 실무에서 api 호출한 결고값을 정의하는데 많이 활용된다.
// FE 프레임워크를 활용할때 대부분 API 로 호출해서 데이터를 가지고 옴으로 많이 활용 된다.
interface User {
    age: number;
    name: string;
}


// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age: 100,
    name: '캡틴'
}

getUser(capt);

// 함수의 스텍(구조)에 인터페이스를 활용
// 여러명이 개발할때, 이 함수의 규칙은 이렇다 라고 정의 해서 활용할 수 있다.
interface SumFunction {
    (a: number, b:number): number;
}

var sum: SumFunction;
sum = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c', 'd'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    //sth: /abc/,
    cssFile: /\.css$/,
    jsFile:  /\.js$/
}

Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    /* name: string,
    age: number */
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴'
}