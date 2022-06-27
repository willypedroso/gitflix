import React from "react";
import {Routes, Route} from 'react-router-dom'
import Menu from "../content/Menu";
import Install from "../content/Install";
import Init from "../content/Init";
import Structure from "../content/Structure";
import Add from "../content/Add";
import Commit from "../content/Commit";
import Ignore from "../content/Ignore";
import Github from "../content/Github";
import Clone from "../content/Clone";
import Fork from "../content/Fork";
import Alts from "../content/Alts";
import './Main.css'

export default props => {
    return (
        <div id="Main">
            <Routes>
                <Route path="/" exact element={<Menu />} />
                <Route path="/install" element={<Install />} />
                <Route path="/init" element={<Init />} />
                <Route path="/structure" element={<Structure />} />
                <Route path="/add" element={<Add />} />
                <Route path="/commit" element={<Commit />} />
                <Route path="/ignore" element={<Ignore />} />
                <Route path="/github" element={<Github />} />
                <Route path="/clone" element={<Clone />} />
                <Route path="/fork" element={<Fork />} />
                <Route path="/alts" element={<Alts />} />
            </Routes>
        </div>
    )
}