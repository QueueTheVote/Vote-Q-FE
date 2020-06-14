import React from 'react';
import HomeForm from './HomeForm'

function Home(props) {
  return (
    <>
    <div className="home row margin-lg px-4">
      <img alt="search-icon" src="/assets/images/search.png"/>
      <h2 className="col-12 p-2">Find your voting center</h2>
    </div>
    <div className="row d-flex justify-content-center mt-2">
      <div className="card col-9">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Morbi mauris lectus, efficitur eu blandit quis, auctor a mauris.
          </p>
          <HomeForm/>
        </div>
      </div>
    </div>
    <img className="img-bottom-right" alt="Person Walking" src="../assets/images/standing-23.png"/>
  </>
  )
}

export default Home;