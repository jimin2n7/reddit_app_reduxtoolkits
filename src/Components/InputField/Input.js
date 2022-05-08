import React from 'react'
import '../Edit/Edit.css'
import '../Post/MakePost.css'

const Input = (props) => {
    const {inputType, classStyle, label, data, setData} = props
  return (
    <>
        <label>{label}</label>
        {
            inputType==="textArea"?(
                <textarea className={classStyle} placeholder={data} value={data} onChange={(e)=>setData(e.target.value)}/>
            ):(

                <input type="text" placeholder={data} value={data} onChange={(e)=>setData(e.target.value)}/>
            )
        }
    </>
  )
}

export default Input