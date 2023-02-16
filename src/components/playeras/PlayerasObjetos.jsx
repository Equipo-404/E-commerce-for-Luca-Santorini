import React from 'react'
import "./playeras.css";
import itemsContainer from "./listaobjetos"

const PlayerasObjetos = ()  => {
  return (
    <div>
      <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676229431/IMG_9868_vpuxgk.jpg" className="img-fluid"></img>
<h1>Playeras</h1>

    <div className="row" id="list-items"> 
    ¨
   {itemsContainer }
    </div>
</div>
    
  )
}
export default PlayerasObjetos
