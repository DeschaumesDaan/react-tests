import React, { Comonent } from 'react'
class Errorboundary extends Component {
    state = {
        hasError: false, 
        errorMessage: ''
    }

    componentDidCath = (error, info) =>
    {this.state({hasError: true, errorMessage: error})}
    render() {
        if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }else {
        return this.props.children 
    }
    }
    
}
export default Errorboundary; 