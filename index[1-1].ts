// 타입 저장하는 법
// type Name : 내타입 = 123

// 배열만 들어오는 문법
// let Name: string[] = ["park", "kim"];

// 뭐가 들어오는지 불확실 할때에는 ? 문법을 사용
//let Name: { name?: string } = {};

// 두개 타입의 변수를 저장하고 싶을 때
//let Name: string | number = 123;

// 엄격한 함수문법 이 괄호 안에는 number만 들어와야한다.
//function 함수(x: number) {}

// #튜플타입 첫째는 무조건 number, 둘째는 boolean
// type Member = [number, boolean];
// let john: Member = [123, true];

// [key type] 모든 object 속성에는 string 구조의 문법이 적용된다.

// type Member = {
//   [key: string]: string;
// };
// 상단 key : string 지정 덕분에 age는 따로 objecy 지정을 해도 걸리지않음
// let john: Member = { name: "kim", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
