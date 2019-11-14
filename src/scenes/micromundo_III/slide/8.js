import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import MPensandoSVG from '../../../images/content/micromundo-ii/MPensando.svg'

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
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Um Mapa Comentado'/>
          <p>Poderia ser criado um possível caminho da escola até um certo estabelecimento, considerando sobretudo as ruas com comentários registrados, com o propósito de futuramente gerar um “mapa falado”, com os comentários registrados pelos moradores.</p>
          <EmptySpace />

          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="322px" src={MPensandoSVG} alt='Mariana pensando' />
            </div>
          </div>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, Geograﬁa, Matemática e Língua Portuguesa. </TextBNCC>
          <p>Qual dos pilares do Pensamento Computacional seria <b>mais importante</b> na criação desse caminho?
 </p>
          <IntegralActivity activity={Activities.getMicromundoIIIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Five
