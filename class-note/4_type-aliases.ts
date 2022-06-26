/* interface Person1 {
    name: string;
    age: number;
} */

type Person1 = {
    name: string;
    age: number;
}

var seho: Person1 = {
    name: '세호',
    age: 30
}

type Mystring = string;
var str: Mystring = 'hello';


type Todo = {id: string, title: string, done: boolean};
function getTodo(todo: Todo) {
    
}