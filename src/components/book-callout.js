import React from "react"
import { Link } from "gatsby"

class BookCallout extends React.Component {

  render() {
    return (
      <section className="book-callout">
        <div className="book-callout_copy">
          <h2 className="h3">Just how obsessed are <br />we with user research?</h2>
          <p class="h6">So much that we wrote a book about it.</p>
          <Link to="/startusertesting" className="btn">Check out our book</Link>
        </div>
        <div className="book-callout_image">
          <img src="/images/index/book-how-to-design-apps-people-actually-want-to-use.jpg" alt="Book cover for 'How to Design Apps People Actually Want to Use'" />
        </div>
      </section>
    )
  }
}

export default BookCallout;