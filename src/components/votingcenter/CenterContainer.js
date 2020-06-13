import React, { useEffect, useContext } from 'react';
import {AppContext} from '../app/App';


function CenterContainer() {
  const [state] = useContext(AppContext);

  // this useEffect is just to check the value, you can totally remove it
  useEffect(() => {
    console.log(state.address);
  }, [state.address])

  return (
    <div>
    </div>
  );
}

export default CenterContainer;