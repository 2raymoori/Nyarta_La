import React from 'react'
import Button from './Button'
import './navbar.css'
export const Navbar = () => {
  return (
    <div className='navContainer'>
      <div  className='nav-section-1'>
       <Button title="Men" pointer="#" />
       <Button title="Women" pointer="#" />
       <Button title="Children" pointer="#" />
       <Button title="Accessories" pointer="#" />
      </div>
      <div className='nav-section-2'>
          <div>
            <h2>Nyarta-La</h2>
          </div>
      </div>
      <div className='nav-section-3'>
       <Button title="Home" pointer="#" />
       <Button title="About" pointer="#" />
       <Button title="Contact" pointer="#" />
       <Button title="Stores" pointer="#" />
       <Button title="Account" pointer="#" />
       <Button title="Cart" pointer="#" />

      </div>
    </div>
  )
}
