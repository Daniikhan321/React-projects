import React from 'react'
import { Link, NavLink } from "react-router-dom";




function Header() {
  return (
    
    <header>
        <nav>
            <div className='flex bg-gray-900'>
             
                
                   <Link to="/" className="">
                        <img
                            src="../src/assets/images/logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
        
              <div className=" flex ">
               <ul className='flex items-center gap-4 text-white'>
                <li>
                  <NavLink to= "/home" className="">
                  Home
                  </NavLink>
                </li>    


                <li>
                   <NavLink to= "/about" className="">
                  About Us
                  </NavLink>
                </li>



                <li>
                   <NavLink to= "/contact" className="">
                  Contect Us
                  </NavLink>
                </li>
                <li>
                   <NavLink to= "/service" className="">
                  service
                  </NavLink>


                  
                </li>
               </ul>

              </div>

            </div>
        </nav>
    </header>

  )
}

export default Header