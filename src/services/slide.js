import Avamec from './avamec'
import GenericDataId from '../constants/generic-data-id'

class Slide {    
    saveSlide = slide => {
        Avamec.saveGenericData(GenericDataId.SLIDE, slide)
    }
}

export default (new Slide())

