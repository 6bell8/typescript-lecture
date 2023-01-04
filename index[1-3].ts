// 변수에 string, number를 둘 다 담을 때(union type)
// let 회원: number | string = '123';

let 회원들: (number | string)[] = [1, 2, "3"];

let 오브젝트: { a: string | number } = { a: 123 };

// 다른 파일에 같은 변수가 있으니까 에러가 남
// any 라는 기능을 활용하면, 아무 타입이나 넣어도 에러가 안남, 그래서 타입 관련 버그를 사용해도 잡아주지 않음
let 이름02: any;
이름02 = 123;
이름02 = "123";

let 이름03: unknown;
이름03 = 123;
이름03 = {};

let 나이02: string | number;

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = { score: [100, 97, 84], teacher: "Phil", friend: "John" };
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
