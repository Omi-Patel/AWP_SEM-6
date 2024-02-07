// console.log("hello");

var inp = document.getElementById("inp").value;
var btn = document.getElementById("btn")
var res = document.getElementById("ans")
// btn.addEventListener('onclick', fun());


function fun() {
    var ans = "";

    // console.log(inp);
    for (var i = inp.length - 1; i >= 0; i--) {
        ans += inp.charAt(i);
    }
    // console.log(ans);

    res.innerHTML = ans

}
// console.log(ans);
