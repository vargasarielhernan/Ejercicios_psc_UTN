//corroborar que esta enlazado correctamente
//console.log("correecto");

var peticion= new XMLHttpRequest();
peticion.open("GET", "productos.json", true);
var total=0;
var contador=0;
var mayor=0;
//obtener los productos del JSON
peticion.addEventListener("readystatechange",function(){
    if(this.readyState==4&&this.status==200){
        var productos= JSON.parse(this.responseText);
        //console.log(productos);
        //recorrer json para obtener sus datos individualmente y crear las tarjetas
        productos.forEach(p => {
            var nombre= p.nombre;
            var url_foto= p.url_foto;
            var descripcion=p.descripcion;
            var precio=p.precio;

            var card= document.createElement("div");
            card.setAttribute("class","card");

            var nombreTarjeta= document.createElement("h2");
            nombreTarjeta.innerText = nombre;

            var imagenTarjeta= document.createElement("img");
            imagenTarjeta.setAttribute("src",url_foto);
            
            var divInferior= document.createElement("div");
            divInferior.setAttribute("class","inferior");
            var divDescripcion=document.createElement("div");
            var Descripcion=document.createElement("p");
            Descripcion.innerText= descripcion;
            var Precio=document.createElement("span");
            Precio.innerText="$"+precio;

            var divComprar= document.createElement("div");
            var botonComprar=document.createElement("a");
            botonComprar.setAttribute("href","#");
            botonComprar.innerText="Añadir al carrito";

            var container=document.querySelector(".productos");
            divDescripcion.append(Descripcion,Precio);
            divInferior.append(divDescripcion,botonComprar);
            card.appendChild(nombreTarjeta);
            card.appendChild(imagenTarjeta);
            card.appendChild(divInferior);
            card.appendChild(divComprar);
            container.appendChild(card);


            botonComprar.addEventListener("click", function(){
                total = total + precio;
                contador+=1;
                //console.log("total: ", total);
                // Crear fila en carrito
                var listaProductos= document.querySelector("#productos");
                var cantidades= document.querySelector("#cantidades");
                cantidades.innerText=contador;
                var totalPro= document.querySelector("#total");
                totalPro.innerText=total;
                var fila = document.createElement("tr");
                var tdNombre = document.createElement("td");
                tdNombre.innerText = nombre;
                var tdPrecio = document.createElement("td");
                tdPrecio.innerText = precio;

                var carrito=document.createElement("tr");
                var cantidad=document.createElement("td");
                cantidad.innerText=contador;
                var precioTotal=document.createElement("td");
                precioTotal.innerText=total;
                fila.appendChild(tdNombre);
                fila.appendChild(tdPrecio);
                listaProductos.append(fila);
                if(parseInt(tdPrecio.innerHTML)>mayor){
                    mayor=parseInt(tdPrecio.innerHTML);}

                // Logica para eliminar un producto del carrito
                var tdBorrar = document.createElement("td");
                var botonBorrar = document.createElement("a");
                botonBorrar.setAttribute("href","#");
                botonBorrar.innerText = "x";
                botonBorrar.setAttribute("class","botonBorrar");
                tdBorrar.appendChild(botonBorrar);
                fila.appendChild(tdBorrar);
                tdbody= document.querySelector("tbody")
                tdbody.appendChild(fila);
                botonBorrar.addEventListener("click", function (event) {
                    event.target.parentElement.parentElement.remove();
                    total = total - precio;
                    contador-=1;
                    var listaProductos= document.querySelector("#productos");
                var cantidades= document.querySelector("#cantidades");
                cantidades.innerText=contador;
                var totalPro= document.querySelector("#total");
                totalPro.innerText=total;
                
                });
                var botonCaro =document.querySelector("button");
                botonCaro.addEventListener("click",function(){
                    rowtd=fila.getElementsByTagName("td");
                    if(parseInt(rowtd[1].innerHTML)==mayor){
                        rowtd[1].classList.add("resaltar");
                    }
                console.log("el mayor es:", mayor);
                });
                });
            });
        }
    });
peticion.send();