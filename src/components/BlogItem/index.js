import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogsData

  return (
    <Link to={`/blogs/${id}`}>
      <li className="list-elements">
        <img src={imageUrl} alt={title} className="main-image" />
        <div className="details">
          <p className="data-para">{topic}</p>
          <h1 className="data-heading">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} alt={title} className="avatar-image" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
