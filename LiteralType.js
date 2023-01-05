// Literal Type? 변수에 이름 or number 를 명확하게 지정하는방법
var 성함;
성함 = 123;
var 접니다;
접니다 = "대머링";
// type 속성에 literal type을 지정하면 return은 그 값밖에 못함
function 함수한번(a) { }
함수한번("hello");
function 가위바위보(a) {
    return ["가위"];
}
// as const 이상한 키워드
// 1. 오브젝트 value값을 그대로 타입으로 지정해줌
// 2. 오브젝트 속성들에 모두 readonly를 붙여줌
// 그래서 오브젝트 속성을 바꾸고 싶거나 필요할 때 사용하는 것
var 자료 = {
    name: "kim",
};
//오브젝트를 만들 때 'kim'을 지정해버리면 함수 호출 시 에러가 남
function 내함수04(a) { }
내함수04(자료.name);
