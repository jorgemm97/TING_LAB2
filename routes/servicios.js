var express = require('express');
var router = express.Router();

/* Este trozito de javascript solo existe para hacer el GET de la vista servicios.ejs que me he currado en la 
carpeta de vistas :) */
router.get('/servicios', function(req, res, next) {

/* Lo único diferente es que aquí hacemos el render de servicios en lugar de index
El tema de las variables title y demás de momento esta de adorno */
  res.render('servicios', { title: 'Express' });
});

module.exports = router;
