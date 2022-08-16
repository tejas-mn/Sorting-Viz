import React from 'react'

export default function Stats({time,sz , left , right}) {
  return (
    <>

        <p>Array Length: {sz} | </p>
        <p>Time : {time} | </p>
    {(left <0 && right < 0)?((left===-1 && right===-1)?(<p>Unsorted</p>):(<p>Sorted</p> )):(<p>Sorting...</p>)
}

        {/* {
        (mode<=0)?((mode==-1)?(<p></p>):(<p>Compare</p>)):(<p>Swap</p>)
        } */}       
    </>
  )
}