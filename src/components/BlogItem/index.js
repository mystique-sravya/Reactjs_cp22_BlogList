// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details, key} = props
  const {title, description, publishedDate} = details
  return (
    <li className="blogitem">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
