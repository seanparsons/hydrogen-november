import { Link } from '@remix-run/react'
import { BlogComponent } from '../components/Layout'

export default function Blog() {
  return (
    <BlogComponent title={<h1>Promotions</h1>}>
      <ArticleItem handle='spring' title='Spring 2024' />
    </BlogComponent>
  )
}

function ArticleItem({ title, handle }) {
  return (
    <div className='blog-article' key={handle}>
      <Link to={`/promotions/${handle}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  )
}
