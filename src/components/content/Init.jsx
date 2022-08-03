import React from "react";
import { Arrows } from "./Arrows";

export const Init = () => {
    return (
        <div className="Content">
            <h1>INICIANDO O GIT</h1>

            <div className="Instruction">
                <div className="Code">$ git init</div>
                <p>Inicia o git no diretório em que você estiver. Os arquivos dessa pasta passam a ser monitorados pelo git.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git init (nome de um diretório)</div>
                <p>Cria um diretório com o git iniciado. Este diretório já será monitorado pelo git.</p>
            </div>

            <span className="Back">
                <Arrows img="Back" link="/install" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/structure" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}