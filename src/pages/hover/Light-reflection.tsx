import React from 'react'
import './light-reflection.scss'
import PageHead from '../../components/page-head'

export default () => {
  return (
    <div className="page-container">
      <PageHead>Light Reflection</PageHead>
      <div className="light-reflection-container">
        <button className="btn effect-lr">
          <span>Hover</span>
        </button>
      </div>
    </div>
  )
}
