// let 이름: string = "kim";

// array 배열 지정하는 방법은 string[]이런식으로 지정하면된다.

// let 회원들: string[] = ["kim", "park"];

// let 회원들: { member1: string; member2: string } = {
//   member1: "kim",
//   member2: "park",
// };

let 이름: string = "박진성";
let 나이: number = 28;
let 출신지역: string = "서울";

let 신상정보: {
  이름: string;
  나이: number;
  출신지역: string;
};

let 내가좋아하는고: {
  노래: string;
  노래2: string;
} = {
  노래: "밤이깊었네",
  노래2: "송투",
};

//배열을 늘어뜨릴 때

let project: {
  노래: string[];
  날짜: number;
  나는진성이다: boolean;
} = {
  노래: ["밤이 깊었네", "별보러반짝이는"],
  날짜: 12,
  나는진성이다: true,
};
