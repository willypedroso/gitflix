import React from "react";
import { useState } from "react";
import { Navbar } from "../layout/Navbar";
import { Arrows } from "./Arrows";

export const Install = () => {
    const [so, setSo] = useState('windows');
    return (
        <div className="Content">
            <Navbar/>
            <h1>INSTALAÇÃO E CONFIGURAÇÃO</h1>

            <div className="Instruction">
                <div id="soOption">
                    <label htmlFor="so">Selecione seu sistema operacional: </label>
                    <select id="so" onChange={e => setSo(e.target.value)}>
                        <option value="windows">Windows</option>
                        <option value="linuxDebian">Linux - Ubuntu/Debian</option>
                        <option value="linuxFedora">Linux - Fedora/CentOS</option>
                        <option value="mac">MacOS</option>
                    </select>
                </div>
                {so == 'windows' ? (
                    <div>
                        <p>Acesse o <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">link</a> para fazer o download do setup para Windows e siga os passos para instalar o git em sua máquina.</p>
                        <p>Feito isso, abra o seu terminal PowerShell (ou git bash), pois todas as instruções do Git devem ser realizadas em linhas de comando.</p>
                        <p>Obs: Os comandos do git não serão reconhecidos pelo cmd do Windows.</p>
                    </div>
                    ) : false}
                {so == 'linuxDebian' ? (
                    <div>
                        <p>Abra o terminal e digite o seguinte comando:</p>
                        <div className="Code">$ sudo apt install git-all</div>
                        <p>Instala o git na máquina.</p>
                    </div>
                    ) : false}
                {so == 'linuxFedora' ? (
                    <div>
                        <p>Abra o terminal e digite o seguinte comando:</p>
                        <div className="Code">$ sudo dnf install git-all</div>
                        <p>Instala o git na máquina.</p>
                    </div>
                    ) : false}
                {so == 'mac' ? (
                    <div>
                        <p>Abra o terminal e digite:</p>
                        <div className="Code">$ git --version</div>
                        <p>Será exibida a versão do Git instalado em sua máquina ou abrirá o instalador caso já não esteja instalado.</p>
                    </div>
                    ) : false}
            </div>


            {so == 'mac' ? false : <div className="Instruction">
                <div className="Code">$ git --version</div>
                <p>Vê a versão atual do git instalada na máquina.</p>
            </div>}


            <div className="Instruction">
                <div className="Code">$ git config --global user.name (seu nome)</div>
                <p>Configura o nome de usuário.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git config --global user.email (seu@email.com)</div>
                <p>Configura o email de usuário.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git config --global core.editor (editor de código)</div>
                <p>Configura o editor de código padrão (Ex: nano, vim, vs code, etc...).</p>
            </div>


            <div className="Instruction" style={{padding:"10px"}}>
                <p>Retirando o <code>--global</code> você configura as informações apenas para o diretório específico em que você estiver.</p>
            </div>

            <span className="Back">
                <Arrows img="Back" link="/" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/init" />
            </span>
            <p className="footcontent">Para informações confiáveis e adicionais, sempre consultar a <a href="https://git-scm.com/doc" rel="noopener noreferrer" target="_blank">documentação oficial do Git</a>.</p>
        </div>
    )
}