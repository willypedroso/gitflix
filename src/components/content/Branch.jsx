import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>GERENCIANDO BRANCHES</h1>

            <div className="Instruction">
                <div className="Code">$ git branch (nome-do-branch)</div>
                <p>Cria um novo branch.</p>
                
                <div className="Code">$ git checkout (nome-do-branch)</div>
                <p>Muda (aponta o HEAD) para o branch apontado se já existente.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git checkout -b (nome-do-branch)</div>
                <p>Cria um novo branch e muda (aponta o HEAD) para o mesmo.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git push origin (nome-do-branch)</div>
                <p>Envia o branch para o repositório remoto.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git branch -a</div>
                <p>Lista todos os branches (incluindo os remotos).</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git branch</div>
                <p>Exibe o branch atual em que está o HEAD. O branch que está editando no momento.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git branch -m (novo-nome-para-branch)</div>
                <p>Dá um novo nome para o branch atual.</p>
                <div className="Code">$ git branch -m (nome-do-branch)(novo-nome-do-branch)</div>
                <p>Dá um novo nome para o branch informado. Podendo ser qualquer branch do projeto.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git branch -d (nome-do-branch)</div>
                <p>Deleta o branch informado.</p>
                <div className="Code">$ git push origin --delete (nome-do-branch)</div>
                <p>Deleta o branch do repositório remoto.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/tags" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/merge" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}