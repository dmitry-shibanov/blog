import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import Loader from '../../components/Loader/loader';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            productsLoading : true
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <Fragment>
                <Container>
                    {/* <ListGroup>
                        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                    </ListGroup> */}
                    <div className="col offset-3 grid" id="main">
                        {this.state.productsLoading && (
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Loader />
                            </div>
                        )}
                        {this.state.productsLoading || this.copyProducts}

                    </div>
                </Container>
            </Fragment>
        )
    }
}