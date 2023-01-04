// 처음 num은 파라미터에서 스타일을 지정해주는 것
// 두번째 num은 리턴값의 스타일을 지정해주는 것이다.
function 함수(x) {
    return x * 2;
}
//void 함수는 실수로 무언가 리턴하는 것을 막을 수 있음
//void는 텅 비었다라는 함수
function 함수2(x) { }
// ?는 | undefined 의미가 함축 된 뜻(다른 의미가 들어와도 괜찮다)
// 타입을 지정할 때,
function 함수3(x) {
    console.log("x" + 1);
    //따옴표없는 x는 유니온 타입이기때문에 사용이 불가
}
function 홍길동(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다");
    }
}
function 자릿수(x) {
    return x.toString().split("").length;
}
// 처음에 파라미터 타입 지정
function 결혼가능(월소득, 집보유, 매력점수) {
    // 총 점수 지정
    var score = 0;
    score += 월소득;
    // 집보유 시 score에 더하기
    if (집보유 == true) {
        score += 500;
    }
    // 매력점수 상이라면 플러스백
    if (매력점수 == "상") {
        score += 100;
    }
    else {
        score += 0;
    }
    // 점수 이상이면 결혼가능
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼가능(100, true, "상"));
