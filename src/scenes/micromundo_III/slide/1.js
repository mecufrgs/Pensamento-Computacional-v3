import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import FeiraSVG from '../../../images/content/micromundo-iii/praca.svg'
import FalaUmSVG from '../../../images/content/micromundo-iii/3-1-fala.svg'
import FalaDoisSVG from '../../../images/content/micromundo-iii/3-2-fala.svg'
import FalaTresSVG from '../../../images/content/micromundo-iii/3-3-fala.svg'
import ImageSlide from '../../../components/image-slide'
import SlideCount from '../../../constants/slide-count'
/*Props
  renderTop: function(bool), called to show the header
*/
class One extends React.Component {
  constructor(props){
    super(props)
    
    this.props.setHeader()
  }

  getSlideImage = id => {
    switch(id){
      case 1: 
        return FalaUmSVG
      case 2: 
        return FalaDoisSVG
      case 3: 
        return FalaTresSVG
      default:
        throw Error('Erro ao buscar slide desconhecido.')
    }
  }

  render() {
    return (
      <ContentBox>
         <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_III_DIALOG} /> 
        <PrimaryText>
          <p>Um bairro tem uma localização especíﬁca dentro de uma cidade e faz fronteira com bairros vizinhos. Suas ruas possuem nomes, o que pode nos levar a tomar conhecimento sobre pessoas ou acontecimentos associados com a história do bairro, da cidade, do estado, do país, ou até mesmo da humanidade.
 </p>
 <EmptySpace/>
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image  center width="534px"  src={FeiraSVG} alt='Praça'/>
            </div>
          </div>
          
          <EmptySpace/>
          <p>O bairro onde moramos é um espaço geopolítico rico para que as crianças construam uma boa visão da organização geográﬁca, social, cultural e econômica, fundamentais para a vida em sociedade e para o convívio saudável com o meio ambiente e com outros seres vivos. Explorar e conhecer esses aspectos de nosso bairro ajuda-nos a criar uma visão mais ampla que podemos extrapolar para compreender o mundo. </p>
          
<p>Nesse contexto, a exploração pode partir das ruas onde moram os alunos de uma turma, gradativamente incluir as ruas de todos os alunos que estudam na escola, buscando conhecer melhor o bairro. Ao "inventariarmos" estabelecimentos comerciais, praças, igrejas, ambientes públicos ou privados de trabalho e lazer, postos de saúde, delegacias, hospitais, etc., ou explorar questões como transporte urbano, abastecimento de água e de energia elétrica, ampliaremos nossa compreensão sobre os diferentes serviços disponíveis para a comunidade.</p>

          

        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
