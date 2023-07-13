let x = 0;
document.getElementById("demo").innerHTML = x;
function add() {
  if (x + 1 <= 20) {
    x = x + 1;
    return (document.getElementById("demo").innerHTML = x);
  } else {
    return false;
  }
}
function sub() {
  if (x - 1 >= 0) {
    x = x - 1;
    return (document.getElementById("demo").innerHTML = x);
  } else {
    return false;
  }
}
