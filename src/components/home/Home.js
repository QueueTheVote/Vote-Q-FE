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
            Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Morbi mauris lectus, efficitur eu blandit quis, auctor a mauris. Pellentesque luctus arcu augue. Donec quis enim nec risus interdum posuere eu at tellus. Etiam iaculis eros leo, vitae posuere sapien lobortis interdum. Etiam eu vulputate purus, at tristique metus. Pellentesque felis neque, sodales in quam iaculis, tristique euismod nisi. In placerat nibh vitae faucibus malesuada. Vivamus blandit ante neque, et bibendum dolor aliquam a. Donec felis lectus, viverra non pulvinar vel, fermentum ut tortor.
          </p>
          <button className="btn btn-primary mb-3">Test Test</button>
          <HomeForm/>
        </div>
      </div>
    </div>
  )
}

export default Home;