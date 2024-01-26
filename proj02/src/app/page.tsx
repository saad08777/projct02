import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
       <header className="text-black body-font">
  
    <Image className="w-23 h-25 md:w-15 ml-auto " src="/klogo.png" alt="" width="100" height="120"/>
      
    
    <nav className="md:ml-auto gap-8 hover:text-underline  flex flex-wrap items-center text-base justify-center align-items: flex-start md:items-start border-b-2 border-yellow-500">
     <b> <Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2 " href="/">Home</Link></b>
     <b> <Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2" href="/about">About</Link></b>
      <b><Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2" href="/menu">Menu</Link></b>
     <b> <Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2" href="/contact-us">Products</Link></b>
     
     <b> <Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2" href="/contact-us">Review</Link></b>
     <b> <Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2" href="/contact-us">Contact</Link></b>
     <b> <Link className="mr-5 hover:text-blue-500 hover:underline underline-offset-4 decoration-2" href="/contact-us">Blogs</Link></b>
    
    
    
    </nav>
    
   
    </header>   
    </div>
  )
}

export default page