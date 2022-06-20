// 함수의 파라미터의 타이을 정의하는 방식
/* function sum(a: number, b: number) {
    return a + b;
} */

sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

//함수에 파입을 정의하는 방식

function sum(a: number, b: number): number {
    return a + b;
}

sum(10, 20, 30, 40); // 함수의 스펙(규칙)을 정확히 이해해서 오류는 표시한다.

// 함수의 옵셔널(optional) 파라미터
function log(a: string, b?: string) { // 파라메터를 선택적으로 쓰고 싶다고 할때 ? 넣는다.

}

log('hello world');
log('hello ts', 'abc');