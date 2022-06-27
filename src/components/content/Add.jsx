import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>ADICIONANDO E REMOVENDO ARQUIVOS AO GIT</h1>

            <div className="Instruction">
                <div className="Code">$ git add (nome do arquivo)</div>
                <p>Insere o arquivo no index (staging area) do git.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git add .</div>
                <p>Insere todos os arquivos e subdiretórios atuais no index do git.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git checkout (nome do arquivo)</div>
                <p>ou</p>
                <div className="Code">$ git restore (nome do arquivo)</div>
                <p>Desfaz as alterações do arquivo informado no Working Directory. O arquivo será restaurado ao último estágio adicionado ao index.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git checkout .</div>
                <p>ou</p>
                <div className="Code">$ git restore .</div>
                <p>Desfaz todas as alterações do Working Directory e restaura todos os arquivos ao último estágio adicionado ao index.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git reset (nome do arquivo)</div>
                <p>ou</p>
                <div className="Code">$ git restore --staged (nome do arquivo)</div>
                <p>Retira do index o arquivo informado (ou alterações efetuadas no arquivo) mantendo o mesmo no Working Directory.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git reset .</div>
                <p>ou</p>
                <div className="Code">$ git restore --staged .</div>
                <p>Retira todos os arquivos (ou alterações efetuadas nos arquivos) que estão no index, mantendo-os no Working Directory.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git status</div>
                <p>Verifica o estado atual do diretório.</p> 
                <p>Exibe quais arquivos ou modificações estão pendentes para serem adicionados ao Index ou "commitados".</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/structure" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/commit" />
            </span>
        </div>
    )
}