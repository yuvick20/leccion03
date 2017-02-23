document.getElementById("botonEnviar").onclick=function textoTotal(){
  var nombre=document.getElementById("nombre").value;
  var apellido=document.getElementById("apellido").value;
  var rol=document.getElementById("rol").value;
  var cumpleaños=document.getElementById("cumpleaños").value;
  var todo="<li> Nombre: " + nombre + "</li><br>" +
                                                "<li> Apellido: " +apellido +"</li><br>" +
                                                "<li> Rol: " + rol + "</li><br>" +
                                                "<li> Cumpleaños: " + cumpleaños + "</li><br>" ;

var arr=[];
var resultado=arr.push(todo);
var resp="";
for(var i=0;i<resultado.length;i++){
  
   resp=document.getElementById("respuesta").innerHTML=resultado[i];
  return resp;
}


}
