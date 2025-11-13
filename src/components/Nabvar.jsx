import React from 'react'
import { Link } from 'react-router'

const Nabvar = () => {
  return (
    <div className="bg-[#f45512] shadow-sm border-b border-[#f45512] sticky top-0 z-50">
        <div className='max-w-7xl mx-auto flex justify-between items-center py-3 px-4"'>
             {/* LOGO */}
            <div className="flex gap-7 items-center">
              <Link to={"/"}>
                <h1 className="font-bold text-3xl text-white tracking-wide">
                  Lashang Fashion
                </h1>
              </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Nabvar
