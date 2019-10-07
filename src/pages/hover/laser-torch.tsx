import React from 'react'
import './laser-torch.scss'

export default () => {
  const foo = (e: any) => {
    const x = e.pageX - e.currentTarget.offsetLeft
    const y = e.pageY - e.currentTarget.offsetTop
    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }
  const doo = (e: any) => {
    e.currentTarget.style.setProperty('--x', `-500px`)
    e.currentTarget.style.setProperty('--y', `-500px`)
  }
  return (
    <div className="page-container">
      <h1 className="page-title">Laser Torch</h1>
      <div className="laser-torch-container" onMouseMove={foo} onMouseLeave={doo}>
        <h3 className="is-size-3">Heading</h3>
        <p>
          Lorem ipsum isd asdj aker kjdod klkda mnci sdejknw dflijewmkn sdfij sdfkj lkje bnasda meoi alknv asolijf
          lknsas loijaewr lkndf asdio welnr joapo knerw lkner knasdf oijerto knjdfao dfuiookj kojsdfi nwejro noaidsf
          njiewr nsdjfoadin ihjerwe
        </p>
      </div>
    </div>
  )
}
