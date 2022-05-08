import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector(state => state.post.post)
    const tags = ["None","NSFW", "Mood", "Quotes", "Shitpost"]
  return (
    <section className="post-container">
        {
          posts.slice(1).map((post,idx)=>{
            return (
              <div className="posts" key={idx}>
                <p className="posts-title">{post.title}</p>
                <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
                <p className="posts-description">{post.description}</p>
              </div>
            )
          })
        }
    </section>
  )
}

export default Posts