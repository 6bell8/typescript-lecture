// alias는 타입에 이름을 설정하는 방법,아래내용은 return값 타입지정 하는 방법
type 함수타입 = (a: string) => number;

let 함수4: 함수타입 = function () {
  return 10;
};

// function 함수 {} == 함수선언식
// let 변수: 함수타입 ()=> {} == 함수표현식

//함수표현식안에서 함수 저장하는 방법

type Member = {
  name: string;
  plusOne: (a: number) => number;
  changeName: (a: string) => string;
  cutZeroType: (a: string) => string;
  removeType: (a: string) => number;
};

let 회원정보: Member = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName(a) {
    return "멍";
  },
  cutZeroType: function (a: string): string {
    throw new Error("Function not implemented.");
  },
  removeType: function (a: string): number {
    throw new Error("Function not implemented.");
  },
};

let cutZero: Member["cutZeroType"] = function (a) {
  let result = a.replace(/^0+/, "");
  return result;
};

function removeDash(a: string): number {
  let result = a.replace(/-/g, "");
  return Number(result);
}

회원정보.plusOne(1);
회원정보.changeName("악");
