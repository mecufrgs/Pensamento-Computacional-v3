import React from 'react'

class Subtitle extends React.Component {
    render(){
        return (
            <div className='text-subtitle'>
                {this.props.children}
            </div>
        )
    }
}

export default Subtitle