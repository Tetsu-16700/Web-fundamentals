function interactuarCadenas(cadena1, cadena2) {
  // Tu código aquí
  
  if (cadena1.length !== cadena2.length) {
    return "Las cadenas no tienen la misma longitud.";
  }
 
  let resultado = "";

  for (let i = 0; i < cadena1.length; i++) {
    
    const char1 = cadena1[i];
    const char2 = cadena2[i];

    if (char1 === "+" && char2 === "+") {
      
      resultado += "+";
    } else if (char1 === "-" && char2 === "-") {
      
      resultado += "-";
    } else {
      
      resultado += "0";
    }
  }

  return resultado;
}

function generarApodo(nombre) {
  // Tu código aquí
   if (nombre.length < 4) {
    throw new Error("Nombre muy corto");
  }

  const terceraLetra = nombre[2];

  const esVocal = "aeiou".includes(terceraLetra.toLowerCase());

  if (esVocal) {
    return nombre.slice(0, 4);
  } else {
    return nombre.slice(0, 3);
  }
}

function obtenerMarcador(texto) {
  // Tu código aquí
  const palabras = texto.split(" ");

  const numeros = palabras.filter((palabra) => !isNaN(palabra));

  const marcadorNumeros = numeros.map((numero) => parseInt(numero));

  let marcador = [0, 0];

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].toLowerCase() === "marcador" || palabras[i].toLowerCase() === "nuevo") {
      if (i + 1 < palabras.length && !isNaN(palabras[i + 1])) {
        marcador[0] = parseInt(palabras[i + 1]);
      }
      if (i + 2 < palabras.length && !isNaN(palabras[i + 2])) {
        marcador[1] = parseInt(palabras[i + 2]);
      }
    }
  }
  return marcador;
}

class Barco {
  // Tu código aquí
  constructor(calado, tripulacion) {
    this.calado = calado;
    this.tripulacion = tripulacion;
  }

  valeLaPena() {
    const pesoTripulacion = this.tripulacion * 1.5;
    const pesoTotal = this.calado + pesoTripulacion;

    return pesoTotal < 20;
  }
}
