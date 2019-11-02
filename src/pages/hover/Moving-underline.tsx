import React from 'react'
import './moving-underline.scss'
import PageHead from '../../components/page-head'

export default () => {
  return (
    <div className="page-container">
      <PageHead>Moving Underline</PageHead>
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
    </div>
  )
}
