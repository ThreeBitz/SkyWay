import React from "react";
import "./style.css";
import { SignInBtn } from "../../components";
import { Header, Body } from "../../Dashboard"

export default function Home(){
    return (
        <div className="home">
            <Header />
            <Body />
            <Feed />
        </div>
    );
}