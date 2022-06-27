import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>ESTRUTURA DO GIT</h1>

            <h2>Assim que o git é inicializado, o repositório passa a ter três áreas:</h2>

            <div className="Instruction">
                <h3>Working Directory:</h3>
                <p>Onde ficam os arquivos que estão sendo criados ou editados.</p>
            </div>

            <div className="Instruction">
                <h3>Index (Staging area ou Cached):</h3>
                <p>Onde ficam os arquivos adicionados com o comando <code>$ git add (arquivo)</code>.</p>
            </div>

            <div className="Instruction">
                <h3>Diretório .git (repositório)</h3>
                <p>Onde ficam os arquivos após serem "commitados".</p>
                <p>Ou seja, arquivos após o comando <code>$ git commit -m '(comentário do commit)'</code>.</p>
            </div>
            <h2>Também é importante que você entenda dois conceitos do git:</h2>
            <div className="Instruction">
                <h3>HEAD</h3>
                <p>É o "ponteiro" do git.</p>
                <p>Ou seja, é onde você está atualmente editando o seu diretório.</p>
                <p>É movendo o HEAD que se torna possível "navegar" pelo histórico de commits.</p>
            </div>
            <div className="Instruction">
                <h3>Commit Key</h3>
                <p>É a chave do commit composta por seis dígitos.</p>
                <p>Com ela é possível mover o HEAD para um commit específico.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/init" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/add" />
            </span>
        </div>
    )
}