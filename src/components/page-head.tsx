import * as React from 'react'
import { Link } from 'gatsby'
import Icon from './icon/icon'
import ICONS from '../constants/icons'

const PageHead = ({ children }: any) => (
  <div className="page-header">
    <Link to="/" className="link-home">
      Back to Home
    </Link>
    <h1 className="page-title">{children}</h1>
    <a href="https://github.com/heyayush/css-tricks" rel="noopener noreferrer" target="_blank" className="link-github">
      <Icon icon={ICONS.GITHUB} />
    </a>
  </div>
)

export default PageHead
