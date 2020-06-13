import React from 'react';
import HomeForm from './HomeForm'

function Home(props) {
  return (
    <div className="row d-flex justify-content-center mt-2">
      <div className="card col-8">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris lectus, efficitur eu blandit quis, auctor a mauris. Pellentesque luctus arcu augue. Donec quis enim nec risus interdum posuere eu at tellus. Etiam iaculis eros leo, vitae posuere sapien lobortis interdum. Etiam eu vulputate purus, at tristique metus. Pellentesque felis neque, sodales in quam iaculis, tristique euismod nisi. In placerat nibh vitae faucibus malesuada. Vivamus blandit ante neque, et bibendum dolor aliquam a. Donec felis lectus, viverra non pulvinar vel, fermentum ut tortor.
          </p>
          <HomeForm/>
        </div>
      </div>
    </div>
  )
}

export default Home;