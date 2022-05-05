import React, { Component } from "react";
import mainpage from "./mainpage.css"
import Post from "../newpost/Post";
import Feeds from "../feeds/Feeds";

class Mainpage extends Component {
    constructor(){
        super();
        this.state = {
            postRequest: ''
        }
    }
    render() {
        return (
            <div className="feed">
                <Post />
                <Feeds />
            </div>
        )
    }
}

export default Mainpage;