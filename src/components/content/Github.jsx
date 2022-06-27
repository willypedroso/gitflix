import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>ENVIANDO UM PROJETO PARA UM REPOSITÓRIO REMOTO (GITHUB)</h1>


            <div className="Instruction">
                <h2>Se o repositório remoto usado for o Github, seguir os seguintes passos:</h2>
                <p>Primeiramente acesse a sua conta do github pelo browser e crie um novo repositório.</p>
                <p>Feito isso, acesse em sua conta do github: Menu &gt; Settings &gt; Developer Settings &gt; Personal access tokens &gt; Generate new token.</p>
                <p>Dê um nome para o seu token, marque todos as caixinhas de permissões e gere o token.</p>
                <p>
                <h3>COPIE O TOKEN GERADO E SALVE PARA NÃO ESQUECER!!!</h3>
                </p>
            </div>

            <div className="Instruction">
                <p>Feito isso, execute o seguinte comando:</p>
                <div className="Code">$ git remote add origin https://[código_token]@github.com/[login_github]/[nome_do_repositório_criado]</div>
                <p>Ex:</p>
                <div className="Code">$ git remote add origin https://aaa_AAaa0aAAAOAA00AaAaAaaAaaaAAaAa0aAAaO@github.com/meulogin/repositorio-teste</div>
                <p>Esse comando relaciona seu reposítorio local ao seu repositório remoto.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git push -u origin master</div>
                <p>Envia seu branch master do repositório local para a origin do repositório remoto.</p>
                <p><code>-u</code> é atalho para <code>--set-upstream</code> que define o branch como uso padrão do origin.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git push</div>
                <p>Envia seu branch definido como padrão do repositório local para o origin do repositório remoto.</p>
            </div>
            <h1>PUXANDO COMMITS REMOTOS</h1>

            <div className="Instruction">
                <div className="Code">$ git pull</div>
                <p>Puxa atualizações pendentes do repositório remoto para o repositório local.</p>
                <p>ou</p>
                <div className="Code">$ git fetch</div>
                <div className="Code">$ git merge origin/master</div>
                <p>Faz o mesmo que <code>$ git pull</code>, mas em dois comandos.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/ignore" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/clone" />
            </span>
        </div>
    )
}