import React from 'react'

class BNCC extends React.Component {
    render(){
        return (
            <div className='text-bncc'>
                <div className='text-bncc-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default BNCC