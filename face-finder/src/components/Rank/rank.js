import React from 'react';
import './rank.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const Rank = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={'12'}>
                    <div className="rankCont">
                        <h2>Matt, your current rank is <span>#5</span></h2>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}

export default Rank;