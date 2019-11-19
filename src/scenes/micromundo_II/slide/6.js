import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import PresenteSVG from '../../../images/content/micromundo-ii/presente.svg'
import Subtitle from '../../../components/text/subtitle'
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
          <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='Escolhendo um presente'/>
          <p>O elenco de produtos potencialmente adequados para um presente
depende de sua "aderência" a aspectos conhecidos (idade, gostos, etc.) da
pessoa a ser presenteada.</p>
          <EmptySpace />
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="449px" src={PresenteSVG} alt='Presente' />
            </div>
          </div>
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o
desenvolvimento de habilidades em: Ciências e Língua
Portuguesa.</TextBNCC>
          <p>Selecione, na lista a seguir, o pilar do Pensamento Computacional que
pode contribuir com <b>mais ênfase</b> para essa escolha:</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Six
