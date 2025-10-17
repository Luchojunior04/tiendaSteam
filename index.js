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


let carrito = [] 

const tiendaContenedor = document.getElementById("compra")

for(let i = 0; i < tiendaSteam.length; i++){

    const itemContenedor = document.createElement("div")
    tiendaContenedor.appendChild(itemContenedor)
    itemContenedor.className = 'padre'
    
    const itemInformacion = document.createElement('div')
    itemContenedor.appendChild(itemInformacion)
    itemInformacion.className = 'informacion'
  
    const itemNombre = document.createElement("span")
    itemInformacion.appendChild(itemNombre)
    itemNombre.textContent = tiendaSteam[i].nombre

    const itemPrecio = document.createElement("span")
    itemInformacion.appendChild(itemPrecio)
    itemPrecio.className = 'precio'
    itemPrecio.textContent = tiendaSteam[i].precio + "$"

    const itemBoton = document.createElement("button")
    itemContenedor.appendChild(itemBoton)
    itemBoton.className = "boton"

    const itemImagen = document.createElement("img")
    itemBoton.appendChild(itemImagen)
    itemImagen.src = "./agregar.png"
    itemImagen.alt = "agregar"


    itemBoton.addEventListener('click', () =>{
     const existe = carrito.find((elemento)=>{
       return elemento.nombre == tiendaSteam[i].nombre
     })

     if(existe !== undefined  ){
        //aqui tambien se puede decir solo (existe)
        existe.cantidad = existe.cantidad + 1 //otras maneras de escribirlo existe.cantidad += 1 o existe,cantidad++
     }else {
         carrito.push({
             nombre : tiendaSteam[i].nombre,
             precio : tiendaSteam[i].precio,
             cantidad : 1,

            })
     }

        console.log(carrito)
    })
}