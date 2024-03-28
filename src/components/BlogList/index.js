// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {bloglist} = props
  const list = bloglist

  return (
    <ul className="blog-container">
      {list.map(each => (
        <BlogItem key={each.id} details={each} />
      ))}
    </ul>
  )
}

export default BlogList
