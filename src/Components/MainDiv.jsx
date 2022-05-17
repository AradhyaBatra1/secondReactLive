import React from 'react'
import img11 from './img1.png'

export default function MainDiv() {
  return (
      <>
          <main>
              <div className='leftside'>
                  <h3>
                      Hello
                  </h3>
                  <h1>I am Aradhya Batra</h1>
                  <h2>web developer</h2>
                  <a href="#">Hire me</a>
                  <a href="#">Contact me</a>
              </div>
              <div className='rightside'>
                 <img src={img11} alt="" />
              </div>
        </main>
      </>
  )
}
