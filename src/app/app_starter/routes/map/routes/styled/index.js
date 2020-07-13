import React from 'react';
import StyledMap from './Components/StyledMap';
import CardBox from 'components/materialUI/CardBox';
import ContainerHeader from 'components/materialUI/ContainerHeader';
import IntlMessages from 'util/IntlMessages';


const Styled = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="sidebar.map.styled"/>} match={match}/>

      <div className="row">
        <CardBox styleName="col-lg-12">
          <StyledMap/>
        </CardBox>
      </div>
    </div>
  );
};

export default Styled;
