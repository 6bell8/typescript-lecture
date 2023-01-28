function 기계() {
    this.q = "strike";
    this.w = "snowball";
}
//prototype = 유전자
// prototype 까지 전달되는 이유는 직접자료를 가지고 있으면 그거 출력, 없으면 부모 유전자까지 뒤져서 나오는 것.
//let nunu = new 기계();
기계.prototype.name = "kim";
