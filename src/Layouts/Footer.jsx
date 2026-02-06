import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="custom-container">
        <p className='text-center'>Copyright &copy; {year} | All Rights Reserved by <a className='copy' href="https://faisalafrid.vercel.app/" target='_blank'>Afrid</a></p>
      </div>
    </div>
  )
}

export default Footer