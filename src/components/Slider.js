import React from 'react'

export default function Slider({changeSpeed , changeSize , speed , sz}) {
  return (
   <>
    <p>Speed: </p> 
    <div className="slidecontainer">
    <input type="range" onChange={changeSpeed} value={speed} min='100' max='2000' className="slider disableWhileSorting" />
    </div>
    <p>Size: </p>
    <div className="slidecontainer">
    <input type="range" onChange={changeSize} min='1' value={sz} max='50' className="slider disableWhileSorting" />
    </div>
   </>
  )
}
