import React from 'react'
import styles from './icon.module.scss'

const Icon = ({ icon }: iconI) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
)

export type iconI = {
  icon: {
    path: string
    viewBox: string
  }
}

export default Icon
