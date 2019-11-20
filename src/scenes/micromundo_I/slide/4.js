import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'
import CriancasSVG from '../../../images/content/micromundo-i/criancas.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Four extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='A infância de Dona Veridiana'/>
          <p>Um grupo será responsável por reproduzir (encenar) as brincadeiras da época da infância da Dona Veridiana, usando como estratégia apresentar brincadeiras de casa, de rua, individuais e coletivas, em diferentes faixas etárias.</p>
          <EmptySpace />
          <Image center src={CriancasSVG} alt='Imagem com crianças brincande de: futebol, avião, bicicleta, carrinhos, animais de pelucia e ábaco' />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: História, Geografia, Língua Portuguesa e Educação Física.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que será exercitado com <b>mais ênfase</b> na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Four
