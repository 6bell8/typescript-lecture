function 내함수(x) {
    // narrowing 하는 방법 if를 typeof로 속성을 지정한다.
    if (typeof x == "string")
        return x + "1";
    else {
        return x + 1;
    }
}
//narrowing 복습
function 남의함수(x) {
    if (typeof x === "string") {
        return x + 1;
    }
    else {
        return x + "1";
    }
}
function 내함수02(x) {
    var arr = [];
    if (typeof x == "number") {
        arr[0] = x;
    }
    // else문 끝까지 써야 에러가 안남
}
//assertion 문법
function 내함수03(x) {
    var arr = [];
    // as라는 문법은 오른쪽에 있는 number를 덮어 써주세요 라는 문법
    // *주의 할점은 as는 상단 파라미터 자리에 문법을 확정시키는 것이지 아무때나 쓰는 것이 아님
    // 무슨 타입이 들어오는지 확실할 때 사용하는 문법, 웬만하면 narrow 문법
    arr[0] = x;
}
function 클리닝함수(a) {
    var 클리닝완료 = [];
    a.map(function (b) {
        if (typeof b === "string") {
            클리닝완료.push(Number(b));
        }
        else {
            클리닝완료.push(b);
        }
    });
    return 클리닝완료;
}
// function 만들함수(x: { subject: string | string[] }) {
//   if (x.subject == "string") {
//     return x.subject;
//   } else if (x.subject.length <= 2) {
//     return x.subject[x.subject.length - 1];
//   } else {
//     return "type error";
//   }
// }
// console.log(만들함수({ subject: ["english", "art"] }));
function 만들함수(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (x.subject.length >= 2) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "type error";
    }
}
console.log(만들함수({ subject: "math" }));
