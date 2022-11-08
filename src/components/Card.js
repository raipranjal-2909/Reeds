import React from 'react'

export default function Card() {
  return (
    <div className="deal-cards">
            <h4>Property.title</h4>
            <p><strong>Description</strong></p>
            <p>Property.desc</p>

            <p><strong> Contact No.</strong> Property.contact</p>
            <p><strong>Email :</strong>Property.email</p>
            <p><strong>Posted on :</strong>Property.createdAt</p>
            <p><strong>Price :</strong>Property.price</p>

    </div>
  )
}
