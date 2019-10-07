import React from 'react'
import { Link } from 'gatsby'
import './home.scss'

export default () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Collection of cool CSS tricks</h1>
      <div className="page-home">
        <div className="list-categories">
          <h3>Border</h3>
          <h3>Hover</h3>
        </div>
        <div className="list-category-items">
          <ul>
            <li>
              <Link to="border/skewed-border/">border/skewed-border/</Link>
            </li>
            <li>
              <Link to="hover/laser-torch/">hover/laser-torch/</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
