import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Image from '../../../components/image'
import Subtitle from '../../../components/text/subtitle'
import ProdutosSVG from '../../../images/content/micromundo-ii/produtos.svg'
import EmptySpace from '../../../components/empty-space'
class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Numa feira de artesanato'/>
            <p>É frequente que uma feira livre tenha uma área ou setor destinado à
comercialização de produtos artesanais ou comerciais, selecionados
pelos vendedores segundo demandas específicas (como ferramentas ou
utilidades domésticas).</p>


<div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
<Image center width="365px" src={ProdutosSVG} alt='Pessoa na feira vendendo' />
            </div>
          </div>
          <EmptySpace/>
<Subtitle>Questão Avaliativa</Subtitle>
          <p>Prosseguindo em nossa Situação-problema, convidamos você a selecionar, na Questão Avaliativa a seguir, o pilar do Pensamento Computacional <b>mais apropriado.</b> </p>
        
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
