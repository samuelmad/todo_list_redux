import React from 'react'

export default ({name, isComplete})=>(
  <li>
    <input type="checkbox" defaultChecked={isComplete}/> {name}
  </li>
)
