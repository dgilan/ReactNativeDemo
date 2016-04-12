import React from 'react';
import { Heading } from '../../src/spectacle';

export default class FinalSlide extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='thanksSlide'>
        <Heading size={3} textColor='primary'>Thanks!</Heading>
      </div>
    );
  }

}
