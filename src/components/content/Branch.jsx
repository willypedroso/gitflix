import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>CRIANDO UM BRANCH</h1>

            <div className="Instruction">
                <div className="Code">$ git branch (nome_do_branch)</div>
                <p>Cria um novo branch.</p>
                
                <div className="Code">$ git checkout (nome_do_branch)</div>
                <p>Muda (aponta o HEAD) para o branch apontado se já existente.</p>
            </div>




            <div className="Instruction">
                <div className="Code">$ git checkout -b (nome_do_branch)</div>
                <p>Cria um novo branch e muda (aponta o HEAD) para o mesmo.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git branch -a</div>
                <code>Lista todas os branches.</code>
            </div>


            <div className="Instruction">
                <div className="Code">$ git branch</div>
                <p>Exibe o branch atual em que está o HEAD. O branch que está editando no momento.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git branch -d (nome_do_branch)</div>
                <p>Deleta o branch informado.</p>
                <div className="Code">$ git push origin --delete (nome_do_branch)</div>
                <p>Deleta o branch do repositório remoto (github).</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/tags" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/merge" />
            </span>
        </div>
    )
}