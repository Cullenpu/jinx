import React from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

import PageContainer from "../Components/PageContainer";
import smallLogo from "../resources/logo/jinx2.svg";


const Feed = () => {

    return (
        <PageContainer>
            <div style={{"padding-left": 50, "padding-top": 50}}>
                <h1>Latest Activity</h1>
            </div>
            <div style={{padding: 50, float: "left", width: 1000}}>
                <div style={{"padding-bottom": 50}}>
                    <img src={smallLogo} style={{width: 100, float: "left"}}></img>
                    <p>2 days ago</p>
                    <h1>Fred got hired!</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div style={{"padding-bottom": 50}}>
                    <img src={smallLogo} style={{width: 100, float: "left"}}></img>
                    <p>3 days ago</p>
                    <h1>Google Responded!</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div style={{"padding-bottom": 50}}>
                    <img src={smallLogo} style={{width: 100, float: "left"}}></img>
                    <p>4 days ago</p>
                    <h1>New comments on resume!</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div style={{"padding-bottom": 50}}>
                    <img src={smallLogo} style={{width: 100, float: "left"}}></img>
                    <p>5 days ago</p>
                    <h1>Annie wants to connect!</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div style={{outline: "3px solid black", float: "left", height: 300, width: 300}}>
                <div style={{outline: "3px solid black"}}>
                    <h3 style={{padding: 10}}>Filter</h3>
                </div>
                <div style={{padding: 10, border: "none"}}>
                    <button type="button" style={{float: "left"}}>✓</button>
                    <h3>Network</h3>
                </div>
                <div style={{padding: 10, border: "none"}}>
                    <button type="button" style={{float: "left"}}>✓</button>
                    <h3>Applications</h3>
                </div>
                <div style={{padding: 10, border: "none"}}>
                    <button type="button" style={{float: "left"}}>✓</button>
                    <h3>Introductions</h3>
                </div>
                <div style={{padding: 10, border: "none"}}>
                    <button type="button" style={{float: "left"}}>✓</button>
                    <h3>Lorem ipsum dolor</h3>
                </div>
            </div>
        </PageContainer>
    )
}

export default Feed;