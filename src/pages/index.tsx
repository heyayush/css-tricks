import React, { useState } from 'react'
import { Link } from 'gatsby'
import './home.scss'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Icon from '../components/icon/icon'
import ICONS from '../constants/icons'

export default ({ data }: AllSitePageQueryI) => {
  const ignorePages = ['/dev-404-page/', '/', '/offline-plugin-app-shell-fallback/']
  const paths = data.allSitePage.edges.map(edge => edge.node.path)
  const allPages = paths.filter(path => !ignorePages.includes(path))
  const allFolders = new Set(allPages.map(item => item.split('/')[1]))
  const [activeCat, setActiveCat] = useState([...allFolders][0])

  const listCategories: any = [...allFolders].map(category => (
    <li
      className={category === activeCat ? 'is-active' : undefined}
      key={category.toString()}
      onClick={() => setActiveCat(category)}
    >
      <a>{category}</a>
    </li>
  ))

  return (
    <React.Fragment>
      <Head></Head>
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Collection of cool CSS tricks</h1>
          <a
            href="https://github.com/heyayush/css-tricks"
            rel="noopener noreferrer"
            target="_blank"
            className="link-github"
          >
            <Icon icon={ICONS.GITHUB} />
          </a>
        </div>
        <div className="page-home">
          <div className="list-categories">
            <h3>Browse by:</h3>
            <div className="tabs is-toggle">
              <ul>{listCategories}</ul>
            </div>
          </div>
          <div className="list-category-items">
            <ListCatItems active={activeCat} all={allPages}></ListCatItems>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const ListCatItems = ({ active, all }: { active: string; all: string[] }) => {
  const getCategoryPages = (categoryName: string) =>
    all.filter((item: string) => item.split('/')[1] === categoryName).map((item: string) => item.split('/')[2])

  const listCategoryItems = getCategoryPages(active).map((cat: string) => (
    <li key={cat.toString()}>
      <Link to={`${active}/${cat}/`}>{cat}</Link>
    </li>
  ))
  return <ol>{listCategoryItems}</ol>
}

type AllSitePageQueryI = {
  data: {
    allSitePage: {
      edges: {
        node: {
          path: string
        }
      }[]
    }
  }
}

export const query = graphql`
  query allSitePageQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`
