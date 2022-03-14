import React from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

function FloorPlan(props) {
  return (
    <main className='grid-container'>
      <div className='bedRoom' id={'bed-1'}>
        <Bedroom bedNum='1' />
      </div>
      <div id="kitchen">
        <Kitchen />
      </div>
      <div className='bath' id={'bath-Full'}>
        <Bath size='Full' />
      </div>
      <div className='bedRoom' id={'bed-2'}>
        <Bedroom bedNum='2' />
      </div>
      <div id='livingRoom'>
        <LivingRoom />
      </div>
      <div className='bath' id={'bath-Half'}>
        <Bath size='Half'/>
      </div>
      <div className='bedRoom' id={'bed-3'}>
        <Bedroom bedNum='3' />
      </div>

    </main>
  )
}

export default FloorPlan;