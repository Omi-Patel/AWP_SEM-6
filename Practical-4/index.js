// console.log("hello");



function fun() {

    var inp = document.getElementById("inp").value;
console.log(inp);
var btn = document.getElementById("btn");
var res = document.getElementById("ans");
// btn.addEventListener('onclick', fun());
console.log(inp);
  var ans = "";
  console.log(inp);
  // console.log(inp);
  for (var i = inp.length - 1; i >= 0; i--) {
    // console.log(charAt(i));
    ans += inp.charAt(i);
  }
  console.log(ans);

  res.innerHTML = ans;
}
// console.log(ans);
