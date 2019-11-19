import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'

import EmptySpace from '../../../components/empty-space'
import ImageSlide from '../../../components/image-slide'
import FalaUmSVG from '../../../images/content/introducao/1-1-fala.svg'
import FalaDoisSVG from '../../../images/content/introducao/1-2-fala.svg'
import FalaTresSVG from '../../../images/content/introducao/1-3-fala.svg'


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
        {/* <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.INTRODUCAO_DIALOG} /> */}
        <PrimaryText>
          <p>
          Neste curso vimos, através dos Micromundos, que o Pensamento Computacional está naturalmente presente em nossa prática diária, permeando o cotidiano, em variadas situações que podem ser exploradas em sala de aula, no contexto da BNCC.
          </p>

          <p>
          Reconhece-se hoje, internacionalmente, a importância das estratégias de raciocínio do Pensamento Computacional para a realidade do mundo atual. E as pesquisas apontam que  essas estratégias deveriam ser desenvolvidas desde os primeiros anos de escolaridade, capitalizando a naturalidade das crianças para essa forma de pensamento.
          </p>
          <p>O Pensamento Computacional e, por exemplo, a Matemática desenvolvem-se desde os primórdios da história da humanidade. Entretanto, enquanto a Matemática já detém um vasto patrimônio pedagógico, largamente documentado e explorado em livros didáticos, tecnologias educacionais, etc., o Pensamento Computacional, nos currículos escolares, está na infância do seu desenvolvimento.</p>

          <p>Assim, este curso, voltado para os  Anos Iniciais do Ensino Fundamental, insere-se no esforço: </p>
          <p>- do efetivo desenvolvimento do Pensamento Computacional desde o primeiro ano do Ensino Fundamental;</p>
          <p>- de sensibilização e motivação dos professores para realizarem o trabalho com o Pensamento Computacional em sala de aula, não necessariamente usando soluções prontas e acabadas, mas principalmente apontando caminhos para que o professor desenvolva os seus próprios recursos, ampliando o acervo pedagógico para o tema.</p>

        </PrimaryText>
      </ContentBox>
    )
  }
}

export default One
