import React from 'react'
import './skewed-borders.scss'

export default () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Skewed borders</h1>
      <div className="skewed-border-container">
        <div className="box">
          <div className="content">
            <h1>Heading 1</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus vero odit impedit pariatur nihil. Ab
              maiores quod minima distinctio. Officia quos aliquam illum obcaecati inventore commodi hic iste labore
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h1>Heading 2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus vero odit impedit pariatur nihil. Ab
              maiores quod minima distinctio. Officia quos aliquam illum obcaecati inventore commodi hic iste labore
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h1>Heading 3</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus vero odit impedit pariatur nihil. Ab
              maiores quod minima distinctio. Officia quos aliquam illum obcaecati inventore commodi hic iste labore
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
