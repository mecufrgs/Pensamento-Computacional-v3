import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'

import FamiliaSVG from '../../../images/content/micromundo-i/familia.svg'
import FalaUmSVG from '../../../images/content/micromundo-i/1-1-fala.svg'
import FalaDoisSVG from '../../../images/content/micromundo-i/1-2-fala.svg'
import FalaTresSVG from '../../../images/content/micromundo-i/1-3-fala.svg'

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
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_I_DIALOG} />
        <PrimaryText>
          <p>Neste Micromundo, as ações acontecem no seio de uma família bem brasileira, com pessoas de diferentes origens e etnias.</p>
          <p>Esse núcleo familiar está constituído pelo casal Dona Veridiana (60), de origem italiana, que adora comemorações, e Seu Akira (70), de origem japonesa (os pais vieram do Japão). Dona Veridiana e Seu Akira têm 5 filhos: Pedro (42), casado com Dolores; Gustavo (36); Marta (40); casada com Paulo; Janaina (35); e Mariana (28). A caçula, Mariana, é casada com o Augusto, há 8 anos, e o casal tem dois filhos: José Carlos (7) e Ana Maria (5).</p>
          <p>Mais detalhes da árvore genealógica dessa família serão apresentados conforme for surgindo a necessidade de explorar eventos que integrem outros núcleos familiares.</p>
          <EmptySpace/>
          <Image center src={FamiliaSVG} alt='Imagem apresentando a família. Da esquerda para a direita temos: Ana Maria, sorrindo no colo do seu pai; Augusto, pai de Ana Maria; Mariana, acariciando a cabeça de seu filho e abraçada com Augusto; José Carlos, fazendo pose séria para a foto; Pedro e Dolores abraçados; Gustavo, sorrindente; Akira e Dona Veridiana abraçados e sorridentes; Janaina, alegre e escolrada na própria cintura; Paula de mãos dadas e conversando com Marta;'/>
          <EmptySpace/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
