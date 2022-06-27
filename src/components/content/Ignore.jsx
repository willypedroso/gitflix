import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>ADICIONANDO ARQUIVOS OCULTOS NO PROJETO</h1>

            <div className="Instruction">
                <div className="Code">$ touch .gitignore</div>
                <p>Cria um arquivo (por padrão oculto em sistemas Linux) no diretorio onde poderão ser inseridos os nomes das subpastas que não devem ser monitoradas pelo git.</p>
                <p>Basta abrir o arquivo .gitignore com algum editor de texto e dentro dele inserir o nome seguido de barra "/" das subpastas que devem ser ignoradas/não monitoradas pelo git.</p>
                <p>Ex:</p>
                <div className="Code">$ gedit .gitignore</div>
                <p>Abre o .gitignore no editor de texto (gedit).</p>
                <p>Inserindo:</p>
                <div className="Code" style={{background: '#464686', color: 'white'}}><p>oculto/</p><p>secreto/</p></div>
                <p>O git passará a ignorar todos os arquivos que estiverem nas subpastas "oculto" e "secreto".</p>
                <p>É importante adicionar uma subpasta por linha e não esquecer de adcionar as barras "/" junto aos nomes.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/commit" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/github" />
            </span>
        </div>
    )
}