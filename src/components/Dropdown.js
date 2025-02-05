import React from 'react'

export default function Dropdown() {
  return (
    <div className='container'>
    <div className="dropdown">
    <button className="btn dropdown-toggle" id='dropdown1' type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/">Action</a></li>
      <li><a className="dropdown-item" href="/">Another action</a></li>
      <li><a className="dropdown-item" href="/">Something else here</a></li>
    </ul>
  </div>
  </div>
  )
}
