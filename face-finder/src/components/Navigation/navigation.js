import React from 'react';
import './navigation.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const Navigation = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={'12'}>
                    <div className="navAdmin">
                        <ul>
                            <li>Sign out</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}

export default Navigation;