import React from 'react'

class Center extends React.Component {
    render() {
        return (
            <div className="center">{this.props.children}</div>
        )
    }
}

export default Center