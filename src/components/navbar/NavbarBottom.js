import React from 'react'

function NavbarBottom() {


  const data = [
    "Muddatli to'lov",
    "Arzon narxlar",
    "Elektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksessuarlar",
    "Go'zalik va parvarish",
    "Salomatlik",
    "Uy-ro'zg'or buyumlari",
  ]

  return (
    <div className='navbar-bottom container'>
      {
        data.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })
      }
    </div>
  )
}

export default NavbarBottom