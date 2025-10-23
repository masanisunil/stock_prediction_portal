import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
  <>
 
  <div className='container'>
    <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid nulla iste alias delectus, inventore at ipsa atque amet labore deserunt reprehenderit suscipit placeat exercitationem? Porro quae quibusdam fugiat dignissimos.</p>
        <Button text="Login" class="btn-outline-info" to="/login" />
         
    </div>
  </div>
  
  </>
  )
}

export default Main