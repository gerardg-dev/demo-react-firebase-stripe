import React, {Component} from 'react';

import ContainerHeader from 'components/materialUI/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import FullScreen from './FullScreen/index';
import CardBox from 'components/materialUI/CardBox/index';
import Accept from './Accept/index';
import BrowserLimitations from './BrowserLimitations/index';
import Dialog from './Dialog/index';


class DragNDrop extends Component {
  render() {
    return (
      <div>
        <ContainerHeader title={<IntlMessages id="sidebar.extensions.dropzone"/>} match={this.props.match}/>
        <div className="row">
          <CardBox styleName="col-sm-6" cardStyle="" childrenStyle="text-center">
            <Accept/>
          </CardBox>

          <CardBox styleName="col-sm-6" cardStyle="" childrenStyle="text-center">
            <BrowserLimitations/>
          </CardBox>
          <CardBox styleName="col-sm-6" cardStyle="" childrenStyle="text-center">
            <Dialog/>
          </CardBox>
          <CardBox styleName="col-sm-6" cardStyle="" childrenStyle="text-center">
            <FullScreen/>
          </CardBox>
        </div>
      </div>
    )
  }
}

export default DragNDrop
