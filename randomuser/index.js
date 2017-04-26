const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require('jquery');
function datosRandom(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    $('#txtNombre').html(data.results[0].name.first+" "+
    					 data.results[0].name.last);
    $("#imgFoto").attr("src", data.results[0].picture.large)
    $("#gender").html(data.results[0].gender);
    $("#title").html(data.results[0].title);
    $("#street").html(data.results[0].street);
    $("#city").html(data.results[0].city);
    $("#state").html(data.results[0].state);
    $("#postcode").html(data.results[0].postcode);
    $("#email").html(data.results[0].email);
    $("#username").html(data.results[0].username);
    $("#password").html(data.results[0].password);
    $("#salt").html(data.results[0].salt);
    $("#md5").html(data.results[0].md5);
    $("#sha1").html(data.results[0].sha1);
    $("#sha256").html(data.results[0].sha256);
    $("#dob").html(data.results[0].dob);
    $("#registered").html(data.results[0].registered);
    $("#phone").html(data.results[0].phone);
    $("#cell").html(data.results[0].cell);
    $("#idd").html(data.results[0].idd);
    $("#name").html(data.results[0].name);
    $("#value").html(data.results[0].value);
    $("#large")

   },

  error(a,b,c){
  	alert("Sin internet o sin servidor");
   }
 });
}
$("#btnInfo").on("click",datosRandom);