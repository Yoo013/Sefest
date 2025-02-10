import React from 'react';

const Navbar = () => {
const isi = [
    {
        id: 1,
        title: 'Home',
        link: '#home'
    }
]

  return (
    <nav className='pt-12'>
        <div className=''>
      <h1 className='text-3xl font-medium font-montserrat text-white'>Eco<span className='text-[#FFD700]'>Tech</span> Solutions</h1>
        </div>
    </nav>
  );
}

export default Navbar;
