import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function footer() {
  return (
    <div>
      <footer className="custom-footer">
        <div className="footer-section">
          <h3>Section 1</h3>
          <p>Content for section 1 goes here.</p>
        </div>

        <div className="footer-section">
          <h3>Section 2</h3>
          <p>Content for section 2 goes here.</p>
        </div>

        <div className="footer-section">
          <h3>Section 3</h3>
          <p>Content for section 3 goes here.</p>
        </div>
      </footer>
    </div>
  )
}

