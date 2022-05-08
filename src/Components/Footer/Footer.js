import React from 'react'
import './Footer.css'

const Footer = (props) => {
  const {isOpen, setOpenPost} = props
  return (
    <footer>
      <div className="footer-title" onClick={()=> setOpenPost(!isOpen)}>
        {isOpen?'x':'+'}
      </div>
    </footer>
  )
}

export default Footer