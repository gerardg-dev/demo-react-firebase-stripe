// FIREBASE FIRESTORE PAGINATION

// TO FIX

// TO REFACTOR

// TO IMPOROVE

// TO ADD (FEATURES)
// - Paignations Pages, Number of Page, Back and Forward Buttons
// - Be able to scroll and load new content, no need of a button to load more

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { Button } from "semantic-ui-react";
import MyContainer from "../../../components/wedevlopUI/layout/MyContainer";
import InfiniteScroll from "react-infinite-scroller";

import { loadDocuments } from "../../../thunks/examples/firebase/Pagination";

const containerStyle = {
  backgroundColor: "gray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "yellow"
};

const boxStyle = {
  backgroundColor: "red",
  width: "200px",
  height: "200px"
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedDocuments: [],
      moreDocuments: false,
      loadingInitial: true
    };
  }

  componentWillMount() {}

  async componentDidMount() {
    let next = await this.props.loadDocuments();
    console.log(
      "Pagination Component - componentDidMount() - next , which is querySnap from Thunk return"
    );
    console.log(next);

    // if there is just 0 or 1 docs left, then we know thats all
    // but of there is more than 1, then there is ceirtanly more space for pagination
    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreDocuments: true,
        loadingInitial: false
      });
    }
  }

  componentDidUpdate = prevProps => {
    // console.log("this.props.paginationDocuments.documents");
    // console.log(this.props.paginationDocuments.documents);
    // console.log("prevProps.paginationDocuments.documents");
    // console.log(prevProps.paginationDocuments.documents);
    if (
      this.props.paginationDocuments.documents !==
      prevProps.paginationDocuments.documents
    ) {
      this.setState({
        loadedDocuments: [
          ...this.state.loadedDocuments,
          ...this.props.paginationDocuments.documents
        ]
      });
    }
  };

  getNextDocuments = async () => {
    // const { documents } = this.props;
    const documents = this.props.paginationDocuments.documents;
    console.log(
      "Pagination Component - getNextDocuments() - this.props.documents"
    );
    console.log(documents);

    let lastDoc = documents && documents[documents.length - 1];
    console.log("Pagination Component - getNextDocuments() - lastDoc");
    console.log(lastDoc);

    let next = await this.props.loadDocuments(lastDoc);
    console.log("Pagination Component - getNextDocuments() - next");
    console.log(next);

    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreDocuments: false
      });
    }
  };

  renderDocuments = documents => {
    if (documents && documents.length === 0) {
      return (
        <div>
          <br />
          <p>NO DATA</p>
          <br />
        </div>
      );
    }

    return documents.map((doc, index) => {
      return (
        <div>
          {index === 0 && <br />}
          <div
            style={{
              width: "300px",
              padding: "10px",
              backgroundColor: "lightGreen",
              borderRadius: "10px"
            }}
          >
            <p style={{ margin: 0, color: "white" }}>{`ID: ${doc.id}`}</p>
            <p style={{ margin: 0, color: "white" }}>{`Email: ${doc.email}`}</p>
          </div>
          <br />
        </div>
      );
    });
  };

  render() {
    const { children } = this.props;
    const { paginationType, infiniteScrollButton } = this.props;

    // const { documents, loading } = this.props;

    // if (this.state.loading) return <LoadingComponent />;

    let documentsToRender = [];
    if (paginationType === "pages") {
      documentsToRender = this.props.paginationDocuments
        ? this.props.paginationDocuments.documents
        : [];
    }
    if (paginationType === "infiniteScroll") {
      documentsToRender = this.state.loadedDocuments;
    }

    return (
      <MyContainer size="mainContainer">
        <MyContainer
          size="fitContent"
          // fixedWidth="100%"
          // fixedHeight="100px"
          addStyle={{ ...containerStyle }}
        >
          <br />
          <p style={{ margin: 0, color: "white", fontSize: "20px" }}>
            DOCUMENTS
          </p>
          {/*
            this.renderDocuments(
            this.props.paginationDocuments
              ? this.props.paginationDocuments.documents
              : []
            )
          */}

          {paginationType === "pages" &&
            this.renderDocuments(documentsToRender)}

          {paginationType === "infiniteScroll" &&
            infiniteScrollButton === true &&
            this.renderDocuments(documentsToRender)}

          {paginationType === "infiniteScroll" &&
            infiniteScrollButton === false && (
              <div>
                {// documentsToRender && documentsToRender.length !== 0 && (
                documentsToRender && documentsToRender.length !== 0 && (
                  <InfiniteScroll
                    pageStart={0}
                    loadMore={this.getNextDocuments}
                    // hasMore={!loading && this.state.moreDocuments}
                    hasMore={this.state.moreDocuments}
                    initialLoad={false}
                  >
                    {this.renderDocuments(documentsToRender)}
                  </InfiniteScroll>
                )}
              </div>
            )}

          <Button
            // loading={loading}
            onClick={this.getNextDocuments}
            disabled={!this.state.moreDocuments}
            content=">>"
            color="green"
            floated="right"
          />
          <br />
        </MyContainer>
        {children}
      </MyContainer>
    );
  }
}

Pagination.defaultProps = {
  // backgroundColor: "rgba(255, 255, 255, 1.0)",
  // addStyle: {}
  paginationDocuments: { documents: [] },
  paginationType: "infiniteScroll", // "pages", "infiniteScroll"
  infiniteScrollButton: true
};

const mapStateToProps = ({ examples }) => {
  const { paginationDocuments } = examples;
  return { paginationDocuments };
};

export default connect(
  mapStateToProps,
  { loadDocuments }
)(Pagination);
