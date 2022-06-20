// class 는 ES2015 (ES6) 부터 소개된 최신 문법이다.


// 1) 과 2)의 코드는 동일하다. 즉, ES6 이전에 나온 문법 들로도 protype 을 이용한 상속이라 던가 이런 개념들을 생성자 함수로 다 구현 할 수 있었다.
// 이런 패턴들을 java 개발자 객체지향 에 익숙한 개발자들이 편하게 사용하기 위해 class 기반의 문법을 제공한 것이다.
// 실제적으로 바벨등으로 돌려서 보면 1)번의 문법을 사용했다는 것을 알수 있다. 즉, protype 개녑의 상속이 계속 유지가 되는 것이다.

// 1)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var capt = new Person('캡틴', 100);

// 2)
class Person {
    //클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30);
console.log(seho);
