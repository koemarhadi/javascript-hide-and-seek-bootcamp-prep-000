function getFirstSelector(selector) {return document.querySelector(selector)}
function nestedTarget() {return document.querySelector("#nested .target")}
function deepestChild() {const node = document.getElementById("grand-node");
  var deepestNode = node.children[0].children[0].children[0].children[0]; return deepestNode}

function increaseRankBy(n) {const nodeList = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < nodeList.length; i++) {nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n} }
