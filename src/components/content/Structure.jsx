import React from "react";
import { Arrows } from "./Arrows";

export const Structure = () => {
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
                <h3>Checksum de commits</h3>
                <p>São os identificadores dos commits.</p>
                <p>É composto por 40 algarismos e normalmente abreviado pelos seus primeiros 7.</p>
                <p>Com eles é possível apontar para um commit específico na hora de executar alguns comandos (mover o HEAD e criar tags, por exemplo).</p>
                <p>Com o comando <code>$ git log --oneline</code> é possível visualizar o checksum de todos os commits do repositório de forma abreviada.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/init"/>
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/add"/>
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}