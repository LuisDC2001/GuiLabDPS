import React from "react";
import styled  from "styled-components";
const Modal =({children, estado, cambiarEstado})=>{
    return(
        <>
        {estado &&
        <Overlay>
            <ContenedorModal>
                <EncabezadoModal>
                    <h3>Descripción del libro</h3>
                </EncabezadoModal>
                <BotonCerrar>X</BotonCerrar>
                {children}
            </ContenedorModal>
        </Overlay>
}
        </>
    );
}

export default Modal;

const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top:0;
left:0;
background: rgba(0,0,0,.5);

display:flex;
align-items:center;
justify-content:center;
`;

const ContenedorModal = styled.div`
width: 500px;
min-height: 100px;
background: #fff;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111,8.2) 8px 7 px 29px 8 px;
padding:20px
`;

const EncabezadoModal = styled.div`
display:flex;
align-items: center;
justify-content:space-between;
margin-bottom:20px;
paddin-bottom:20px;
border-bottom: 1px solid #EBEBEB ;

h3{
    font-weigth:500;
    font-size:16px;
    color:#1766DC;
}
`;

const BotonCerrar = styled.button`
position:absolute;
top:15px;
right:20px;
width:30px;
height:30px;
border:none;
background:none;
cursor:pointer;
transition: .3s ease all;
border-radius:5px;
color: #1766DC;

svg{
    width:100%;
    height:100%;
}
`;