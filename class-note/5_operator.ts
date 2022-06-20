/* function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100); */

// 파라미터 도는 변수에 하 가지 이상의 타입을 사용하고 싶을때 union type 을 사용한다.
var seho: string | number | boolean;
function logMessage(value: string | number) { // union type 
    if (typeof value === 'number') {
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    //someone.name;
   // someone.age;
   // someone.skill;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100});

// 인터섹션 타입 '&' 사용
//var seho: string | number | boolean;
//var capt: string & number & boolean;

// Developer 와 Person 의 속성을 모두 포함한것이 someone 이다.
// 위의 askSomeone 의 union type 과 비교 해 보세요.
function askSomeone1(someone: Developer & Person) { 
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone1({ name: '디벨로퍼', skill: '웹 개발', age: 34}); // age 까지 넘겨야 한다. Developer 타입과  Person 타입을 합친 새로룬 타입이 되는 것이다.
