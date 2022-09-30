import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const eachData = await response.json()

    const updatedData = {
      id: eachData.id,
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      imageUrl: eachData.image_url,
      title: eachData.title,
      topic: eachData.topic,
      content: eachData.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    console.log(blogData)
    const {author, avatarUrl, imageUrl, title, content} = blogData
    return (
      <div className="blog-item">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="data-heading">{title}</h1>
            <div className="author-details">
              <img src={avatarUrl} alt="avatar" className="avatar-image" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="main-images" />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
