import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>NAVEGANDO ENTRE SNAPSHOTS DOS COMMITS</h1>

            <div className="Instruction">
                <div className="Code">$ git checkout (nome_do_branch)</div>
                <p>Muda para o branch indicado, ou seja, move o HEAD para o último commit deste branch.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git checkout (checksum_do_commit)</div>
                <p>Move o HEAD para o commit especificado pelo checksum.</p>

                <p><em>Lembrando que o checksum do commit são os 7 algarismos exibidos à esquerda de cada commit ao dar o comando </em><code>$ git log --oneline</code>.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git checkout HEAD~(n)</div>
                <p>Volta o ponteiro HEAD para a quantidade de commits apontados em (n).</p>
                <p>Ex:</p>
                <div className="Code">$ git checkout HEAD~1</div>
                <p>Muda o ponteiro HEAD para um commit anterior ao atual.</p>
                <p>Esse comando cria um branch temporário.</p>
                <p>Caso seja realizada alguma alteração neste branch temporário, será necessário:</p>
                <p>01 - Fazer um commit com as alterações</p>
                <p>02 - Criar um novo branch</p>
                <p>É possível fazer isso com os seguintes comandos:</p>
                <div className="Code">$ git commit -m 'comentário do commit'</div>
                <p>Cria um novo commit.</p>
                <div className="Code">$ git branch (nome_do_novo_branch) (checksum_do_commit_criado)</div>
                <p>Cria um novo branch e desta forma as modificação não serão perdidas.</p>
                <p>Feito isso, basta dar o comando:</p>
                <div className="Code">$ git branch (nome_do_branch_criado)</div>
                <p>E isto direcionará o HEAD para este novo branch no commit recém criado.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git checkout master</div>
                <p>Volta o HEAD para o branch principal.</p>
            </div>


            <div className="Instruction">
                <h4>Obs:</h4>
                <p>É recomendável usar o comando <code>$ git checkout</code> apenas quando o working directory estiver limpo. Isto evita possíveis conflitos.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git reflog</div>
                <p>Mostra todo o histórico de alterações do seu projeto com as suas keys (90 dias valida padrão).</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git reset HEAD@(key)</div>
                <p>Move o HEAD para a key selecionada</p>
                <p>Assim é possível voltar para qualquer momento do projeto</p>
            </div>

            <div className="Instruction">
                <h4>Obs:</h4>
                <p>Recomenda-se usar os comandos <code>$ git reset</code> apenas quando realmente necessário.</p>
                <p>Também recomenda-se evitar usar os comandos <code>$ git reset</code> em partes do projeto que já estejam no repositório remoto.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/merge" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/" />
            </span>
        </div>
    )
}