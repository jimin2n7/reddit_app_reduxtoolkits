import React, { useState } from 'react'
import './MakePost.css'
import Input from '../InputField/Input'
import { useDispatch, useSelector } from 'react-redux'
import {createPost} from '../redux/postSlice'

const MakePost = (props) => {

  const {setOpenPost} = props
  const [title, setTitle] = useState("Add a title")
  const [desc, setDesc] = useState("Add some descriptions")
  const [selectIdx, setSelectIdx] = useState(0)
  const tags = ["None","NSFW", "Mood", "Quotes", "Shitpost"]
  const dispatch = useDispatch()
  const handlePost = ()=>{
    setOpenPost(false)
    const newPost = {
      title: title,
      description: desc,
      tag: selectIdx
    }
    dispatch(createPost(newPost))
  }
 
  return (
    <section className='makepost-container'>
      <div className="makepost-navigation">
        <p className="make-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input data={title} inputType="textArea" setData={setTitle} label="Title" classStyle="makepost-title"/>
      <Input data={desc} inputType="textArea" setData={setDesc} label="Descriptions" classStyle="makepost-desc"/>
      <label >Tags</label>
      <div className="makepost-tags">
        {
          tags.map((tag,index)=>(
            <button 
            key={index} 
            className={`${selectIdx === index?`makepost-tags-selected`:`makepost-tags-${tag}`}`}
            onClick={()=>setSelectIdx(index)}
            >{tag}</button>
          ))
        }
      </div>
    </section>
  )
}

export default MakePost