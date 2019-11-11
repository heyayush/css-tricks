import React from 'react'
import './text-gradients.scss'
import CenterHead from '../../templates/Center-head'

export default () => {
  return (
    <CenterHead title="Text Gradients">
      <div className="text-gradients-container">
        <h2>This is an example of a heading with text in color gradient</h2>
        <p>
          CSS does not allow using gradient values in the `color` property. But with simple trick we can achieve the
          same effect by using a combination of `background` , `background-clip`, and `color:transparent` property. The
          concept here is to apply the required gradient color to the `background` property and then use
          `background-clip` to limit the background only to the `text` and finally use `color:transparent` to make the
          text color transparent and let the background gradient take over.
        </p>
      </div>
    </CenterHead>
  )
}
