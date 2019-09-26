import React, {Fragment} from 'react'
import Center from '../../components/center'
import TextPrimary from '../../components/text/primary'
import General from '../../constants/general'
import URLService from  '../../services/url'

class Error extends React.Component {
    errorSlideNotFound = () => {
        setTimeout(this.redirectToDefaultSlide, General.TIME_OUT_TO_REDIRECT)
        return this.renderNotFoundScene('Slide')
    }

    errorUnitNotFound = () => {
        setTimeout(this.redirectToDefaultUnit, General.TIME_OUT_TO_REDIRECT)
        return this.renderNotFoundScene('Unidade')
    }

    redirectToDefaultSlide = () => {
        URLService.updateSlide(General.DEFAULT_SLIDE)
        this.setState({
            slide: General.DEFAULT_SLIDE
        })
    }

    redirectToDefaultUnit = () => {
        URLService.updateUnit(General.DEFAULT_UNIT)
        window.location.reload()
    }

    renderNotFoundScene = text => {
        return (
            <Fragment>
                <Center>
                    <TextPrimary size='large' weight='strong'>
                        {text} não encontrado(a)... 
                    </TextPrimary>
                </Center>
                <Center>
                    <TextPrimary weight='strong'>
                        você será redirecionado para uma página válida.
                    </TextPrimary>
                </Center>
            </Fragment>
        )
    }
}

export default Error
