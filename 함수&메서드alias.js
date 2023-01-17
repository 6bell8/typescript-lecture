var 함수4 = function () {
    return 10;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (a) {
        return "멍";
    },
    cutZeroType: function (a) {
        throw new Error("Function not implemented.");
    },
    removeType: function (a) {
        throw new Error("Function not implemented.");
    },
};
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
function removeDash(a) {
    var result = a.replace(/-/g, "");
    return Number(result);
}
회원정보.plusOne(1);
회원정보.changeName("악");
