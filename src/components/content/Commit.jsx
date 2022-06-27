import React from "react";
import Arrows from "./Arrows";

export default () => {
    return (
        <div className="Content">
            <h1>GERENCIANDO COMMIT DOS ARQUIVOS</h1>

            <div className="Instruction">
                <div className="Code">$ git commit -m '(mensagem do commit)'</div>
                <p>Faz o commit dos arquivos que estão adicionados no index (adicionados com o comando <code>$ git add</code>) adicionando a mensagem do commit (texto que estiver entre aspas '').</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git commit --amend -m '(nova mensagem do commit)'</div>
                <p>ou</p>
                <div className="Code">$ git commit -m '(nova mensagem do commit)' --amend</div>
                <p>Substitui a mensagem do último commit e adiciona qualquer arquivo/alteração de arquivo que estiver no index.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git commit --amend --no-edit</div>
                <p>Também adidiona ao último commit qualquer alteração que tenha sido adicionada ao index após o commit, mas mantendo a mesma mensagem.</p>
                <p>NÃO USAR ESSE COMANDO COM COMMITS QUE JÁ FORAM ENVIADOS PARA O REPOSITÓRIO REMOTO (GITHUB)!</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git commit -am '(mensagem do commit)'</div>
                <p>Comando de atalho para criar commit com os arquivos modificados que ainda não tinhamm sido adicionados no index.</p>
                <p>Ou seja, cria um commit com todas as alterações atuais no working directory.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git reset --soft (commit key)</div>
                <p>Move o HEAD para o commit apontado.</p>
                <p>Todas as alterações realizadas nos commits posteriores a esse passam para o index. Assim é possível refazer o commit.</p>
                <p>Normalmente é usado quando dois ou mais pequenos commits podem ser unificados em um só commit.</p>
                <p>O comando <code>--soft</code> não remove nenhum arquivo ou alteração de arquivo do index ou do working directory.</p>
            </div>


            <div className="Instruction">
                <div className="Code">$ git reset --mixed (commit key)</div>
                <p>Move o HEAD para o commit apontado.</p>
                <p>Todas as alterações realizadas nos commits posteriores ao apontado passam para o working directory.</p>
                <p>Qualquer arquivo ou alteração que estiver no index passa também para o working directory.</p>
                <p><code>--mixed</code> é o comando padrão do <code>$git reset</code> (será utilizado se não especificado algum outro).</p>
            </div>

            <div className="Instruction">
                <div className="Code">$ git reset --hard (commit_key)</div>
                <p>Move o HEAD para o commit apontado.</p>
                <p>Apaga todos os arquivos e alterações de arquivos efetuados nos commits posteriores ao commit key indicado.</p>
                <p>Comando <code>--hard</code> apaga tudo o que estiver no index e no working directory.</p>
                <p><strong>USAR ESTE COMANDO COM CUIDADO!</strong> Após apagadas, as alterações e arquivos não poderão ser restaurados.</p>
            </div>

            <div className="Instruction">
                    <p><code>$ git reset --soft HEAD~(n)</code></p>
                    <p><code>$ git reset --mixed HEAD~(n)</code></p>
                    <p><code>$ git reset --hard HEAD~(n)</code></p>
                <p>Volta o número de commits indicados.</p>
                <p>Ex:<code>$git reset --mixed HEAD~2</code></p>
                <p>Volta dois commits e envia todas os arquivos e alterações posteriores a este commit para o index.</p>
                <p>ou</p>
                <p>Ex:<code>$git reset --hard HEAD~4</code></p>
                <p>Volta quatro commits e apaga todas os arquivos e alterações efetuadas após o mesmo.</p>
            </div>
            <div className="Instruction">
                    <p><code>--soft</code> passa todas as alterações realizadas após o commit indicado para o index.</p>
                    <p><code>--mixed</code> passa todas as alterações realizadas após o commit indicado para o working directory.</p>
                    <p><code>--hard</code> descarta todas as alterações realizadas após o commit indicado.</p>
            </div>
            <span className="Back">
                <Arrows img="Back" link="/add" />
            </span>
            <span className="Foward">
                <Arrows img="Foward" link="/alts" />
            </span>
        </div>
    )
}