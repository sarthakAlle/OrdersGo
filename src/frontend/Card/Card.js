import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';

export default function card() {
  return (
    <div className='custom-card'>
      <img className="card-img-top " src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <select >
          <option value="half"> Half</option>
          <option value="full">Full</option>
        </select>
        <select className='quantity'>
          {Array.from(Array(6), (e, i) => (
            <option key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Link to="/" class="price-button">Total price</Link>
      </div>
    </div>

  )
}
