import React from "react";
import { Navbar } from "../layout/Navbar";
import { Arrows } from "./Arrows";

export const Merge = () => {
    return (
        <div className="Content">
            <Navbar/>
            <h1>UNINDO BRANCHES</h1>

            <div className="Instruction">
                <p>Para fazer o merge de algum branch com o branch principal (master/main), você deve primeiro ir (apontar o HEAD) para o branch principal e depois dar o comando para fazer o merge apontando qual branch será unificado.</p>
                <div className="Code">$ git checkout master</div>
                <p>Leva o usuário (aponta o HEAD) para o branch master (main).</p>
                <div className="Code">$ git merge (nome_do_branch)</div>
                <p>Unifica o branch apontado junto ao branch atual.</p>
            </div>

            <div className="Instruction">
                <p>Se após o comando de merge o git der mensagem de conflito, será necessário verificar os códigos, desfazer os conflitos e dar commit para que o merge seja executado.</p>
                <p>ou</p>
                <div className="Code">$ git merge --abort</div>
                <p>Comando para cancelar o merge.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git log --merges</div>
                <p>Exibe todos os merges do projeto.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/branch" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/nav" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}