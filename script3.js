var mainDiv = document.getElementById("main");

var divcontent = document.createElement('div');
var mainDivAttrId2 = document.createAttribute('id');
mainDivAttrId2.value = "content";
divcontent.setAttributeNode(mainDivAttrId2);
mainDiv.appendChild(divcontent);

var DivContentPost = document.createElement('div');
var mainDivAttrId3 = document.createAttribute('class');
mainDivAttrId3.value = "content-post";
DivContentPost.setAttributeNode(mainDivAttrId3);
divcontent.appendChild(DivContentPost);

var h1 = document.createElement('h1');
h1.innerHTML = "Judul Post";
DivContentPost.appendChild(h1);

var span = document.createElement('span');
span.innerHTML = "Published on 12 May 2016";
DivContentPost.appendChild(span);

var p = document.createElement('p');
p.innerHTML = "Lorem Ipsum Dolor Sit Amet";
DivContentPost.appendChild(p);

var button = document.createElement('button');
var mainDivAttrId4 = document.createAttribute('class');
mainDivAttrId4.value = "share-post-btn";
button.setAttributeNode(mainDivAttrId4);
button.innerHTML = "Share this Post";
DivContentPost.appendChild(button);

//CONTENT2
var DivContentPost = document.createElement('div');
var mainDivAttrId3 = document.createAttribute('class');
mainDivAttrId3.value = "content-post";
DivContentPost.setAttributeNode(mainDivAttrId3);
divcontent.appendChild(DivContentPost);

var h1 = document.createElement('h1');
h1.innerHTML = "Judul Post 2";
DivContentPost.appendChild(h1);

var span = document.createElement('span');
span.innerHTML = "Published on 13 May 2016";
DivContentPost.appendChild(span);

var p = document.createElement('p');
p.innerHTML = "Lorem Ipsum Dolor Sit Amet";
DivContentPost.appendChild(p);

var button = document.createElement('button');
var mainDivAttrId4 = document.createAttribute('class');
mainDivAttrId4.value = "share-post-btn";
button.setAttributeNode(mainDivAttrId4);
button.innerHTML = "Share this Post";
DivContentPost.appendChild(button);