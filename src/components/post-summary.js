import React from 'react'

const PostSummary = ({ summaryText }) => {
  return (
    <div className="post-summary">
      <h6 className="accent">In this article</h6>
      <p>{summaryText}</p>
    </div>
  )
}

export default PostSummary
