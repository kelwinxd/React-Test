import React from 'react'

const Product = ({data}) => {
  return (
    <>
    <h1>{data.nome}</h1>
    <p>{data.descricao}</p>
    <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />

    </>
  )
}

export default Product