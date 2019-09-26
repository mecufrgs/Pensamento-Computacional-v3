import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import ProfessoraSVG from '../../../images/content/introducao/2-professora.svg'


class Two extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <p>
            É importante destacar que quando se pensa em estratégias para apoiar o desenvolvimento de uma forma de pensamento, como é o Pensamento Computacional, a ação é um elemento fundamental. Pensa-se para viver e vive-se pensando, assim, para trabalhar os quatro pilares do Pensamento Computacional, nada melhor do que vivenciar situações que sejam propícias ao seu uso e desenvolvimento.
          </p>
          <p>
            O que apresentamos então neste curso são exemplos que até podem ser usados em sala de aula, mas que, sobretudo, objetivam ajudá-lo a compreender como você poderá construir situações que levem seus alunos a usar e desenvolver o Pensamento Computacional.
          </p>
          <Image src={ProfessoraSVG} alt='Uma professora apontando para um quadro negro.'/>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Two
