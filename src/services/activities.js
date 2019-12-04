class Activities {
    getMicromundoIActiviryOne = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_1_micromundo_i",
            questions: [
                {
                    id: "q1_a1_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "Este pilar não é central para a estratégia adotada, mas poderá  ser exercitado, por exemplo, na definição das categorias de brincadeiras a serem trabalhadas."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Este pilar não é central para a estratégia adotada, mas poderá ser exercitado, por exemplo, na associação das crianças às brincadeiras específicas e na organização da apresentação."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "A estratégia proposta é melhor refletida por este pilar, que será fortemente exercitado na categorização das brincadeiras em cada um dos grupos definidos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Este pilar não é central para a estratégia adotada, mas poderá ser exercitado no preparo da apresentação, já que as brincadeiras deverão ser organizadas segundo alguma ordem, obedecendo a um ou mais critérios, como primeiro as de casa e depois as de rua, ou primeiro as individuais e depois as coletivas."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIActiviryTwo = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_2_micromundo_i",
            questions: [
                {
                    id: "q1_a2_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "Este pilar não é central a descrição desejada, mas poderá ser exercitado quando, por exemplo, não sendo possível descrever todos os detalhes de uma casa, forem destacados alguns de seus elementos em detrimento de outros."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Decomposição",
                            tip: "Este será o pilar exercitado com mais ênfase na descrição das casas e seus detalhes. O problema geral, a descrição de todas as casas de D. Veridiana, deverá ser decomposto em suas partes constituintes, a saber, cada casa individual, seus cômodos e assim sucessivamente."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "Este pilar não é central à produção da  descrição desejada, mas poderá ser exercitado se, por exemplo, for buscada uma certa homogeneidade nos elementos considerados em cada casa, a partir da  identificação de elementos comuns às casas."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Algoritmos",
                            tip: "Este pilar não é central à produção da  descrição desejada, mas poderá ser exercitado, por exemplo, para tornar factível uma descrição de todas as casas, considerando um certo número de elementos, em um tempo razoável. Nesse caso poderia ser criado um algoritmo para realização da tarefa em cada casa."
                        }
                    ]
                }
            ]
        }
    }
    
    getMicromundoIActiviryThree = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_3_micromundo_i",
            questions: [
                {
                    id: "q1_a3_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Abstração",
                            tip: "Este pilar não é central à descrição dos caminhos da D. Veridiana, mas poderá ser exercitado, por exemplo, quando forem considerados apenas alguns elementos do espaço em torno das residências, como escola, supermercado/venda, igreja, etc., na produção dos trajetos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Decomposição",
                            tip: "Este pilar não é central à descrição dos caminhos da D. Veridiana, mas poderá ser exercitado, por exemplo, ao decompor e  tratar as três etapas da sua vida em separado."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões",
                            tip: "Este pilar não é central à descrição dos caminhos da D. Veridiana, mas poderá ser exercitado, por exemplo, quando forem percebidos padrões de horários e destinos nos trajetos."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Algoritmos",
                            tip: "A descrição de um caminho percorrido rotineiramente envolve descrever de que forma um conjunto de ações básicas é executado: como essas ações são sequenciadas e quais as condições que devem ser satisfeitas para que determinadas ações sejam executadas. Enfim, a descrição de um trajeto requer elementos que são típicos do pilar Algoritmos."
                        }
                    ]
                }
            ]
        }
    }

    getMicromundoIActiviryFour = (unitId) => {
        return {
            unitId: unitId,
            id: "atividade_4_micromundo_i",
            questions: [
                {
                    id: "q1_a4_micromundo_i",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Algoritmos e Decomposição",
                            tip: "O par de pilares Algoritmos e Decomposição não é central na organização do armário de D. Veridiana, mas poderá ser exercitado quando, por exemplo, no processo de organização (pilar Algoritmos) final do acervo, quando as roupas forem dispostas novamente no armário, conforme a organização definida e quando a tarefa inicial for decomposta (pilar Decomposição) em outras, como organizar as roupas da D. Veridiana, organizar as roupas dos filhos, etc."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Abstração e Reconhecimento de Padrões",
                            tip: "O par de pilares Abstração e  Reconhecimento de Padrões será exercitado com mais ênfase na organização do armário de D. Veridiana. De fato, o Reconhecimento de Padrões é central na organização, quando do agrupamento das roupas segundo critérios de  faixa etária, período de fabricação, etc. Tais padrões serão construídos e definidos à medida que o conteúdo do guarda-roupa for sendo analisado e (pilar Abstração) alguns aspectos das roupas forem considerados, em detrimento de outros, como cor, estação do ano, etc."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Reconhecimento de Padrões e Decomposição",
                            tip: "O pilar Reconhecimento de Padrões será exercitado com mais ênfase na organização do armário de D. Veridiana, quando do agrupamento das roupas segundo critérios como  faixa etária, período de fabricação, etc. Entretanto, o pilar Decomposição não é central, mas poderá ser exercitado quando, por exemplo, a tarefa inicial for decomposta em outras, como organizar as roupas da D. Veridiana, organizar as roupas dos filhos, etc."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Abstração e Algoritmos",
                            tip: "O pilar Abstração é central na organização do armário, quando o conteúdo do guarda-roupa for sendo analisado e alguns aspectos forem considerados em detrimento de outros, como cor, estação do ano, etc. Já o pilar Algoritmos não é central, mas poderá ser exercitado quando, por exemplo, no processo de organização final do acervo, as roupas forem dispostas novamente no armário."
                        }
                    ]
                }
            ]
        }
    }


