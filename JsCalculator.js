const display = function (val) {
  document.querySelector(".textval").value += val;
};
const evl = function () {
  let x = document.querySelector(".textval").value;
  const y = eval(x);
  document.querySelector(".textval").value = y;
};
const clr = function () {
  document.querySelector(".textval").value = "";
};
const back = function () {
  const x = document.querySelector(".textval").value;
  const y = x.slice(0, -1);
  document.querySelector(".textval").value = y;
};
const ins = function () {
  const x = document.querySelector(".textval").value;
  x.lastIndexOf("(") > x.lastIndexOf(")") ? display(")") : display("(");
};
