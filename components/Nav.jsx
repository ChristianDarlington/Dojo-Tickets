"use client"
import React from 'react'
import Link from 'next/link'



const Nav = () => {
  
  return (
    <nav>
    <h1>Dojo Helpdesk</h1>
    <Link href='/'>Dashboard</Link>
    <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default Nav