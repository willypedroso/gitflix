import React from "react";
import { Navbar } from "../layout/Navbar";
import { Arrows } from "./Arrows";

export const Fork = () => {
    return (
        <div className="Content">
            <Navbar/>
            <h1>FAZENDO FORK E CONTRIBUINDO COM PROJETOS OPEN SOURCE</h1>

            <div className="Instruction">

                <p>Primeiramente vá até o repositório que deseja realizar o fork utilizando o seu navegador.</p>
                <p>Procure pelo botão "Fork" (ou o seu equivalente) na plataforma em que o repositório está hospedado.</p>
                <p>Isso criará um novo repositório remoto em sua conta da plataforma (github, gitlab, etc).</p>
                <p>Esse repositório será a copia do repositório atual que foi dado o fork.</p>
            </div>
            <div className="Instruction">
                <p>Feito isso, é preciso clonar o projeto para os seus repositórios locais.</p>
                <p>Crie e entre pelo terminal no diretório que deseja clonar o projeto. Feito isso, digite o comando:</p>

                <div className="Code">$ git clone (url_do_repositório_remoto)</div>

                <p>Clona o projeto para o diretório atual.</p>
            </div>
            <div className="Instruction">
                <p>Recomenda-se (boas práticas) criar um novo branch no projeto para manter as suas alterações separadas.</p>

                <div className="Code">$ git checkout -b (nome_do_novo_branch)</div>

                <p>Cria um novo branch do projeto e já aponta o HEAD para o mesmo.</p>
            </div>
            <div className="Instruction">
                <p>Após terminadas as alterações no seu branch é necessário adicionar a ligação com o repositório remoto original.</p>

                <div className="Code">$ git remote add upstream (url_do_repositório_remoto_original)</div>

                <p>Adiciona a ligação entre a sua máquina e o repositório original do projeto.</p>

                <div className="Code">$ git remote -v</div>

                <p>Retorna os repositórios remotos aos quais o repositório local atual tem ligação.</p>
            </div>
            <div className="Instruction">
                <p>Antes de dar o "push" de suas alterações é recomendável ir no repositório remoto original, criar ou procurar por uma issue já existente para descrever como pretende colaborar com o projeto.</p>

                <p>Feito isso, dê o push do seu repositório local para o seu fork remoto.</p>

                <div className="Code">$ git push origin (nome_do_branch)</div>

                <p>Empurra para o seu repositório remoto o branch com as alterações realizadas.</p>

                <p>Feito isso aparecerá em sua conta remota a opção "Compare & Pull Request"</p>
                <p>Acione esta opção para solicitar ao dono do projeto original o merge do seu branch.</p>
            </div>
            <div className="Instruction">
                <div className="Code">$ git pull upstream master</div>

                <p>Baixa para o seu repositório local quaisquer alterações realizadas no repositório remoto original.</p>

                <div className="Code">$ git fetch</div>

                <p>Captura todos os branchs e tags novos no projeto remoto sem fazer merge.</p>

                <div className="Code">$ git fetch origin (nome_do_branch)</div>

                <p>Puxa as mudanças para um branch específico apontado.</p>

                <p><em>O ideal é criar um branch novo para isso.</em></p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/clone" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/tags" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}