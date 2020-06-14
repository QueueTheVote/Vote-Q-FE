import React from 'react';
import HomeForm from './HomeForm'

function Home(props) {
  return (
    <div className="row d-flex justify-content-center mt-2">
      <div className="card col-8">
        <div className="card-header">
          <h2>Test Header</h2>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Morbi mauris lectus, efficitur eu blandit quis, auctor a mauris.
          </p>
          <HomeForm/>
        </div>
      </div>
    </div>
  )
}

export default Home;