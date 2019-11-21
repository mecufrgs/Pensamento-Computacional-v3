import React from 'react'
import Image from '../image'
import PageUpImage from '../../images/component/page-up.svg'
import HTMLService from '../../services/html'

class PageUp extends React.Component {
    render() {
        return (
            <div className='page-up'>
                <div onClick={HTMLService.pageUp} className='page-up-button'>
                    Voltar para o topo
                    <Image className='image' src={PageUpImage} alt='Voltar para o início da página.'/>
                </div>
             </div>
        )
    }   
}

export default PageUp