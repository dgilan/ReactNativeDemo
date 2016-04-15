import React, { createClass } from 'react'
import { Row, Col } from 'elemental'
import { Image, Heading } from '../../src/spectacle'
import { RaisedButton } from 'material-ui'
import extend from '../../src/utils/extend'
import BaseComponent from './common/count-example'

const image = require('../images/react-logo.png').replace('/','')

export default createClass(extend(BaseComponent, {
    render(){
        return (
            <Row>
                <Col>
                    <div>
                        <Heading textColor='darkPrimary' size={1}>Count: <b>{this.state.count}</b></Heading>
                    </div>
                    <div>
                        <Image src={image} width='200px'/>
                    </div>
                    <div>
                        <RaisedButton secondary label="Add +1"
                                      onClick={this.onClick}
                                      style={{
                width: '300px',
                height: '80px'
              }}
                                      labelStyle={{
                fontFamily: 'SegoeUILight',
                fontSize: '50px',
                fontWeight: 'bold'
              }}
                        />
                    </div>
                </Col>
            </Row>
        );
    }

}))
