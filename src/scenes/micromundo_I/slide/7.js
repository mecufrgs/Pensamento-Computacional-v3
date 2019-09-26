import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import GuardaRoupasSVG from '../../../images/content/micromundo-i/guarda-roupa.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Seven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Organizando o armário de roupas de Dona Veridiana'/>
          <p>Um grupo será responsável por organizar o armário de roupas de Dona Veridiana, que tem peças de vestuário desde sua infância, além de peças dos filhos e netos em momentos marcantes da vida, e mostrar (explicar) como ficou o "acervo" depois de organizado.</p>
          <EmptySpace />
          <Image center src={GuardaRoupasSVG} alt='Imagem de guarda-roupas com diversos itens como: vestidos, chapéus, casacos, mala, bolsa, sapatos, roupas de cama, algumas caixas e gavetas.' />
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: História, Geografia, Ciências e Língua Portuguesa.</TextBNCC>
          <p>Qual o par de pilares do Pensamento Computacional que será exercitado com mais ênfase na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Seven
