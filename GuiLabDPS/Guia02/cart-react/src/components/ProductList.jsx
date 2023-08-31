import React, {useState} from "react";
import {data} from "../data";
import { styled } from "styled-components";
export const ProductList=({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
})=>{

    const [modal,setModal]=useState(false);
    const[modalcontent, setModalContent]=useState([]);
    const toggleModal=(product)=>{
        setModalContent([product]);
        setModal(!modal)
    }

    const onAddProduct = product =>{
        if(allProducts.find(item=>item.id=== product.id)){
            const products = allProducts.map(item=>
                item.id===product.id ? {...item,quantity:item.quantity +1}:item);
                setTotal(total+product.price*product.quantity);
                setCountProducts(countProducts+product.quantity);
                return setAllProducts([...products]);
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };

    return(
        <div className="container-items">
            {data.map(product =>(
                <div className="item" key={product.id}>
                    <figure>
                        <img onClick={()=>toggleModal(product)} src={product.urlImage} alt={product.title} />
                    </figure>
                    <div className="info-product">
                        <h2>{product.title}</h2>
                        <p className="price">${product.price}</p>
                        <button onClick={()=>onAddProduct(product)}>Añadir al carrito</button>
                    </div>
                    {modal && (
                        <div className="modal">
                            {modalcontent.map((pop)=>{
                                return(
                                    <div onClick={()=>toggleModal(product)} className="overlay">
                                       <div className="modal-content">
                                          <h2>{pop.title}</h2>
                                          <p>{pop.summary}</p>
                                          <button className="close-modal" onClick={toggleModal}>Cerrar</button>
                                        </div>
                                   </div>
                                );
                            })}

                    </div>
                    )
                    }
                </div>
            ))}
        </div>
    );
}
