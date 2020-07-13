import React from 'react';
import CardBox from 'components/materialUI/CardBox';
import ContainerHeader from 'components/materialUI/ContainerHeader'
import Simple from './simple/index';
import NoListBreadcrumbs from './noList/index';
import IntlMessages from 'util/IntlMessages';

const Breadcrumbs = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="sidebar.components.breadcrumbs"/>}
                       match={match}/>

      <div className="row">
        <CardBox styleName="col-md-6"
                 heading={<IntlMessages id="component.breadcrumbs.simple"/>}>
          <Simple/>
        </CardBox>

        <CardBox styleName="col-md-6"
                 heading={<IntlMessages id="component.breadcrumbs.noList"/>}>
          <NoListBreadcrumbs/>
        </CardBox>
      </div>
    </div>
  );
};
export default Breadcrumbs;