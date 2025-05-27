export async function getAllProducts(){
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const products = data.map((element) => {
            let {id, price, category} = element;
            return {id, price, category};
        });

        return products;

    } catch(error){
        console.log(error.message)
        console.error(error)
    }
    
}

export async function getProduct(idPedido){
    try{
        if(idPedido >= 0 && idPedido <= 20){ 
            // no quiero hardcodearlo, pero hacer un fetch sólo para chequear el length es demasiado gasto computacional
            // hay que ver si es más optimo traerme toda la api y recorrerla hasta encontrar el id pedido
            const response = await fetch(`https://fakestoreapi.com/products/${idPedido}`);
            const data = await response.json();
            
            let {id, price, category} =  data;
            return {id, price, category};
        } else {
            return "el Id pedido debe ser entre 0 y 20"
        }
        
    } catch(error){
        console.log(error.message);
        console.error(error)
    }
   
}

export async function postProduct(titulo, precio, categoria){
    if(titulo && precio && categoria ){
        try{
            const product = { title: titulo, price: precio, category: categoria };
    
            const response = await fetch('https://fakestoreapi.com/products', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(product)
                })
            const data = await response.json()
            
            let {id, title, price} = data;
            
            console.log("producto agregado: ")
            // return `agregado - id: ${id}, nombre: ${title}, precio: ${price} `
            return {id, title, price}
        } catch(error){
            console.log("no se pudo agregar el producto");
            console.error(error);
        }
    } else {
        return "ingrese datos válidos para agregar un producto nuevo"
    }
    
}

export async function deleteProduct(productId){
    if(productId >= 0 && productId<= 20){
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {method: 'DELETE'});
            const data = await response.json();

            let {id, title, price} = data;

            console.log("producto eliminado eliminado: ")
            return {id, title, price}

        } catch (error){
            console.log("no se pudo eliminar el producto");
            console.error(error);
        }
    } else{
        return "el id del producto debe ser un número entre 0 y 20"
    }
    
    
}


