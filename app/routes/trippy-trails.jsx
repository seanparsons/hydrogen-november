import { Link } from '@remix-run/react'
import { BlogComponent } from '../components/Layout'

export default function Blog() {
  return (
    <BlogComponent title={<h1>Hello!</h1>}>
      hi!
    </BlogComponent>
  )
}
