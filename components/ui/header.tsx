import React from 'react'

interface HeaderProps {
    title: string
}

function Header({title}:HeaderProps) {
  return (
    <div className='p-2'>
        <h2 className='text-4xl font-semibold'>{title}</h2>

    </div>
  )
}

export default Header