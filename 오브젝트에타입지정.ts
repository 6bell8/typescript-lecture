// class 키워드 만드는 방법이랑 유사
interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

// 변수가 많으면 interface를 extends로 복사가능, 인터페이스는 중복선언가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// 확장
type Animale = { name: string };
type Cat = { age: number } & Animale;

// 배열 type은 밖에다가 쓰는 것.
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}

interface Cart2 extends Cart {
  card: boolean;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

let 짱바구니: Cart2 = { product: "청소기", price: 7000, card: false };
