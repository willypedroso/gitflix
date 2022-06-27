import React from "react";
import Cards from "../content/Cards";
import './Menu.css'

export default () => {
    return (
        <div id='Menu'>
            <Cards link="/install" content="Instalação e configuração"/>
            <Cards link="/init" content="Inicializando"/>
            <Cards link="/structure" content="Estrutura do git"/>
            <Cards link="/add" content="Adicionar arquivos ao git"/>
            <Cards link="/commit" content="Commit de arquivos"/>
            <Cards link="/ignore" content="Git ignore"/>
            <Cards link="/github" content="Repositório Remoto (Github)"/>
            <Cards link="/clone" content="Clonando projetos"/>
            <Cards link="/fork" content="Fork e colaboração open source"/>
            <Cards link="/alts" content="Visualizando alterações"/>
        </div>
    )
}