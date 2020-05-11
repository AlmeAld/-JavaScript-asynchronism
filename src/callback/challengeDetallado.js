let HMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character';
//creamos una funcion que nos va permitir traer la informacion desde nuestra API, la cual tambien le vamos a pasar un callback y despues vamos a desencadenar los llamados que neesitamos

const fetchDara=( url_api, callback) =>{
let xhttp = new XMLHttpRequest(); //generamos la refeencia al objeto que necesito a la instancia->XMLHttpREquest
xhttp.open('GET' url_api, true); // .open abre o hace un llamado una url recibe 3 parametros (lapeticion, laURLDeLaData, true(asincrono) o false(sincrono))
xhttp.onreadystatechange = (event) =>{ //escuchamos lo que va a hacer esa coneccion ^ .si el cambio sucede ejecuto una funcion que recibe un evento 
  if( xhttp.readyState === 4){ // .readyState (estado) -> si el estado en el cual se encuentra es satisfactorio (===4)
    if(xhttp.status === 200){ // saber el status en que se encuentra . 200 completada . luego de esto ya podemos regresar el callback
      callback(null, JSON.parse(xhttp.responseText)) // el primer valor es el error, el sefundo es la informacion qe se desencadena. usamos .parse porque recibimos una respuesta en texto , si no lo pasamos asi vamos a mandar slo una respuesta en texto y no nos permite iterar
    }else{
      const error = new Error ( 'Error' + url_api)//enviamos un error en caso no se ejeute .se crea un error con 'new Error'
      return callback (error, null)
    }
  }
}
  xhttp.send // finalmente con .send se envia la solicitud
}

//llamamaos a la funcion fetchDara ...usamos la funcion varias evces de forma anidada
fetchDara(API,(error1, data1)=>{ // error, informacion o datos resultantes de la peticio que estamos ejecutando
  if(error1) return console.error(error1);
  fetchDara(API + data1.results[0].id, (error2, data2) =>{
    if(error2) return console.error(error2)
    fetchDara(data2.origin.url, (error3, data3)=>{
      if(error3) return console.error(error3)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
})

