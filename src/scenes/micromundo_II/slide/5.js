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
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Numa Feira de Artesanato'/>
            <p>É frequente que em uma feira livre, além de produtos alimentícios como frutas e verduras, haja uma área destinada à comercialização de produtos artesanais ou industriais.  Nesses espaços é possível adquirir desde ferramentas e utensílios domésticos, até opções interessantes para. E, ao contrário do que ocorre no comércio tradicional as oportunidades para negociação de preços tendem a ser maiores.</p>


<div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
<Image center width="365px" src={ProdutosSVG} alt='Pessoa na feira vendendo' />
            </div>
          </div>
          <EmptySpace/>
<Subtitle>Questões Avaliativas</Subtitle>
          <p>Prosseguindo em nossa Situação-problema, convidamos você a selecionar, na Questão Avaliativa a seguir, o pilar do Pensamento Computacional <b>mais apropriado.</b> </p>
        
 </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three
