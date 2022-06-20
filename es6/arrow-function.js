// ES5 - 함수 선언문
function sum(a, b) {
	return a + b;
}

// EX5 - 함수 표현식
var sum = function(a, b) {
	return a + b;
}

// ES6+ - 함수 표현식 (화살표 함수)
var sum = (a, b) => {  // function 이란는 글자를 => 로 대체한다. 즉, ES6는 기존 문법의 라인수를 줄이고 가독성을 높이는 관섬에서 나왔다라고 보변 된다.
	return a + b; 
}

var sum = (a, b) => a + b; // return 값이 하나 일때 이렇게 줄일수 있다.

// 타입스크립트의 화살표 함수
var sum = (a: number, b: number): number => { 
	return a + b; 
}
