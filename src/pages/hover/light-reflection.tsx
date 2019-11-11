import React from 'react'
import './light-reflection.scss'
import CenterHead from '../../templates/Center-head'

export default () => {
  return (
    <CenterHead title="Light Reflection">
      <div className="light-reflection-container">
        <button className="btn effect-lr">
          <span>Hover</span>
        </button>
      </div>
    </CenterHead>
  )
}
