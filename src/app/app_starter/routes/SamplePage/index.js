import React from "react";
import ContainerHeader from "components/materialUI/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";

import ProfileCard from "components/materialUI/ProfileCard/index";
import LanguageSwitcher from "components/materialUI/LanguageSwitcher/index";
import InFoWithBgImage from "components/materialUI/InFoWithBgImage/index";

class SamplePage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="pages.samplePage" />}
        />
        <div className="d-flex justify-content-center">
          <h1>
            <IntlMessages id="pages.samplePage.description" />
            <ProfileCard />
            <InFoWithBgImage />
          </h1>
        </div>
      </div>
    );
  }
}

export default SamplePage;
