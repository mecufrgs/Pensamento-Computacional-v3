import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import EmptySpace from '../../../components/empty-space'
import QuadroUmSVG from '../../../images/content/introducao/4-1-quadro.svg'


class Four extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <p>
            O curso explorará <Bold>três Micromundos</Bold>, com contextos complexos, onde serão tratadas situações que envolvem conhecimentos de diferentes áreas do saber, favorecendo assim a vivência com o conceito de <Bold>Interdisciplinaridade</Bold>.
          </p>
          <p>
            Em cada um dos Micromundos, serão apresentados <Bold>Eventos</Bold> relevantes, ou seja, acontecimentos sociais, onde atividades significativas serão realizadas, algumas de forma individual e outras de forma cooperativa. As atividades significativas são tratadas como <Bold>Situações-problema</Bold> e, associadas a elas, são introduzidas <Bold>Questões Avaliativas</Bold>, onde são sugeridas possibilidades de trabalho com habilidades conforme a BNCC.
          </p>
          <p>
           É justamente nas Questões Avaliativas que @s cursistas são convidad@s a refletirem sobre o uso dos pilares do Pensamento Computacional, como estratégia de apoio para execução de tarefas e solução de problemas, e são sugeridas possibilidades de trabalho com habilidades conforme a BNCC.
          </p>
          <p>
            Mas muito  além das indicações de possibilidades de trabalho com habilidades da BNCC, que integram os textos das Questões Avaliativas, e que podem ser exploradas nos vários contextos propostos, a concepção e o desenvolvimento do curso buscaram considerar as várias dimensões do aluno na perspectiva da BNCC.
          </p>
          <EmptySpace/>
          <Image className='highlightbox' src={QuadroUmSVG} alt='Observar que nos Micromundos são apresentados cenários mais amplos que o exigido pelas Questões Avaliativas. Os Micromundos contêm portanto elementos para auxiliar e inspirar você, caro cursista, na exploração de casos particulares e na criação de seus próprios contextos.'/>
          <EmptySpace/>
          Outro curso, "Aplicações do Pensamento Computacional para os Anos Finais do Ensino Fundamental", nesta mesma plataforma, com enfoque e estrutura semelhantes a este, trata de aplicações do Pensamento Computacional para os Anos Finais do Ensino Fundamental, em nível de complexidade adequado a esses anos.

        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Four
