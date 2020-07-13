import React, {Component} from "react";
import About from "components/materialUI/profile/About/index";
import Biography from "components/materialUI/profile/Biography/index";
import Events from "components/materialUI/profile/Events/index";
import Contact from "components/materialUI/profile/Contact/index";
import Friends from "components/materialUI/profile/Friends/index";
import Photos from "components/materialUI/profile/Photos/index";
import ProfileHeader from "components/materialUI/profile/ProfileHeader/index";
import Auxiliary from "../../../../../../util/Auxiliary";
import {friendList} from './data'
import {photoList} from "../Wall/data";

class Profile extends Component {

  render() {
    return (
      <Auxiliary>
        <ProfileHeader/>
        <div className="jr-profile-content">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-7 col-12">
              <About/>
              <Biography/>
              <Events/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-12">
              <Contact/>
              <div className="row">
                <div className="col-12">
                  <Friends friendList={friendList}/>
                </div>
                <div className="col-12">
                  <Photos photoList={photoList}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default Profile;


