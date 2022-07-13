import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>ENVIANDO UM PROJETO PARA UM REPOSITÓRIO REMOTO GITHUB </h1>


            <div className="Instruction">
                <h2>Se o repositório remoto usado for o Github, seguir os seguintes passos:</h2>
                <p>Primeiramente acesse sua conta do <a href="https://github.com" rel="noopener noreferrer" target="_blank">github</a> pelo navegador e vá em:
                    <ul style={{margin: '25px'}}>
                        <li>Menu (normalmente no canto superior direito da tela, em sua foto de perfil do Github)</li>
                        <li>Settings (normalmente a penúltima opção de cima para baixo)</li>
                        <li>Developer Settings (normalmente a última opção de cima para baixo)</li>
                        <li>Personal access tokens</li>
                        <li>Generate new token</li>
                    </ul>
                </p>
                <p>Dê um nome para o seu token, marque todos as caixinhas de permissões e gere o token.</p>
                <p>
                <h3>COPIE O TOKEN GERADO E SALVE PARA NÃO ESQUECER!!!</h3>
                </p>
                <p><em>O token é gerado com uma data de validade, se atente a isso.</em></p>
                <p>Feito isso, ainda em sua conta do github crie um novo repositório.</p>
            </div>

            <div className="Instruction">
                <p>Criado o repositório remoto no Github, execute o seguinte comando em seu terminal do repositório local:</p>
                <div className="Code">$ git remote add origin https://[código_token]@github.com/[login_github]/[nome_do_repositório_criado]</div>
                <p>Ex:</p>
                <div className="Code">$ git remote add origin https://aaa_AAaa0aAAAOAA00AaAaAaaAaaaAAaAa0aAAaO@github.com/meulogin/repositorio-teste</div>
                <p>Esse comando relaciona seu reposítorio local ao seu repositório remoto.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git push -u origin master</div>
                <p>Envia seu branch master do repositório local para o origin a define o branch master como padrão.</p>
                <p><code>-u</code> é atalho para <code>--set-upstream</code> que define o branch como uso padrão do origin.</p>
            </div>
            
            <div className="Instruction">
                <p><code>origin</code> é o nome do seu repositório remoto no git.</p>
                <p><code>master</code> é o nome do seu branch principal.</p>
                <p>É muito comum hoje em dia que esse branch principal receba o nome de <code>main</code>.</p>
                <p>Cabe ao usuário definir qual nome irá usar para seu branch principal.</p>
                <p>Mas é importante ressaltar que o comando que envia seu repositório local para seu repositório remoto só funcionará se você digitar o nome correto do seu branch.</p>
                <p>Para evitar erros, é válido dar o comando <code>$ git branch</code> para verificar qual é o nome do seu branch principal.</p>
                <p>Se caso seu branch tiver o nome <code>master</code> (por exemplo), mas você prefere o usar o nome <code>main</code>, basta dar o comando:</p>
                <div className="Code">$ git branch -m master main</div>
                <p>Renomeia seu branch "master" para "main".</p>
            </div>
            <div className="Instruction">
                <div className="Code">$ git push</div>
                <p>Envia seu branch definido como padrão do repositório local para o origin do repositório remoto.</p>
                <p>Obs: Se atentar que normalmente o branch padrão de envio para o origin é o branch master (ou main).</p>
                <p>Caso você tenha criado um novo branch e queira enviar para o repositório remoto, deverá especificar o branch no comando.</p>
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
            <h1>OUTRAS PLATAFORMAS DE HOSPEDAGEM</h1>
            <div className="Instruction">
                <p>Os comandos para enviar os repositórios locais para outras plataformas de hospedagem de repositórios remotos que não sejam o Github (<a href="https://gitlab.com/" rel="noopener noreferrer" target="_blank">Gitlab</a> ou <a href="https://bitbucket.org/" rel="noopener noreferrer" target="_blank">Bitbucket</a>, por exemplo) costumam ser basicamente os mesmos de modo geral. Mas é importante entrar na própria plataforma de hospedagem para se informar, pois os procedimentos de segurança (geração de token, por exemplo) costumam mudar.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/ignore" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/clone" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}