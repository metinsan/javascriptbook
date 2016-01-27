/**
 * Created by PC on 9.10.2015.
 */
var orignalNumber = 10.23456;
var msg ="<h2>original number: </h2><p>"+ orignalNumber+ "</p>";

msg += "<h2>decimal places: </h2> <p></p>" + orignalNumber.toFixed(2);
msg += "<h2>digits: </h2> <p>"+orignalNumber.toPrecision() + "</p>";


var el = document.getElementById("info");
el.innerHTML = msg;