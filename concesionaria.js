const personas = require("./personas");
const autos = require("./autos");

let concesionaria = {
  autos: autos,
  buscarAuto: function buscarAuto(dominio) {
    let elegido = this.autos.filter((auto) => auto.patente == dominio);
    return elegido != 0 ? elegido[0] : null;
  },
  venderAuto: function venderAuto(dominio) {
    let auto = this.buscarAuto(dominio);
    auto.vendido = true;
    return auto;
  },
  autosParaLaVenta: function autosParaLaVenta() {
    return this.autos.filter((auto) => auto.vendido == false);
  },
  autos0KM: function autos0KM() {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
  listaDeVentas: function listaDeVentas() {
    return this.autos
      .filter((auto) => auto.vendido == true)
      .map((auto) => auto.precio);
  },
  totalDeVentas: function totalDeVentas() {
    return this.listaDeVentas().reduce((saldo, importe) => saldo + importe);
  },
  puedeComprar: function puedeComprar(auto, persona) {
    //   console.log('== puedeComprar: ', [auto, persona]);
    return (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    );
  },
  autosQuePuedeComprar: function autosQuePuedeComprar(persona) {
    let listaAutos = autos.filter((auto) => this.puedeComprar(auto, persona));
    return listaAutos;
  },
};

console.log(concesionaria.venderAuto("APL123"));

/*   autosQuePuedeComprar: function autosQuePuedeComprar(persona) {
    let listaAutos = autos.filter(function (auto) {
      return this.puedeComprar(auto, persona);
    }, this);
    return listaAutos;
  },
*/

// this.autos.forEach(function (auto) {
//   if (auto.patente == dominio) elegido.push(auto);
// });
// return elegido != 0 ? elegido[0] : null;

/* 
listaDeVentas: function listaDeVentas() {
  let precios = [];
  this.autos.forEach(function (auto) {
    if (auto.vendido == true) precios.push(auto.precio);
  });
  return precios;
},
 */

/* 
totalDeVentas: function totalDeVentas() {
  let sumaVentas = 0;
  if (this.listaDeVentas().length > 0) {
    sumaVentas = this.listaDeVentas().reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
  }
  return sumaVentas;
},
 */

/* 
venderAuto: function venderAuto(dominio) {
  let elegido = this.buscarAuto(dominio);
  elegido.vendido = true;
  return elegido;
},
 */
