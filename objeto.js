var boton = document.getElementById('pulsador');
var renombrar = document.querySelector('#nombreDelPokemon');
var reimaginar = document.querySelector('#imagenDelPokemon');
var pesar = document.querySelector('#pesoDelPokemon');
var medir = document.querySelector('#estaturaDelPokemon');


boton.addEventListener('click', function(e) {
    e.preventDefault();
    fetch("https://pokeapi.co/api/v2/pokemon/") 
    .then(datos => datos.json())
    .then(datos =>{
            for (let i=0; i<20; i++){
            var nombrePokemon = datos.results[i].name
            renombrar.innerHTML+=`
            <button class="btn btn-default w-100" id="nuevoBoton"> ${nombrePokemon}</button>
            `  
            var segundoBoton = document.getElementById('nuevoBoton');
            segundoBoton.addEventListener('click',function(e) {
                e.preventDefault();
                var enlaceImagen = datos.results[i].url;
                fetch(enlaceImagen)
                .then(data => data.json())
                .then(data =>{
                var laImagen= (data.sprites.front_default)
                console.log(data.weight)
                //console.log(laImagen)
                reimaginar.innerHTML+=`
                <div class="col-sm-3"><img src="${laImagen}"></div>
                `
                pesar.innerHTML+=`
                <div class="col-sm-3">${data.weight}</div>
                `
                medir.innerHTML+=`
                <div class="col-sm-3">${data.height}</div>
                `
                })                  
            })
            /*
            var enlaceImagen = datos.results[i].url;
            fetch(enlaceImagen)
            .then(data => data.json())
            .then(data =>{
            var laImagen= (data.sprites.front_default)
            console.log(data.weight)
            //console.log(laImagen)
            reimaginar.innerHTML+=`
            <div class="col-sm-3"><img src="${laImagen}"></div>
            `
            pesar.innerHTML+=`
            <div class="col-sm-3">${data.weight}</div>
            `
            medir.innerHTML+=`
            <div class="col-sm-3">${data.height}</div>
            `
            })*/      
        }       
    })
})


/*Ruta a la imagen de cada Pokemon
       /*var enlaceImagen = datos.results[0].url;      
        fetch(enlaceImagen)
        .then(data => data.json())
        .then(data =>
            console.log(data.sprites.front_default)
            )*/