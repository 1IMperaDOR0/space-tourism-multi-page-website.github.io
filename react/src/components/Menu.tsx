import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Menu() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const linkClass = (path: string) => `
    border-b-4
    ${open ? 'py-5' : 'py-[50px]'}
    ${location.pathname === path
      ? 'border-white'
      : 'border-transparent hover:border-white'
    }
  `

  return (
    <nav className="flex items-center text-white">
      <ul
        className={`
          fixed top-0 right-0 w-60 
          bg-white/5 backdrop-filter backdrop-blur-lg
          flex flex-col justify-center gap-10
          transition-transform
          ${open ? 'translate-x-0' : 'translate-x-full'}
          ${open ? 'pr-10' : 'pr-15'}
          ${open ? 'pl-10' : 'pl-25'}
          ${open ? 'min-h-full' : 'h-auto'}
          md:static md:flex-row md:translate-x-0 md:h-auto md:w-auto
        `}
      >
        <Link to="/Home">
          <li className={`
            ${linkClass('/Home')}
            min-w-[77.44px]
          `}>
            <b>00</b>&nbsp; HOME
          </li>
        </Link>
        <Link to="/Destination">
          <li className={`
            ${linkClass('/Destination')}
            min-w-[129.83px]
          `}>
            <b>01</b>&nbsp; DESTINATION
          </li>
        </Link>
        <Link to="/Crew">
          <li className={`
            ${linkClass('/Crew')}
            min-w-[77.44px]
          `}>
            <b>02</b>&nbsp; CREW
          </li>
        </Link>
        <Link to="/Technology">
          <li className={`
            ${linkClass('/Technology')}
            min-w-[127.81px]
          `}>
            <b>03</b>&nbsp; TECHNOLOGY
          </li>
        </Link>
      </ul>
      <button
        className={`md:hidden text-2xl m-10 w-[32px] h-[32px] flex justify-end ${open ? 'fixed top-2 -right-3' : 'relative'}`}
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>


    </nav>
  )
}