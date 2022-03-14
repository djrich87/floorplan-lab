import React from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

function FloorPlan(props) {
  return (
    <div>
      This is a Floorplan!
      <div id="kitchen">
        <Kitchen />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div className='bath' id={'bath-Half'}>
        <Bath size='Half'/>
      </div>
      <div className='bath' id={'bath-Full'}>
        <Bath size='Full' />
      </div>
      <div className='bedroom' id={'bed-1'}>
        <Bedroom bedNum='1' />
      </div>
      <div className='bedroom' id={'bed-2'}>
        <Bedroom bedNum='2' />
      </div>
      <div className='bedroom' id={'bed-3'}>
        <Bedroom bedNum='3' />
      </div>

    </div>
  )
}

export default FloorPlan;