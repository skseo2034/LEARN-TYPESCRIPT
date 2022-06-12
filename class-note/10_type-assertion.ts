// 타입 단언(type assertion) : Typescript 보다 개발자가 먼저 Type을 알고 있다 그래서 내가 간주한 타입으로 간주해서 사용해라 라는것.

var a: number | string;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
var div = document.querySelector("#app");
div.innerHTML;