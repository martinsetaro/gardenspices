import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext();

const {Provider} = contexto;

const AppContext = ({children}) => {

    const[carrito,setCarrito] = useState([]);
    
    


    const isInCart =(id)=>{
     
    return carrito.find( producto => producto.id === id);

    }


    const agregarCarrito = (item) => {
        if(isInCart(item.id)){
            const newCart = [...carrito];
            for(const carro of newCart){
                if(carro.id === item.id){
                  carro.cantidad = carro.cantidad + 1;
                }
                setCarrito(newCart);
            }
            
        }
        else{
        setCarrito([...carrito,item]);
    }
}

const removeItem = (id)=>{
    const newCart = [...carrito].filter(producto => producto.id  !==  id);
    setCarrito(newCart);
}





   




    

    
    return (
        <Provider value={{agregarCarrito,carrito,removeItem}}>
            {children}
        </Provider>
    );
}

export default AppContext;