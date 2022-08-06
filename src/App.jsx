import React from "react";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { BrowserRouter } from 'react-router-dom'
import { Footer } from "./components/layout/Footer";

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Main/>
            </BrowserRouter>
            <Footer />
        </div>
    )
}