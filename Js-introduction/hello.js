var clone = document.getElementById("text").cloneNode(true);
document.body.appendChild(clone);

var text = "Hello";
text = text.concat(" ", "World<br>");
document.write(text);

var str = "Hello World<br>";
var res = str.substring(0, 5) + " " + str.substring(6);
document.write(res);

var str = "Hello World";
var res = str.replace("World", "JavaScript<br>");
document.write(res);

var str = "hello world<br>";
var res = str.toUpperCase();
document.write(res);

var str = "Hello,World<br>";
var res = str.split(",");
document.write(res[0] + " " + res[1]);

var str = "Hello World";
var res = str.substring(6, 11);
document.write(res);

