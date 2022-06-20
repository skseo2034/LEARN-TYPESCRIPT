/* function logText(text) {
    console.log(text);
    return text;
}

logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true */


/* function logText<T>(text: T): T {
    console.log(text);
    return text;
}

logText<string>('하이'); // 호출하는 시점에 타입을 넘겨 준다.
logText<number>(10);
logText<boolean>(true); */

/* function logText(text: string) {
    console.log(text);
    //text.split('').reverse().join('');
    return text;
}

function logNumber(num: number) {
    console.log(num);
    //text.split('').reverse().join('');
    return num;
} */

// union type 으로 input 에 대한 문제는 해결 되었으나, 반환값은 string, number 둘다 이다. 즉 둘 공통 메소드 밖에 사용 못함, 문자열.split 사용못함.
/* function logText(text: string | number) { 
    console.log(text);
    //text.split('').reverse().join('');
    return text;
}

const a = logText('a');
//a.split(''); // 문자열임에도 해당 함수 사용못함.
logText(10); */


function logText<T>(text: T): T { 
    console.log(text);
    //text.split('').reverse().join('');
    return text;
}

const str = logText<string>('abc');
str.split(''); // 문자열 함수 사용 가능
const login = logText<boolean>(true);

// 인터헤이스에 제네릭을 선언하는 방법
/* interface Dropdown {
    value: string;
    selected: boolean;
}

const obj: Dropdown = {value: 'abc', selected: false};
const obj: Dropdown = {value: 10, selected: false};
 */

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = {value: 'abc', selected: false};
const obj2: Dropdown<number> = {value: 10, selected: false};

// 제넥릴의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });

    return text;
}

logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2= 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength1<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength1('hi');
//logTextLength1(10);

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

//getShoppingItemOption(10);

getShoppingItemOption('name');