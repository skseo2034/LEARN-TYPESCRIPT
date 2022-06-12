interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {
	return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

var tony = introduce();
console.log(tony.skill); // 유니온 타입은 공통 속성만 접근 가능하다.

if ((tony as Developer).skill) { // 타입 단언을 이용하여야 skill 을 가져 올 수 있다.
	var skill = (tony as Developer).skill;
	console.log(skill);
} else if ((tony as Person).age) {
	var age = (tony as Person).age
	console.log(age);
} // => 가독성 떨어짐.

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
	return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
	tony.skill;
} else {
	tony.age;
}