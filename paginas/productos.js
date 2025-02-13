
let lista = document.getElementById("lista");
let totalText = "";
let total = 0;


const productos = ["Aceite Natura", "Leche Armonia", "Papas sucias", "Carne - peceto", "Lechuga", "Cerveza Quilmes", "Coca Cola 2.45L", "Tomate", "Galletitas diversión"];
const precios = [2500, 1500, 1600, 8000, 1000, 2300, 2700, 1000, 1800];
const stock = [10, 5, 15, 23, 20, 31, 17, 20, 30, 23];
const img = ["../imagenes/productos/aceite-producto.webp",
            "../imagenes/productos/leche.webp",
            "../imagenes/productos/papas.jpg",
            "../imagenes/productos/carne-peceto.jpg",
            "../imagenes/productos/lechuga.png",
            "../imagenes/productos/cerveza.png",
            "../imagenes/productos/coca-cola.webp",
            "../imagenes/productos/tomates.png",
            "../imagenes/productos/galletitas.png"];

const contenedorProductos = document.getElementById("contenedor");

function cargarProductos(arrayProductos, arrayPrecios, arrayStock, arrayImg) {
    for(let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `
        <div class="productos-contenedor">
            <div class="img-productos-contenedor"><img class="producto-img" src="${arrayImg[i]}" alt=""></div>

            <div class="info-productos-contenedor">
                <p class="productos-nombres">${arrayProductos[i]}</p>
                <p class="precios">$${arrayPrecios[i]}</p>
            </div>
            
            <div class="inputs-contenedor">
                <input class="input-stock" type="number" id="stock${i}" value="${arrayStock[i]}" readonly>
                <input class="input-entrada" type="number" id="entrada${i}" placeholder="Ingrese cantidad">
            </div>

            <div class="btnComprar-contenedor">
                <button class="btnComprar" id="btn${i}">Comprar</button>
            </div>

        </div>`
    
    contenedorProductos.append(lista)
    }


}

function comprar(index) {
    const stockHTML = document.getElementById(`stock${index}`);
    const entradaHTML = document.getElementById(`entrada${index}`);
    const stock = parseInt(stockHTML.value);
    const cantidad = parseInt(entradaHTML.value);
    const precio = precios[index];
    

    //DESCUENTO INTENTO
    // for(let i = 0; i < productos.length; i++) {
    //     precios[i] *= 0.7;
    //     console.log(`${productos[i]}: ${precios[i]} (Stock: ${stock[i]})`);
        
    // }
    

    if(cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = `Total: $${total}`;
        stockHTML.value = stock - cantidad;
        entradaHTML.value = "";
        alert(`Compra exitosa el total es: ${total}`);
    }else {
        alert("cantidad no valida. Ingrese un valor mayor que 0 y menor o igual al stock");
    }
}

cargarProductos(productos, precios, stock, img);


for(let i = 0; i < productos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
        comprar(i);
    })
}

