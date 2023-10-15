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
  const palabrasNumeros = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
  };  
  const palabrasEncontradas = texto.match(/\b(cero|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve)\b/g);
  if (palabrasEncontradas && palabrasEncontradas.length >= 2) {
        const marcador = palabrasEncontradas.slice(0, 2).map((palabra) => palabrasNumeros[palabra]);
    return marcador;
  } else {
    
    return [0, 0];
  }

}


class Barco {
  // Tu código aquí
  constructor(calado, tripulacion) {
    this.calado = calado;
    this.tripulacion = tripulacion;
  }

  valeLaPena() {
    
    const caladoDespuesDeTripulacion = this.calado - this.tripulacion * 1.5;

    return caladoDespuesDeTripulacion > 20;
  }
}
