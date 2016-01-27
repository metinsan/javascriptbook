/**
 * Created by PC on 9.10.2015.
 */

var msg = "<p><b>page title:</b>" + document.title+"<br/>";

msg+="<b>Page address: </b>"+document.URL + "<br/> ";
msg+="<b>last modified: </b>"+document.lastModified + "<br/> ";

var el = document.getElementById("footer");
el.innerHTML=msg;