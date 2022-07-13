import React from "react";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { BrowserRouter } from 'react-router-dom'
import './App.css'

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Main/>
            </BrowserRouter>
            <footer>
                <p><strong>v1.0</strong></p>
                <p>Develop by <a href="https://github.com/willypedroso" rel="noopener noreferrer" target="_blank">Will Pedroso</a></p>
                <p>Based on the original repository by <a href="https://dev.to/danielle8farias/series/5484" rel="noopener noreferrer" target="_blank">danielle8farias</a></p>
            </footer>
</div>
    )
}