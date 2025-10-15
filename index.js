const tiendaSteam = [
    {
        nombre : "Adidas",
        precio : 1200000
    },
    {
        nombre : "Nike",
        precio : 1300000

    },
    {
        nombre : "Reebok",
        precio : 1400000
    },
    {
        nombre : "Puma",
        precio : 1250000
    },
    
]

const tiendaContenedor = document.getElementById("compra")

for(let i = 0; i < tiendaSteam.length; i++){

    const itemContenedor = document.createElement("div")
    tiendaContenedor.appendChild(itemContenedor)


    const itemNombre = document.createElement("span")
    itemContenedor.appendChild(itemNombre)
    itemNombre.textContent = tiendaSteam[i].nombre

    const itemPrecio = document.createElement("span")
    itemContenedor.appendChild(itemPrecio)
    itemPrecio.textContent = tiendaSteam[i].precio + "$"

    const itemBoton = document.createElement("button")
    itemContenedor.appendChild(itemBoton)

    const itemImagen = document.createElement("img")
    itemBoton.appendChild(itemImagen)
    itemImagen.src = "./agregar.png"
    itemImagen.alt = "agregar"
}