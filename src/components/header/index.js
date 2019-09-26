import React from 'react'

/*Props
 - children: JSX, content inside this component
*/
class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    {this.props.children}
                </div>    
             </header>
        )
    }   
}

export default Header