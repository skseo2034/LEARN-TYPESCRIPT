// 인터페이스
interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
}

var developer: Developer;
var person: Person;

// developer = person; // person 에 skill 이 없으므로 호환 안됨.
person = developer;

class Person1 {
	name: string;
}

class Developer1 {
	name: string;
	skill: string;
}

// developer = new Person1(); // person1 에 skill 이 없으므로 호환 안됨.
person = new Developer1();

// 함수
var add = function(a: number) {
	// ...
}

var sum = function(a: number, b: number) {
	//.. 
}

//add = sum; 오류
sum = add;

// 제네릭
interface Empty<T> {
	// ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
	data:T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;