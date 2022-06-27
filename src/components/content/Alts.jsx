import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>VERIFICANDO ALTERAÇÕES NO REPOSITÓRIO</h1>

            <div className="Instruction">
                <div className="Code">$ git diff</div>
                <p>Exibe tudo o que foi alterado nos arquivos monitorados pelo git que ainda não foram adicionados ao index em comparação com os que foram adicionados.</p>
                
                <div className="Code">$ git diff (nome_arquivo)</div>
                <p>Aponta um arquivo específico monitorado pelo git para exibir as alterações que ainda não foram adicionadas ao index em comparação com as que foram adicionadas.</p>

                <div className="Code">$ git diff HEAD</div>
                <p>Exibe tudo o que foi alterado nos arquivos monitorados pelo git que estão no index e no working directory que ainda não foram commitados em comparção com o último commit.</p>

                <div className="Code">$ git diff --staged</div>
                <p>Exibe tudo o que foi alterado nos arquivos monitorados pelo git que estão no index e que ainda não foram commitados em comparção com o último commit.</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git log -p</div>
                <p>Exibe todas as alterações realizadas no repositório que já receberam commit.</p>

                <div className="Code">$ git log -p -(número)</div>
                <p>Define o número de commits que deseja ver as alterações contando a partir do último.</p>
                
                <p>Ex:</p>
                <div className="Code">$ git log -p -3</div>
                <p>Exibirá todas as alterações dos três últimos commits.</p>
                <p>[Obs: usar as setas para navegar pela exibição dos arquivos modificados e pressionar "Q" para sair].</p>
            </div>

            <h1>Gitk</h1>
            
            <div className="Instruction">
                <p>Gitk é um software que permite vizualizar as alterações realizadas no diretório de forma gráfica.</p>
                <div className="Code">$ sudo apt install gitk</div>
                <p>Instala o software Gitk na máquina.</p>
                <div className="Code">$ gitk</div>
                <p>Abre o software Gitk que permite ver todas as alterações em uma janela gráfica.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/commits" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/ignore" />
            </span>
        </div>
    )
}