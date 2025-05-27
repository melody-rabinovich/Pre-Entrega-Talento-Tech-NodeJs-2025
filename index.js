import {getAllProducts, getProduct, postProduct, deleteProduct} from './services.js'

async function main(){
    const args =  process.argv.slice(2); // omite las rutas
    
    if(args.length >= 0){

        // Ejemplo: npm run start GET products
        if(args[0] === "GET" && args[1]=="products"){
            console.log( await getAllProducts())

        // Ejemplo: npm run start GET products/15
        }else if(args[0] === "GET" && args[1].includes("products/")){
            const idPedido = args[1].slice(9); // saca products/
            console.log( await getProduct(idPedido));

        // Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras
        }else if(args[0] === "POST" && args[1] == "products"){
            const titulo = args[2];
            const precio = args[3];
            const categoria = args[4]
            console.log(await postProduct(titulo, precio, categoria))
            
        //Ejemplo: npm run start DELETE products/7
        }else if(args[0] === "DELETE" && args[1].includes("products/")){
            const idPedido = args[1].slice(9); // saca products/
            console.log(await deleteProduct(idPedido))
            
        }else{
            console.log("Intente nuevamente con un comando valido")
        }
    }
    
}

main()

