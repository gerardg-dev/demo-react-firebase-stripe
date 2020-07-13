import React from 'react';
import SimpleMap from './Components/SimpleMap';
import CardBox from 'components/materialUI/CardBox';
import ContainerHeader from 'components/materialUI/ContainerHeader';
import IntlMessages from 'util/IntlMessages';


const Simple = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="sidebar.map.simple"/>} match={match}/>

      <div className="row">
        <CardBox styleName="col-lg-12">
          <SimpleMap/>
        </CardBox>
      </div>
    </div>
  );
};

export default Simple;
