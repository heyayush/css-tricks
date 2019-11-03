import React from 'react'
import './moving-underline.scss'
import CenterHead from '../../templates/Center-head'

export default () => {
  return (
    <CenterHead title="Moving Underline">
      <div className="moving-underline-container">
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">archives</a>
          </li>
          <li>
            <a href="#">tags</a>
          </li>
          <li>
            <a href="#">categories</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
      </div>
    </CenterHead>
  )
}
