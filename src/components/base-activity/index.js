import React from 'react'
import AvamecAPIServices from '../../services/avamec'
import UnitState from '../../constants/unit-state'

class BaseActivity extends React.Component {

    getUnitConclusionData = () => {
        AvamecAPIServices.getUnitConclusionData(this.props.activity.unitId, this.callbackUnitConclusionData)
    }

    callbackUnitConclusionData = info => {
        if (info.detail.status === 200) {
            if (info.detail.data.concluido) {
                this.setState({
                    unitState: UnitState.COMPLETED
                })
            }
        }
        
        AvamecAPIServices.closeGetUnitConclusionDataListener(this.callbackUnitConclusionData)
    }
}

export default BaseActivity