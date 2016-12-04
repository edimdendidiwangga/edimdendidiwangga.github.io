var Div1 = document.getElementById('eldest-parent');
var Div2 = document.getElementById('a-child');
var Div1Childs = Div1.children[0];
var Div2previous = Div2.previousElementSibling;
var Div2next = Div2.nextElementSibling;

var ParentC = Div2.parentNode;
var ParentB = ParentC.parentNode;
var ParentA = ParentB.nextElementSibling;

Div1Childs.innerHTML = "Diakses Melalui Eldest Parent";
Div2previous.innerHTML = "Diakses Melalui a Child";
Div2next.innerHTML = "Diakses Melalui a Child";
ParentA.innerHTML  = "Diakses Melalui a Child";