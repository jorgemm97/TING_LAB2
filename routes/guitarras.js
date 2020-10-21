var express = require('express');
var router = express.Router();

/* Este trozito de javascript solo existe para hacer el GET de la vista guitarras.ejs que me he currado en la 
carpeta de vistas :) */
router.get('/guitarras', function(req, res, next) {

/* Lo único diferente es que aquí hacemos el render de guitarras en lugar de index
El tema de las variables title y demás de momento esta de adorno */
  res.render('guitarras', { title: 'Express' });
});

module.exports = router;
