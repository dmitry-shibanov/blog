import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap';
import NavBar from '../../components/Navbar/NavBar'

class IndexPage extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        return true;
    }

    render(){
        return (
        <Fragment>
            <Container>
                <p>dashjdkhjsakdajshdjksajdaksdhksadhkssdadasdasdasdas</p>
            </Container>
        </Fragment>
        )
    }
}

export default IndexPage