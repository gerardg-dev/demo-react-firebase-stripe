import React from "react";
import ContainerHeader from "components/materialUI/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";

class ConfirmEmailPage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="pages.ConfirmEmailPage.title" />}
        />
        <div className="d-flex justify-content-center">
          <h1>
            <IntlMessages id="pages.ConfirmEmailPage.description" />
          </h1>
        </div>
      </div>
    );
  }
}

export default ConfirmEmailPage;
