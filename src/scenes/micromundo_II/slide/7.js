import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import ApertoSVG from '../../../images/content/micromundo-ii/aperto.svg'

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
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Negociando preços'/>
          <p>Em casos onde mais de um produto ou mais de uma unidade do mesmo
produto são adquiridos, é frequente que haja negociação de preços entre
comprador e vendedor. Ainda que não haja uma única regra, é possível
pensar num roteiro para isso.</p>
          <EmptySpace />

          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="510px" src={ApertoSVG} alt='Aperto de mãos' />
            </div>
          </div>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o
desenvolvimento de habilidades em: Matemática e Língua
Portuguesa.</TextBNCC>
          <p>Selecione, na lista a seguir, o pilar do Pensamento Computacional <b>mais
adequado</b> para apoiar o comprador na elaboração de uma abordagem
prática para essa negociação:</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Seven
