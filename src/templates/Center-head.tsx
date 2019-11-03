import * as React from 'react'
import Head from '../components/head'
import PageHead from '../components/page-head'

export default ({ title, children }: any) => {
  return (
    <React.Fragment>
      <Head></Head>
      <div className="page-container">
        <PageHead>{title}</PageHead>
        {children}
      </div>
    </React.Fragment>
  )
}
