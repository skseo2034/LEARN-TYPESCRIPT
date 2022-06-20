enum Shoes { // 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급한다.
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Shoes1 { // 별도의 값지정.
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes1 = Shoes1.Nike;


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer == Answer.Yes ) {
        console.log('정답입니다');
    }

    if (answer == Answer.No ) {
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);