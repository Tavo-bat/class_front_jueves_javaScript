# Cambio de color con JavaScript

Proyecto de práctica de JavaScript vanilla para aprender a **seleccionar elementos del DOM**, crear **escuchadores de eventos** y usar **intervalos de tiempo**.

## Requisitos

- Visual Studio Code
- Extensión **Live Server** (opcional, pero recomendada)
- Un navegador moderno (Chrome, Edge o Firefox)
- Conocimientos básicos de variables, funciones y bucles `for`

## Objetivo

Al terminar este proyecto deberías poder:

- Seleccionar elementos de la página con `querySelector` y `getElementById`.
- Conectar un botón con una función usando `addEventListener`.
- Repetir una acción cada cierto tiempo con `setInterval` y detenerla con `clearInterval`.

## Estructura del proyecto

```
cambio-color/
├── .gitignore
├── README.md
├── index.html        Página principal (ya está lista)
├── css/
│   └── styles.css    Estilos (ya están listos)
└── js/
    └── app.js        Tu código: aquí escribes la solución
```

Solo debes modificar `js/app.js`. El HTML y el CSS es opcional darle tu estilo.

## Cómo abrir el proyecto

1. Abre la carpeta `cambio-color` en VS Code.
2. Haz clic derecho sobre `index.html` y elige **Open with Live Server**.
3. Cada vez que guardes `app.js`, recarga la página del navegador para ver los cambios.

Si no usas Live Server, también puedes abrir `index.html` directamente en el navegador.

**Revisar errores:** abre las herramientas de desarrollo del navegador con `F12` y entra a la pestaña **Console**. Ahí aparecen los errores y los resultados de `console.log`.

Al principio verás un error como `Cannot read properties of null`. Es normal: aparece mientras las variables del Reto 1 siguen en `null`. Desaparece cuando completes el Reto 1.

## Retos

Hazlos en orden. Cada reto se construye sobre el anterior. Los TODO del archivo `js/app.js` indican dónde escribir cada parte.

### Reto 1: Selección del DOM (TODO 1 a 3)

Reemplaza los tres `null` por los elementos correctos:

- `botonColor`: el botón con id `boton-color`.
- `botonFiesta`: el botón con id `boton-fiesta`.
- `textoColor`: el párrafo con id `color`.

**Prueba:** escribe `console.log(botonColor)` en `app.js`, recarga la página y revisa en la consola que aparezca el botón.

### Función generar color (TODO 4 y 5)

La función `generarColorHexAleatorio` está a medias. Completa el bucle para que cada vuelta agregue un dígito aleatorio al color:

1. Escoge un índice aleatorio entre 0 y 15.
2. Agrega a `color` el carácter de `digitos` que está en ese índice.

**Prueba:** en la consola del navegador escribe `generarColorHexAleatorio()` varias veces. Cada resultado debe tener `#` seguido de 6 dígitos.

### Reto 2: Escuchador del botón "Cambiar Color" (TODO 6)

Conecta `botonColor` con un evento `click`. Al presionarlo, el fondo de la página y el texto deben cambiar al mismo color aleatorio.

**Prueba:** presiona el botón varias veces y verifica que el color cambie cada vez.

### Reto 3: Modo fiesta con intervalos (TODO 7)

Conecta `botonFiesta` con un evento `click` que funcione como interruptor:

- La primera vez que se presiona, el color debe cambiar cada **500 ms** y el botón debe decir **"Parar fiesta"**.
- La siguiente vez, la fiesta debe detenerse y el botón debe volver a decir **"Modo fiesta"**.

**Pistas:** usa la variable `fiestaActiva` para saber si la fiesta está encendida, y guarda en `idIntervalo` el valor que devuelve `setInterval`.

**Pregunta para pensar:** ¿qué pasa si presionas "Modo fiesta" varias veces sin detenerlo? ¿Cómo lo evitarías?

### Reto extra (opcional)

Mientras la fiesta esté activa, deshabilita el botón "Cambiar Color" para que no se pueda usar. Pista: la propiedad `disabled` de un botón.

## Criterios de entrega

- El código está en `js/app.js` y no hay errores en la consola del navegador.
- Los tres retos funcionan.
- Las variables tienen nombres claros y descriptivos.
- El código tiene comentarios breves que expliquen las partes importantes.
- Los TODO ya no aparecen en el código final.
