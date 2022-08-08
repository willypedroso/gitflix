import React from "react";
import { Navbar } from "../layout/Navbar";
import { Arrows } from "./Arrows";

export const Clone = () => {
    return (
        <div className="Content">
            <Navbar/>
            <h1>COPIANDO (CLONANDO) ALGUM REPOSITÓRIO EXISTENTE</h1>

            <div className="Instruction">
                <p>Primeiramente crie um diretório onde pretende clonar o projeto.</p>
                <p>Vá até o site do diretório e copie a url.</p>
                <p>Com a url do projeto que deseja clonar copiada, digite o comando:</p>
                <div className="Code">$ git clone (url_do_repositório_remoto_que_deseja_clonar)</div>
                <p>Ex:</p>
                <div className="Code">$ git clone https://github.com/logindev/repositorio-para-clonar</div>
                <p>Copia o repositório para o diretório atual.</p>
            </div>
            <div className="Instruction">
                    <div className="Code">$ git fetch origin (nome_do_branch_que_deseja_copiar:nome_que_o_branch_vai receber)</div>
                    <p>Copia um branch específico do repositório clonado.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/github" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/fork" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}