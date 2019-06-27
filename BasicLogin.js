var mysql = require('mysql');

var con = mysql.createConnection({
    /*host     : '65.99.225.8',
	user     : 'itqiscco_alex',
	password : 'vladimir6896',
	database : 'itqiscco_regitstro',
    port : 3306*/
    host     : 'localhost',
	user     : 'alexander',
	password : 'Vladimir6896#',
	database : 'nodelogin',
	port : 3306
  });
  
  /*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM accounts", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
  });*/

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var usuario = document.getElementById("usuario").value;
    var Contra = document.getElementById("pass").value;
    if (usuario && Contra) {
		con.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [usuario, Contra], function(error, results, fields) {
			if (results.length > 0) {
                alert("correcto")
			} else {
				alert('Incorrect Username and/or Password!');
			}			
		});
	} else {
		alert('Please enter Username and Password!');
	}
  });
/*
function validar(){
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if(usuario=="edgard" && Contraseña == "12345"){
        alert("Usuario y contraseña validos")
    }
    else{
        alert("Verifique sus datos")
    }
}*/