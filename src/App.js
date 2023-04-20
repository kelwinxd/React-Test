import React from 'react'
import './App.css'
import Product from './Product'
import Loadgif from './load.gif'



const App = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
// 
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
 
   
       const [data, setData] = React.useState(null)
       const [load, setLoad] = React.useState(null)

    async function taClick(event){

      setLoad(true)
   const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await res.json()
     setData(json)
     console.log(json)
     setLoad(false)
  }
  return (
    <>
      
      <div className='grid'>
      <div className='buttons'>
      
      <button onClick={taClick}>Tablet</button>
      <button onClick={taClick}>Smartphone</button>
      <button onClick={taClick}>Notebook</button>
      </div></div>
 

    <div className='produto'>
    {load && <img src={Loadgif} alt='loadgin' style={{width:'200px', height:'200px', marginTop:'50px'}}/>}
    {!load && data && <Product data={data}/>}

    

    </div>

   
    
    </>
  )
}

export default App