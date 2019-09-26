import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'
import FeiraSVG from '../../../images/content/micromundo-ii/feira.svg'
import FalaUmSVG from '../../../images/content/micromundo-ii/1-1-fala.svg'
import FalaDoisSVG from '../../../images/content/micromundo-ii/1-2-fala.svg'
import FalaTresSVG from '../../../images/content/micromundo-ii/1-3-fala.svg'

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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_II_DIALOG} />
        <PrimaryText>
          <p>A feira livre é uma modalidade de comércio que data de épocas bastante
remotas.</p>
          <p>Originalmente, a feira livre era um local em que as pessoas podiam trocar
ou até comercializar as mercadorias que produziam para obter outras de
que necessitavam. Com o tempo as feiras livres passaram também a ser
espaços para conhecer pessoas e produtos, trocar objetos
manufaturados (inclusive artesanato), saber das novidades, discutir
política, etc.</p>
<p>Hoje, mesmo com a existência de outras opções para essas atividades, as
feiras livres, por seu encanto e praticidade, permanecem atrativas, muito
pelo fato de que nelas cada feirante é um comércio à parte, com
características definidas por cada um.</p>
<p>Por todas essas razões, um passeio acompanhado das crianças em uma
feira livre pode revelar-se um excelente espaço de aprendizagem.</p>
          
          <EmptySpace/>
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image  center width="534px"  src={FeiraSVG} alt='Feira'/>
            </div>
          </div>
          
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
