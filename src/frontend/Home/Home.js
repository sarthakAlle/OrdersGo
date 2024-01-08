import React from 'react';
import Card from '../Card/Card.js';
import './Home.css'
function Home() {
return (
    <div>
    <div className='custom-grid'>
    {Array.from(Array(100), (e, i) => (
              <Card/>
          ))}
    </div>
    </div>
 
);
}

export default Home;
