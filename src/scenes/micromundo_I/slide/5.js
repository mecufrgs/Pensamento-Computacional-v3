import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import CasasSVG from '../../../images/content/micromundo-i/casas.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Five extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='As Casas onde Dona Veridiana morou'/>
          <p>Um grupo será responsável por descrever as casas onde a Dona Veridiana morou. Sabe-se que a casa que ela mora hoje não é a mesma onde morou logo após casar-se e que, quando solteira, sempre morou com os pais, exceto quando morou com uma tia que precisava de atenção médica.</p>
          <EmptySpace />
          <Image center src={CasasSVG} alt='Imagem mostrando uma casa azul e uma casa amarela' />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Matemática, Ciências e Geografia.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que será exercitado com <b>mais ênfase</b> na concepção e realização desta parte da apresentação? </p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Five
