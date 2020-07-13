// Faker library
// http://marak.github.io/faker.js/
// https://github.com/Marak/Faker.js#readme

// React LazyLoad
// https://github.com/twobin/react-lazyload

import React, { Component, Fragment } from "react";

import { Image } from "semantic-ui-react";
import MyContainer from "../../../components/wedevlopUI/layout/MyContainer";
import faker from "faker";
import LazyLoad from "react-lazyload";

const ExamplesLazyLoad = props => {
  // const { backgroundColor, addStyle, children } = props;
  const { children } = props;

  const containerStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "red"
  };

  const imgStyle = {
    width: "300px",
    height: "300px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "10px",
    marginBottom: "10px"
  };

  const renderImgs = () => {
    let numOfImgs = 20;

    let imgs = [];

    for (let i = 0; i < numOfImgs; i++) {
      imgs.push(faker.image.imageUrl());
    }

    // const getRandomImg = () => faker.image.imageUrl();
    const getRandomImg = () => faker.image.avatar();

    return imgs.map((img, index) => {
      const imgURL = getRandomImg();
      return (
        <div style={imgStyle}>
          <LazyLoad
            key={index}
            height={200}
            offset={-110}
            // placeholder={<Image src={faker.image.imageUrl()} />}
            // placeholder={<Image src={getRandomImg()} />}
            // placeholder={<Image src={imgURL} />}
            // placeholder={<Image src="../../../assets/app_starter/images/placeholder.jpg" />}
            // placeholder="Loading Image"
          >
            <Image src={imgURL} />
          </LazyLoad>
        </div>
      );
    });
  };

  return (
    <MyContainer size="mainContainer">
      <MyContainer
        size="fitContent"
        // fixedWidth="100%"
        // fixedHeight="100px"
        {...props}
        addStyle={{ ...containerStyle }}
      >
        <br />
        {"Example - LazyLoad"}
        <br />
        <br />
        {renderImgs()}
        <br />
      </MyContainer>
      {children}
    </MyContainer>
  );
};

ExamplesLazyLoad.defaultProps = {
  // backgroundColor: "rgba(255, 255, 255, 1.0)",
  // addStyle: {}
};

export default ExamplesLazyLoad;
