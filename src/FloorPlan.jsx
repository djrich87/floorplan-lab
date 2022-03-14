import React from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

function FloorPlan(props) {
  return (
    <main clasName='grid-container'>
      This is a Floorplan!
      <div className='bedRoom' id={'bed1'}>
        <Bedroom bedNum='1' />
      </div>
      <div id="kitchen">
        <Kitchen />
      </div>
      <div className='bathRoom' id={'bathFull'}>
        <Bath size='Full' />
      </div>
      <div className='bedRoom' id={'bed2'}>
        <Bedroom bedNum='2' />
      </div>
      <div id='livingRoom'>
        <LivingRoom />
      </div>
      <div className='bathRoom' id={'bathHalf'}>
        <Bath size='Half'/>
      </div>
      <div className='bedRoom' id={'bed3'}>
        <Bedroom bedNum='3' />
      </div>

    </main>
  )
}

export default FloorPlan;