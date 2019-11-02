/* tslint:disable */
import React, { useEffect } from 'react'
import './masonry.scss'
import PageHead from '../../components/page-head'
import Colcade from 'colcade/colcade.js'

export default () => {
  useEffect(() => {
    const colc = new Colcade('.grid', {
      columns: '.grid-col',
      items: '.grid-item',
    })
  })
  return (
    <div className="page-container">
      <PageHead>Masonry Layout</PageHead>
      <div className="masonry-layout-container">
        <div className="grid">
          <div className="grid-col grid-col--1"></div>
          <div className="grid-col grid-col--2"></div>
          <div className="grid-col grid-col--3"></div>
          <div className="grid-col grid-col--4"></div>

          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?nature" alt="caption" />
          </div>

          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?travel" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?party" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?history" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?movie" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?pet" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?people" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?outdoor" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?indoor" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?flower" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?tech" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?music" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?live" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?wild" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?play" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?game" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?team" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?sports" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?mountain" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?river" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?park" alt="caption" />
          </div>
          <div className="grid-item">
            <div className="content">
              <h2>Caption</h2>
            </div>
            <img src="https://source.unsplash.com/random/?food" alt="caption" />
          </div>
        </div>
      </div>
    </div>
  )
}
