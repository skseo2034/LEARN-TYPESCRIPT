// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
	var c = 'hi';
	return b + c;
}

// 타입 추론 기본 2
/* interface Dropdown<T> {
	value: T;
	title: string;
}

var shoppingItem: Dropdown<string> = {
	value: 'aaa a',
	title: 'bbbb',
} */

// 타입 추론 기본 3
interface Dropdown<T> {
	value: T;
	title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
	description: string;
	tag: K;
}


var detailedItem: DetailDropdown<string> = {
	title: 'abc',
	description: 'ab',
	value: 'a',
	tag: 'b',
}

// Best Common Type : Typescript 가 해당 타입을 어떤 타입인지? 매겨나가는 알고리즘 이다.
var arr = [1, 2, true, true, 'a'];