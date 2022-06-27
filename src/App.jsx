import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { BrowserRouter } from 'react-router-dom'
import './App.css'

export default props => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Main/>
            </BrowserRouter>
            <footer><p>Develop by <a href="https://github.com/willypedroso" target="_blank">Will Pedroso</a></p></footer>
        </div>
    )
}