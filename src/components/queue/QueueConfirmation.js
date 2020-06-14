import React from 'react';
import './QueueConfirmation.scss';
import people from '../../assets/images/people.svg';
import flag from '../../assets/images/flag-usa.svg';
import pointer from '../../assets/images/pointer.svg';
import hourglass from '../../assets/images/hourglass.svg';
import humanStanding from '../../assets/images/humaaans-standing-11.svg';
import humanSitting from '../../assets/images/humaaans-sitting-4.svg';

const API_KEY = process.env.REACT_APP_API_KEY;

const QueueConfirmation = (props) => {
  return ( 
    <main className='queue-confirmation-main'>
      <h2>Thanks for joining!</h2>
      <h4>you're in the queue for...</h4>
      <div className={'voting-center-details-div'}>
        <h3>{props.votingCenter}</h3>
        <h5>{props.address}</h5>
        <iframe title='map' width="250" height="250" frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
          &q=Union+Station,Denver+CO`} allowFullScreen>
        </iframe>
        <div className="icon-div">
        <img src={pointer} alt='pointer'/>
          <h4><span>{props.distance}</span> minutes away</h4>
        </div>
        <div className="icon-div">
          <img src={people} alt='people'/>
          <h4><span>{props.queueNum}</span> people ahead of you</h4>
        </div>
        <div className="icon-div">
          <img src={hourglass} alt='hourglass'/>
          <h4><span>{props.eta}</span> minutes before you're up!</h4>
        </div>
      </div>
      <section className='graphics-queue-section'>
        <div>
          <img className="human-img" src={humanStanding} alt="human standing"/>
        </div>
        <div className='voting-sticker-div'>
          <img src={flag} alt="american flag" />
          <h3>I'm Voting Today!</h3>
        </div>
        <div>
        <img className="human-img" src={humanSitting} alt="human sitting"/>
        </div>
      </section>
    </main>
  );
}

export default QueueConfirmation;