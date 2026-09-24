let mascota = {
  nombre: "Lucas",
  edad: 13,
  raza: "Cocker",
};

console.log(mascota.nombre);

mascota.tamano = "Mediano";

console.log(mascota);

delete mascota.raza;

console.log(mascota);

mascota.pirueta = function () {
  console.log(this.nombre + " puede girar en el suelo");
};

mascota.pirueta();

for (let propiedad in mascota) {
  console.log(propiedad + " :" + mascota[propiedad]);
}

mascota.dueno = {
  nombre: "Tavo",
  ciudad: "Rionegro",
};

console.log(mascota.dueno.nombre);
console.log(mascota.dueno.ciudad);

console.log(mascota === mascota.dueno);
console.log(mascota.nombre === mascota.dueno.nombre);

let libro = {
  titulo: "Topon",
  autor: "Tavo",
  anoPublicacion: 1995,
  genero: "Comedia",
};

for (let propiedad in libro) {
  console.log(libro[propiedad]);
}

let pelicula = {
  titulo: "El topito",
  director: "tavo",
  anoEstreno: 2010,
  genero: "Terror",
};

pelicula.descripcion = function () {
  console.log(
    this.titulo +
      " es una pelicula instpirada en hechos reales, dirigida por " +
      this.director +
      " que se estreno en el año " +
      this.anoEstreno + " y es del genero " + this.genero
  );
};

pelicula.descripcion();
