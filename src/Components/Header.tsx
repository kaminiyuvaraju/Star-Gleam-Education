import React from 'react'
import './main.css'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'

const myStyle={

  height:"20px",
  width:"50px"
}
const instagram=<SocialIcon url='https://twitter.com' style={myStyle} />
const facebook=<SocialIcon url='https://facebook.com' style={myStyle}/>
// const facebook=<SocialIcon url='' 
export default function Header() {

  return (
    <div id='header'>
        <div className="row">
          <div className="col-md-5" id='grid' >
              {instagram}
              {facebook}
          </div>
          <div className="col-md-5" id='grid'>
              <Link to="www.gmail.com" id="link">stargleamducation.net</Link>
          </div>
        </div>
    </div>
  )
}