getMicromundoIIActiviryOne = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_1_micromundo_ii",
        questions: [
            {
                id: "q1_a1_micromundo_ii",
                options: [
                    {
                        value: "0",
                        key: "1",
                        text: "a, c, b, d",
                        tip: "Revise e tente novamente."
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "d, b, c, a",
                        tip: "Revise e tente novamente."
                    },
                    {
                        value: "1",
                        key: "3",
                        text: "a, b, c, d",
                        tip: "O pilar Abstração será exercitado com mais ênfase, no atendimento da  recomendação R1, pois como o objetivo é a lista conter alimentos de todos os níveis da pirâmide alimentar, ao considerar-se um nível, abstraindo-se os demais, obrigatoriamente deverá ser inserido pelo menos um alimento desse nível na lista. O pilar Decomposição será exercitado com mais ênfase, no atendimento da recomendação R2, visto que o momento de consumo dos alimentos está refletido nas principais refeições do dia e a lista deve contemplar alimentos para todas essas refeições. O pilar Reconhecimento de Padrões será exercitado com mais ênfase, no atendimento da recomendação R3, tendo em vista que na lista deverão ser inseridos alimentos selecionados segundo frequências de consumo determinadas, por exemplo, para refeições diárias, em confraternizações familiares de fim de semana e em datas especiais. O pilar Algoritmos será exercitado com mais ênfase, no atendimento da recomendação R4, tendo em vista que envolve logísticas de acomodação e transporte das compras."
                    },
                    {
                        value: "0",
                        key: "4",
                        text: "c, b, a, d",
                        tip: "Revise e tente novamente."
                    }
                ]
            }
        ]
    }
}


getMicromundoIIActiviryTwo = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_2_micromundo_ii",
        questions: [
            {
                id: "q1_a2_micromundo_ii",
                options: [
                    {
                        value: "1",
                        key: "1",
                        text: "Abstração",
                        tip: "Este pilar é central na escolha de um presente “aderente” a uma pessoa, pois fará com que sejam abstraídas algumas características e sejam considerados apenas aspectos relevantes ao presenteado."
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "Decomposição",
                        tip: "Este pilar não é central na escolha de um presente “aderente” a uma pessoa, mas poderá ser exercitado, por exemplo, na avaliação de custos, tempos, etc."
                    },
                    {
                        value: "0",
                        key: "3",
                        text: "Reconhecimento de Padrões",
                        tip: "Este pilar não é central na escolha de um presente “aderente” a uma pessoa cujos aspectos são conhecidos. Mas poderá ser exercitado, por exemplo, ao tentar agrupar alguns tipos de artesanato a algum aspecto muito peculiar."
                    },
                    {
                        value: "0",
                        key: "4",
                        text: "Algoritmos",
                        tip: "Este pilar não é central na escolha de um presente “aderente” a uma pessoa, mas poderá ser exercitado, por exemplo, na escolha de um roteiro para percorrer uma feira de artesanato de maior porte."
                    },                    {
                        value: "0",
                        key: "5",
                        text: "Generalização",
                        tip: "Generalização não integra a lista de pilares do Pensamento Computacional aqui considerados, a saber: Abstração, Decomposição, Reconhecimento de Padrões e Algoritmos."
                    }

                ]
            }
        ]
    }
}
getMicromundoIIActiviryThree = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_3_micromundo_ii",
        questions: [
            {
                id: "q1_a3_micromundo_ii",
                options: [
                    {
                        value: "0",
                        key: "1",
                        text: "Abstração",
                        tip: "Este pilar não é central no desenvolvimento de um roteiro de abordagem prática para uma negociação de preços, mas pode auxiliar para o bom termo da mesma, abstraindo gestos e palavras de efeito do vendedor, não pertinentes à negociação."
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "Decomposição",
                        tip: "Este pilar não é central no desenvolvimento de um roteiro de abordagem prática para uma negociação de preços, mas pode auxiliar na definição de diferentes abordagens, conforme o perfil dos vendedores."
                    },
                    {
                        value: "0",
                        key: "3",
                        text: "Reconhecimento de Padrões",
                        tip: "Este pilar não é central no desenvolvimento de um roteiro de abordagem prática para uma negociação de preços, mas pode auxiliar nessa tarefa, por exemplo, quando se percebe qual a estratégia adotada (padrão de comportamento de negociação) por parte do vendedor."
                    },
                    {
                        value: "1",
                        key: "4",
                        text: "Algoritmos",
                        tip: "Quando uma tarefa envolve roteiros e, em particular, roteiros de uma abordagem prática, Algoritmos é o pilar do Pensamento Computacional mais adequado para apoiar sua solução."
                    },                    {
                        value: "0",
                        key: "5",
                        text: "Composição",
                        tip: "Composição não é um pilar do Pensamento Computacional."
                    }

                ]
            }
        ]
    }
}

