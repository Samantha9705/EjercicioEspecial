// Dentro del archivo **main.js** crear una función para responder al evento **click** del botón con el texto **Load Products** que se encuentra en products.html

// 5. Dicho evento debe realizar una llamada a la siguiente API : https://api.escuelajs.co/api/v1/products

// 6. Se debe utilizar la función **fetch** y recibir los productos como respuesta para llenar las 9 cards dentro de la página **products.html**

// 7. Se debe mostrar la segunda imagen del producto, título, descripción y precio.

// 8. Debes guardar los cambios en el repositorio local y posteriormente subirlos a Github (Commit No. 2)

const loadProducts = document.getElementById("loadProducts");
const URLApi= "https://api.escuelajs.co/api/v1/products";
const Productos = document.getElementById("")



loadProducts.addEventListener ("click", function (event){
    event.preventDefault();
    const options = {"method" : "GET"};

    fetch(URLApi, options)
    .then((response)=>{
        //console.log(response);
        response.json().then((res)=>{
         createCards(res);
        });
        
    })
    .catch((err)=>{
        main.insertAdjacentHTML("beforeend", 
            `<div class="alert alert-danger" role="alert">
                ${err.message}
            </div>`)
    });


})

console.log(loadProducts);

function createCards(products){
    Productos.innerHTML = ""; 
    products.slice(0, 9).forEach(producto => {
        Productos.insertAdjacentHTML("beforeend", 
            `<div class="card m-2" style="width: 18rem;">
                <img src="${producto.images[1]}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="card-text">Precio: $${producto.price}</p>
                </div>
            </div>`
        );
    });
}

