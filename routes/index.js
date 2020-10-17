var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

/* Desde aquí lo que hago es ordenar que se visualice la vista index.ejs (que yo ya he puesto bonita :)). 
Lo chulo es que yo aquí puedo pasarle valores a las variables que haya puesto en el html
Por ejemplo aquí le pasaría el valor Express a la variable title que debería estar puesta en la etiqueta title de mi index.ejs
Mi página de intro a mi me gusta que sea estática por lo que voy a pasar de aprovechar esta función tan chula 
pero no esta de más saber que es lo que hace! */
  res.render('index', { title: 'Express' });
});

module.exports = router;
