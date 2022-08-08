import React from "react";
import { Navbar } from "../layout/Navbar";
import { Arrows } from "./Arrows";

export const Tags = () => {
    return (
        <div className="Content">
            <Navbar/>
            <h1>CRIANDO TAGS (OU ETIQUETAS)</h1>

            <div className="Instruction">
                <p>Tags demarcam commits importantes para o projeto (normalmente definindo a versão de um projeto).</p>
                <div className="Code">$ git tag -a (nome_da_tag) -m ("comentário sobre a tag")</div>
                <p>Cria uma tag no commit atual.</p>
                <p>Ex:</p>
                <div className="Code">$ git tag -a v1.0 -m "version 1.0 finished"</div>
                <p>Cria uma tag chamada "v1.0" com o comentário "version 1.0 finished".</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git tag -a (nome_da_tag) (checksum_do_commit) -m ("comentário sobre a tag")</div>
                <p>Cria uma tag em um commit específico selecionado.</p>
                <p>Obs: Para descobrir o checksum de um commit basta dar o comando:</p>
                <div className="Code">$ git log --oneline</div>
                <p>Os checksums serão os 7 algarismos que aparecem no início de cada linha de cada commit.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git tag</div>
                <p>Exibe todas as tags já criadas no projeto.</p>
                <div className="Code">$ git show (nome_da_tag)</div>
                <p>Exibe as informações detalhadas da etiqueta especificada.</p>
                <div className="Code">$ git tag -d (nomedatag)</div>
                <p>Exclui a tag selecionada.</p>
            </div>

            <div className="Instruction">
                <p>Por padrão, o comando <code>$ git push</code> não envia as tags do repositório local para o repositório remoto.</p>
                <p>De modo que se você as quiser em seu repositório remoto, será necessário enviá-las posteriormente com o seguinte comando:</p>
                
                <div className="Code">$ git push origin (nome_da_tag)</div>
                <p>Envia a tag para o repositório remoto (Github, Gitlab, etc).</p>

                <div className="Code">$ git push --delete origin (nome_da_tag)</div>
                <p>Faz a exclusão da tag do repositório remoto (Github, Gitlab, etc).</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/fork"/>
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/"/>
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}