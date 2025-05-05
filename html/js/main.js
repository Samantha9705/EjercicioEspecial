// Dentro del archivo **main.js** crear una función para responder al evento **click** del botón con el texto **Load Products** que se encuentra en products.html

// 5. Dicho evento debe realizar una llamada a la siguiente API : https://api.escuelajs.co/api/v1/products

// 6. Se debe utilizar la función **fetch** y recibir los productos como respuesta para llenar las 9 cards dentro de la página **products.html**

// 7. Se debe mostrar la segunda imagen del producto, título, descripción y precio.

// 8. Debes guardar los cambios en el repositorio local y posteriormente subirlos a Github (Commit No. 2)

const loadProducts = document.getElementById("loadProducts");
const URLApi = "https://api.escuelajs.co/api/v1/products";

loadProducts.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(URLApi);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const productos = await response.json();
    const cards = document.querySelectorAll('.card');

    productos.slice(0, 9).forEach((producto, index) => {
      const card = cards[index];
      if (card) {
        const img = card.querySelector('.card-img-top');
        const description = card.querySelector('.card-text');
        const price = card.querySelector('.text-body-secondary');

      
        img.src = producto.images[1] || producto.images[0];
        img.alt = producto.title;
        
        description.textContent = producto.title;
        price.textContent = `$${producto.price}`;
      }
    });

  } catch (error) {
    console.error("Error cargando productos:", error.message);
  }
});
