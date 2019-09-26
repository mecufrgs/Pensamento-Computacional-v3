import React from 'react'
import Unit from '../constants/unit-id'
import UnitName from '../constants/unit-name'
import AvamecError from '../constants/avamec-error'
import Introducao from '../scenes/introducao'
import UnitNotFound from '../scenes/unit-not-found'
import MicromundoI from '../scenes/micromundo_I'
import MicromundoII from '../scenes/micromundo_II'

class UnitService {
    getUnit = (unit, slide) => {
        switch (unit){
            case Unit.INTRODUCAO:
                return (<Introducao slide={slide}/>)
            case Unit.MICROMUNDO_I:
                return (<MicromundoI slide={slide}/>)
            case Unit.MICROMUNDO_II:
                return (<MicromundoII slide={slide}/>)
            default:
                return (<UnitNotFound/>)
        }  
    }
    
    getUnitName = (unit) => {
        switch (unit){
            case Unit.NOT_FOUND:
                return UnitName.NOT_FOUND
            case Unit.INTRODUCAO:
                return UnitName.INTRODUCAO
            case Unit.MICROMUNDO_I:
                return UnitName.MICROMUNDO_I
            case Unit.MICROMUNDO_II:
                return UnitName.MICROMUNDO_II
            default:
                throw Error(AvamecError.INTERNAL_ERROR)
        }  
    }

    getCourseName = () => {
        return UnitName.COURSE_NAME
    }
}

export default (new UnitService())

