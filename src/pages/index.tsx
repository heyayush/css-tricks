import React, { useState } from 'react'
import { Link } from 'gatsby'
import './home.scss'
import { graphql } from 'gatsby'

export default ({ data }: AllSitePageQueryI) => {
  const ignorePages = ['/dev-404-page/', '/']
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
    <div className="page-container">
      <h1 className="page-title">Collection of cool CSS tricks</h1>
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
