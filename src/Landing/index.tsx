import React from 'react';

// Components
import Quote from '../components/Quote';
import Block from '../components/Block';

// Assets
import creativeImg from '../assets/creative.svg';
import chatImg from '../assets/chat.svg';

import './styles.css';

const Landing: React.FC = () => {
    return (
        <>
            <div className="landing-container">
                <div className="landing-content">
                    <h1 className="landing-title">Criatividade</h1>

                    <Quote>
                        “É o processo de mudança, de desenvolvimento, de evolução na organização da vida subjetiva.” - Ghiselin.
                    </Quote>

                    <section className="first-content">
                        <img
                            src={creativeImg}
                            alt="Seja criativo!"
                        />

                        <p>
                            Nada mais é do que a capacidade de inovar, de “pensar fora da caixa”. Criar soluções diferentes para diversos problemas, soluções criativas. Ser criativo é de extrema importância, pois irá lhe fazer se destacar pela vontade de estar inovando, de estar sempre tentando resolver o mesmo problema de maneiras diferentes, ou então estar sempre dando novas ideias para a empresa em que trabalha, ou ao grupo que participa.
                        </p>
                    </section>

                    <Quote>
                        “A criatividade é uma sublime da condição humana. É, entretanto,
                        na capacidade criativa que existe a chave
                        da capacidade de evolução da humanidade.” - Sanchez
                    </Quote>

                    <section className="second-content">
                        <p>
                            Também é estar disposto(a) a sempre evoluir. Não só resolver problemas de maneiras diferentes, como também resolver problemas de maneiras mais efetivas, melhorar uma solução que já havia sido criada anteriormente. A criatividade é importante pois lhe fará não ficar parado(a) no mesmo lugar, mas estar sempre procurando evoluir, apresentar soluções diferentes, e procurar sempre estar inovando, o que é importante não só na área de desenvolvimento, mas em toda sua vida.
                        </p>

                        <img
                            src={chatImg}
                            alt="Trablhe em equipe!"
                        />
                    </section>

                    <p className="third-content">
                        A criatividade pode ser separada em dois tipos, sendo um deles a criatividade individual, que é a forma criativa expressa por uma pessoa; e também a criatividade em grupo, que expressa por uma organização, equipe ou grupo, a criatividade em alguma coisa. Ambas são importantes e incríveis à sua maneira, tanto uma pessoa pode ser criativa sozinha, quanto pode ser criativa em conjunto com sua equipe, estando disposta a evoluir tanto individualmente quanto em grupo.
                    </p>

                    <h2>
                        A criatividade é separada em um processo de 4 estágios:
                    </h2>

                    <section className="fourth-content">
                        <Block
                            count="Primeiro"
                            title="Percepção do problema"
                        >
                            Onde envolve “sentir” o problema ou desafio, entendê-lo e começar a criar soluções teóricas para este problema.
                        </Block>

                        <Block
                            count="Segundo"
                            title="Teorização do problema"
                        >
                            Onde após observar e entender o problema ou desafio, nós iremos convertê-lo em um modelo teórico ou mental.
                        </Block>

                        <Block
                            count="Terceiro"
                            title="Solução do problema"
                        >
                            É quando conseguimos descobrir a solução para o problema, é neste momento que, após dias pesquisando, gritamos “Finalmente!”.
                        </Block>

                        <Block
                            count="Quarto"
                            title="Produzir a solução"
                        >
                            A última fase é colocar em prática a solução do problema, seja em equipe ou sozinho(a), para por fim ter o problema solucionado!
                        </Block>
                    </section>

                    <h4>
                        Esta landing, por exemplo, veio de um grande processo criativo!
                    </h4>
                </div>
            </div>

            <footer className="landing-footer">
                <h3>Nota:</h3>

                <p>
                    Esta landing page foi criada por <a target="__blank" href="https://www.linkedin.com/in/al%C3%ADcia-foureaux-7099a41b0/">Alícia Foureaux</a> para o desafio da Expansion Week fornecida pela Rocketseat. O código pode ser encontrado <a target="__blank" href="https://github.com/allyfx/challenge-expansion-week">neste</a> repositório do GitHub.
                </p>
            </footer>
        </>
    );
}

export default Landing;