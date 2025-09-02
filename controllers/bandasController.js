const db = require('../db/index.js');

const bandasController = {
    listar: function(req, res) {
     
          return  res.render("bandas", {listadoBandas: db.lista}); 
    },

    detalle: function(req, res) {
        let id = req.params.id;
        for (let i = 0; i < db.lista.length; i++) {
          if (db.lista[i].id == id) {
            return res.render("detalleBanda", { 
              banda: db.lista[i] 
            });
          }
            }; 
            return res.send('No se encontró la banda ' + id);


    },

    porGenero: function(req, res) {
      let genero = req.params.genero.toLowerCase();
      let arrayBandas = [];

      for (let i=0; i < db.lista.length; i++) {
        if (db.lista[i].genero.toLowerCase() == genero) {
          arrayBandas.push(db.lista[i]);
        }
      }
      // return res.send(arrayBandas);
    res.render("generoBandas", {bandas: arrayBandas});
      //Tomar genero como parametro, encontrar aquellas 
        // bandas que pertenezcan al genero y mostrar vista porGenero
    }
};

module.exports = bandasController;