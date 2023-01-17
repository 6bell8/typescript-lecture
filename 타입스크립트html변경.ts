//null 제목변수에 narrowing(if) 확정을 짓지않으면 변수가 팅궈짐

let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

// narrowing 다른 방법 as Element라는 요소로 확정해주세요. 라는 문법(비상용)
let 제목2 = document.querySelector("#title") as Element;
제목2.innerHTML = "반가워요";

// 조건의 ?. 는 innerHTML이 있으면 출력해주고, 없으면 undefined를 출력해주는 것
let 제목3 = document.querySelector("#title");
if (제목3?.innerHTML != undefined) {
  제목3.innerHTML = "반가워요";
}

// class, href, head tag 같은 경우 HTMLAnhchorElement 태그를 명확하게 사용해야 된다.
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

// narrowing 무시문법
let 버튼 = document.getElementById("#button");
버튼?.addEventListener("click", function () {
  console.log("버튼");
});

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "test2.jpg";
}

// 다수 class 변경 할때는 forEach 반복문 돌려서 narrowing 하기
let 링크2 = document.querySelectorAll(".naver");

// forEach 객체반복문
링크2.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
