import React from 'react';
import { Row, Col } from 'elemental';
import { Image } from '../../src/spectacle';

const image = require('../images/learn-once.jpg').replace('/','');

export default class LearnOnce extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Row>
        <Col>
          <Image src={image} width='100%' />
        </Col>
      </Row>
    );
  }

}