getMicromundoIIActiviryFour = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_4_micromundo_ii",
        questions: [
            {
                id: "q1_a4_micromundo_ii",
                options: [
                    {
                        value: "0",
                        key: "1",
                        text: "Abstração, Decomposição",
                        tip: "Na geração do algoritmo de escolha, baseado em alguns fatores dos produtos, entre os dois pilares Abstração e Decomposição, apenas o pilar Abstração será exercitado com mais ênfase, ao serem considerados somente alguns fatores para a análise de custo benefício. O pilar Decomposição, se utilizado, o será de forma periférica, como para explodir detalhes de custos."
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "Decomposição, Reconhecimento de Padrões",
                        tip: "Na geração do algoritmo de escolha, baseado em alguns fatores dos produtos, o par de pilares Decomposição e Reconhecimento de Padrões não é central à tarefa, mas ambos poderão ser exercitados, por exemplo, para explodir detalhes de custos (pilar Decomposição) ou agrupar em subgrupos, conforme algum padrão, os produtos candidatos (pilar Reconhecimento de Padrões)."
                    },
                    {
                        value: "0",
                        key: "3",
                        text: "Equilibração, Pensamento Computacional",
                        tip: "Equilibração e Pensamento Computacional não são pilares do Pensamento Computacional."
                    },
                    {
                        value: "1",
                        key: "4",
                        text: "Abstração, Algoritmos",
                        tip: "O par de pilares Abstração e Algoritmos será exercitado com mais ênfase na geração do algoritmo de escolha, baseado em alguns fatores dos produtos: o pilar  Abstração, ao serem considerados apenas alguns fatores para a análise de custo benefício; e o pilar Algoritmos, para definir o roteiro de como a escolha acontecerá."
                    }

                ]
            }
        ]
    }
}


//--------------------------------------//



getMicromundoIIIActiviryOne = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_1_micromundo_iii",
        questions: [
            {
                id: "q1_a1_micromundo_iii",
                options: [
                    {
                        value: "0",
                        key: "1",
                        text: "b, c, d, a",
                        tip: "Revise e tente novamente. "
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "d, c, a, b",
                        tip: "Revise e tente novamente."
                    },
                    {
                        value: "0",
                        key: "3",
                        text: "b, a, c, d",
                        tip: "Revise e tente novamente."
                    },
                    {
                        value: "1",
                        key: "4",
                        text: "b, c, a, d",
                        tip: "O pilar Abstração será exercitado com mais ênfase na tarefa T1, pois para agrupar os estabelecimentos encontrados será considerada a natureza da sua atividade principal, abstraindo-se o resto. O pilar Algoritmos será exercitado com mais ênfase na tarefa T2, tendo em vista que o objeto da atividade é descrever um percurso. O pilar Decomposição será exercitado com mais ênfase na decomposição da forma de nomeação dos nomes de ruas em seus diversos tipos (tarefa T3) . O pilar Reconhecimento de Padrões será exercitado com mais ênfase na tarefa T4, tendo em vista que, ao agrupar os textos dos alunos considerando a quantidade de estabelecimentos não comerciais, estamos na realidade reconhecendo um padrão de zonas mais ou menos residenciais."
                    }
                ]
            }
        ]
    }
}


