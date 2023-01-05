//타입으로 변수를 만드는 것을 type alias
type Animal = string | number | undefined;

let 동물: Animal = 123;

// object type을 변수로 담는 법

type Bug = { name: string; age: number };
let 곤충: Bug = { name: "kim", age: 20 };

// const {}안에 있는 내용 수정을 막지못함
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

//하지만 타입스크립트를 사용하면 막을 수 있음
// readonly를 오브젝트 앞에 사용하면 수정 할 수 없음
type Girlfriend = {
  name?: string;
};

const 여친: Girlfriend = {
  name: "엠버",
};

// type도 합칠수가 있음
type Name = string;
type Age = number;

type Person = Name | Age;

// 오브젝트 타입 extend하는 방법 &
type PositionX = { x: number };
// type은 재정의가 불가능하다. const
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 22 };

type SqureType = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트변수: SqureType = {
  size: 123,
  position: [123, 1235],
};

type 테스트 = {
  name: string;
  phone: number;
  email: string;
};

type 테스트2 = {
  adult: boolean;
};

type 테스트3 = 테스트 & 테스트2;

// let 회원가입정보: 테스트3 = {
//   name: "박잔성",
//   phone: "123123",
//   adult: true,
// };
