import React from 'react'

function page() {
  const date = new Date("2023-10-20")
  const day = date.getDay()

  console.log()
  
  return (
    <div className='mt-96'>{day}</div>
  )
}

export default page