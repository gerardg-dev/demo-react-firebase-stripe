import React from 'react';
import SimpleRadialBarChart from './Components/SimpleRadialBarChart';
import CardBox from 'components/materialUI/CardBox';
import ContainerHeader from 'components/materialUI/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Radial = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="chart.radial"/>} match={match}/>

      <div className="row">
        <CardBox styleName="col-lg-12" heading="Simple Radial Bar Chart">
          <SimpleRadialBarChart/>
        </CardBox>
      </div>
    </div>
  );
};

export default Radial;
