import React from 'react';
import TrafficLayerEx from './Components/TrafficLayerEx';
import CardBox from 'components/materialUI/CardBox';
import ContainerHeader from 'components/materialUI/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const TrafficLayer = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="sidebar.map.trafficLayer"/>} match={match}/>

      <div className="row">
        <CardBox styleName="col-lg-12">
          <TrafficLayerEx/>
        </CardBox>
      </div>
    </div>
  );
};

export default TrafficLayer;
