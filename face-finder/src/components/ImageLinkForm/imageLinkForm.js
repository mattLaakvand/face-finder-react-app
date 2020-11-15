import React from 'react';
import './imageLinkForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const ImageLinkForm = () => {
    return (
        <Grid>
            <Row>
                <Col xs={'12'}>
                    <div className="imageLinkForm">
                        <p>{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
                        <div className="formCont">
                            <input type="text"/>
                            <button>Detect</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}

export default ImageLinkForm;