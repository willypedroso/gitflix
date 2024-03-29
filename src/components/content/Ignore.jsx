import React from "react";
import { Navbar } from "../layout/Navbar";
import { Arrows } from "./Arrows";

export const Ignore = () => {
    return (
        <div className="Content">
            <Navbar/>
            <h1>ADICIONANDO ARQUIVOS OCULTOS NO PROJETO</h1>

            <div className="Instruction">
                <div className="Code">$ touch .gitignore</div>
                <p>Cria um arquivo (por padrão oculto em sistemas Linux) no diretório onde poderão ser inseridos os nomes das subpastas que não devem ser monitoradas pelo git.</p>
                <p>Basta abrir o arquivo .gitignore com algum editor de texto e dentro dele inserir o nome seguido de barra "/" das subpastas que devem ser ignoradas/não monitoradas pelo git.</p>
                <p>Também é possível definir um formato de arquivo específico que deve ser ignorado pelo Git inserindo asterisco seguido de ponto e o formato que deve ser ignorado (*.formato).</p>
                <p>Ex:</p>
                <div className="Code">$ gedit .gitignore</div>
                <p>Abre o .gitignore no editor de texto (gedit).</p>
                <p>Inserindo:</p>
                <div className="Code" style={{background: '#464686', color: 'white'}}><p>oculto/</p><p>secreto/</p><p>*.txt</p></div>
                <p>O git passará a ignorar todos os arquivos que estiverem nas subpastas "oculto" e "secreto" e todos os arquivos no formato txt.</p>
                <p>É importante adicionar um item por linha.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/alts" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/github" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}