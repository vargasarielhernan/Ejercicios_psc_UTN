//corroborar que esta enlazado correctamente
console.log("correecto");

var peticion= new XMLHttpRequest();
peticion.open("GET", "productos.json", true);
var total=0;

//obtener los productos del JSON
peticion.addEventListener("readystatechange",function(){
    if(this.readyState==4&&this.status==200){
        var productos= JSON.parse(this.responseText);
        console.log(productos);
        //recorrer json para obtener sus datos individualmente
        productos.forEach(p => {
            var nombre= p.nombre;
            var url_foto= p.url_foto;
            var descripcion=p.descripcion;
            var precio=p.precio;

            var link= document.createElement("a");
            link.setAttribute("href","#");
            link.innerText=p.nombre;

            link.addEventListener("click", function(){
                console.log(p.nombre, p.precio);
                total = total + p.precio;
                console.log("total: ", total);
                 // Crear fila en carrito
                var fila = document.createElement("tr");
                var tdNombre = document.createElement("td");
                tdNombre.innerText = p.nombre;
                var tdPrecio = document.createElement("td");
                tdPrecio.innerText = p.precio;
                fila.appendChild(tdNombre);
                fila.appendChild(tdPrecio);

                // Logica para eliminar un producto del carrito
                var tdBorrar = document.createElement("td");
                var linkBorrar = document.createElement("a");
                linkBorrar.setAttribute("href","#");
                linkBorrar.innerText = "x";
                tdBorrar.appendChild(linkBorrar);
                fila.appendChild(tdBorrar);
                linkBorrar.addEventListener("click", function (event) {
                    console.log(event.target.parentElement.parentElement.remove());
                    total = total - p.precio;
                    console.log("total: ", total);
                });

                document.querySelector("tbody").appendChild(fila);
                });
                document.querySelector(".productos").appendChild("link");
            });
        }
    });
peticion.send();