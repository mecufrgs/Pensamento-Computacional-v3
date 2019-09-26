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
          <EmptySpace/>
          <Image src={QuadroUmSVG} alt='Observar que nos Micromundos são apresentados cenários mais amplos que o exigido pelas Questões Avaliativas. Os Micromundos contêm portanto elementos para auxiliar e inspirar você, caro cursista, na exploração de casos particulares e na criação de seus próprios contextos.'/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Four
