//fetch devuelve una promesa inmediatamente.
//En este instante su estado es PENDING (pendiente de respuesta)


//const miPromesa = fetch(`usuarios.json`);

//console.log(miPromesa);

// fetch(`usuarios.json`)
//     .then(Response =>{
//         console.log(`Llego la respuesta ` , Response.status);
//         return Response.json()
//     })
//     .then(usuarios =>{
//         console.log(`usuarios listos `, usuarios)
//     })

//     .catch(error =>{
//         console.error(`Algo fallo `, error);
//     })


async function cargarUsuarios() {
    try{
        const respuesta = await fetch(`usuarios.json`)
        const usaurios = await respuesta.json()
        console.log(`Los usuario recuperados del .json son: `, Usuarios)

    }catch(error){
        console.error(error)
    }
}

cargarUsuarios()