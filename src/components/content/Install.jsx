import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content FirstContent">
            <h1>INSTALAÇÃO E CONFIGURAÇÃO</h1>

            <div className="Instruction">
                <div className="Code">$ sudo apt git install</div>
                <p>Instala o git na máquina.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git --version</div>
                <p>Vê a versão atual do git instalada na máquina.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git config --global user.name (seu nome)</div>
                <p>Configura o nome de usuário.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git config --global user.email (seu@email.com)</div>
                <p>Configura o email de usuário.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git config --global core.editor (editor de código)</div>
                <p>Configura o editor de código padrão (Ex: nano, vim, vs code, etc...).</p>
            </div>


            <div className="Instruction" style={{padding:"10px"}}>
                <p>Retirando o <code>--global</code> você configura as informações apenas para o diretório específico em que você estiver.</p>
            </div>

            <span className="Back">
                <Arrows img="Back" link="/" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/init" />
            </span>
        </div>
    )
}