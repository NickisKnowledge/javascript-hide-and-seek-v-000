function getFirstSelector(selector) {
    return document.querySelector(selector);
}
function nestedTarget() {
    return document.querySelector('div div div div div');
}
function deepestChild() {
    var grandNode = document.getElementById('grand-node');
    return grandNode.querySelector('div div div div div');

}
function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i ++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}