getMicromundoIIIActiviryTwo = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_2_micromundo_iii",
        questions: [
            {
                id: "q1_a2_micromundo_iii",
                options: [
                    {
                        value: "1",
                        key: "1",
                        text: "Abstração e Reconhecimento de Padrões",
                        tip: "O pilar Abstração é central para produzir uma descrição do bairro sob a perspectiva de quem o habita, pois o levantamento e o registro produzidos pelos alunos deverão ser examinados, procurando isolar e destacar os elementos de interesse dos moradores. Igualmente o pilar Reconhecimento de Padrões é central, pois os termos descritores deverão surgir a partir de padrões observados  nos registros do bairro, por exemplo, número expressivo de bares e restaurantes, prédios conforme determinado período arquitetônico, etc."
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "Abstração e Decomposição",
                        tip: "O pilar Abstração é adequado para produzir uma descrição do bairro sob a perspectiva de quem o habita, pois o levantamento e o registro produzidos pelos alunos deverão ser examinados, procurando isolar e destacar os elementos de interesse dos moradores. Por outro lado, o pilar  Decomposição não é central, mas até poderá ser exercitado se o volume de informações a ser processado demandar algum tipo de divisão do material entre grupos, subgrupos, para permitir seu exame em um tempo mais razoável ou com detalhes mais específicos."
                    },
                    {
                        value: "0",
                        key: "3",
                        text: "Reconhecimento de Padrões e Algoritmos",
                        tip: "O pilar Reconhecimento de Padrões é central para produzir uma descrição do bairro sob a perspectiva de quem o habita, pois os termos descritores deverão surgir a partir de padrões observados nos registros do bairro, por exemplo, número expressivo de bares e restaurantes, prédios conforme determinado período arquitetônico, etc. Por outro lado, o pilar Algoritmos não é central, mas até poderá ser exercitado, por exemplo, na definição de estratégias para examinar os documentos do bairro, se eles se revelarem em volume expressivo."
                    },
                    {
                        value: "0",
                        key: "4",
                        text: "Algoritmos e Decomposição",
                        tip: "O pilar Algoritmos não é central para produzir uma descrição do bairro sob a perspectiva de quem o habita, mas até poderá ser exercitado, por exemplo, na definição de estratégias para examinar os documentos do bairro, se eles se revelarem em volume expressivo. Igualmente o pilar Decomposição não é central, mas até poderá ser exercitado se o volume de informações a ser processado demandar algum tipo de divisão do material entre grupos, subgrupos,  para permitir seu exame em um tempo mais razoável ou com detalhes mais específicos."
                    }

                ]
            }
        ]
    }
}
getMicromundoIIIActiviryThree = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_3_micromundo_iii",
        questions: [
            {
                id: "q1_a3_micromundo_iii",
                options: [
                    {
                        value: "0",
                        key: "1",
                        text: "c, d, b, a",
                        tip: "Revise e tente novamente."
                    },
                    {
                        value: "1",
                        key: "2",
                        text: "c, d, a, b",
                        tip: "O pilar Algoritmos será exercitado com mais ênfase, já que o objeto da tarefa T1  é a definição do trajeto a ser percorrido pela dupla/grupo. O pilar Reconhecimento de Padrões será exercitado com mais ênfase na tarefa T2, já que os destaques serão agrupados segundo critérios de valorização ou desvalorização do bairro. O pilar Decomposição será exercitado com mais ênfase na decomposição do bairro em zonas (tarefa T3). O pilar Abstração será exercitado com mais ênfase em T4 , pois, para identificar o estilo de um prédio, só os aspectos que definem o estilo serão considerados, sendo os demais abstraídos."
                    },
                    {
                        value: "0",
                        key: "3",
                        text: "a, d, c, b",
                        tip: "Revise e tente novamente."
                    },
                    {
                        value: "0",
                        key: "4",
                        text: "c, a, d, b",
                        tip: "Revise e tente novamente."
                    },                   
                ]
            }
        ]
    }
}

getMicromundoIIIActiviryFour = (unitId) => {
    return {
        unitId: unitId,
        id: "atividade_4_micromundo_iii",
        questions: [
            {
                id: "q1_a4_micromundo_iii",
                options: [
                    {
                        value: "0",
                        key: "1",
                        text: "Decomposição",
                        tip: "Este pilar não é central para produzir um mapa comentado, mas poderá ser exercitado na  geração do trajeto, ao trabalhar com as ruas, que são um dos elementos componentes do bairro."
                    },
                    {
                        value: "0",
                        key: "2",
                        text: "Abstração",
                        tip: "Este pilar não é central para produzir um mapa comentado, mas tem sua importância ao considerar basicamente as ruas com comentários."
                    },
                    {
                        value: "1",
                        key: "3",
                        text: "Algoritmos",
                        tip: "Este pilar é central para produzir um mapa comentado, pois se trata da produção de um trajeto, ligando ruas conexas em busca de um objetivo,  priorizando as ruas com comentários registrados."
                    },
                    {
                        value: "0",
                        key: "4",
                        text: "Reconhecimento de Padrões",
                        tip: "Este pilar não é central para produzir um mapa comentado, mas poderá ser exercitado no agrupamento das ruas com comentários."
                    }

                ]
            }
        ]
    }
}
}



export default (new Activities())

