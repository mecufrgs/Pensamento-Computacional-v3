import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import CaminhosSVG from '../../../images/content/micromundo-i/caminhos.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Six extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Os Caminhos de Dona Veridiana'/>
          <p>Um grupo será responsável por descrever os caminhos da Dona Veridiana em três etapas diferentes da vida: quando morava com os pais, depois de casada e no momento atual. Os trajetos possíveis em cada uma dessas etapas da vida são sequenciados segundo horas, dias ou eventos.</p>
          <EmptySpace />
          <Image center src={CaminhosSVG} alt='Três setas direcionais apontando para direções distintas.' />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Geografia, Matemática e Língua Portuguesa.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que será exercitado com <b>mais ênfase</b> na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Six
