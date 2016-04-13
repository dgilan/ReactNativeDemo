import React, { createClass, PropTypes } from 'react'
import { VelocityComponent } from 'velocity-react'
import { List, ListItem, Heading, Image } from '../../src/spectacle';
import { Row, Col } from 'elemental';
import extend from '../../src/utils/extend'
import BaseComponent from './common/bullet-hard-native-apps'
import stepped from '../../src/utils/stepped'
import Lang from '../language/bullet-hard-native-apps'

const Component = createClass(extend(BaseComponent, {
    renderList() {
        const { step } = this.props;

        return (
            <List>
                <VelocityComponent
                    animation={{
            opacity: (() => {
              if (step < 1) {
                return 0;
              }
              if (step === 1 || step === 4) {
                return 1;
              }
              return 0.3;
            }())
          }}
                    duration={500}>
                    <ListItem>{Lang.REASONS[0]}</ListItem>
                </VelocityComponent>
                <VelocityComponent
                    animation={{
            opacity: (() => {
              if (step < 2) {
                return 0;
              }
              if (step === 2 || step === 4) {
                return 1;
              }
              return 0.3;
            }())
          }}
                    duration={500}>
                    <ListItem>{Lang.REASONS[1]}</ListItem>
                </VelocityComponent>
                <VelocityComponent
                    animation={{
            opacity: (() => {
              if (step < 3) {
                return 0;
              }
              if (step === 3 || step === 4) {
                return 1;
              }
              return 0.3;
            }())
          }}
                    duration={500}>
                    <ListItem>{Lang.REASONS[2]}</ListItem>
                </VelocityComponent>
            </List>
        );
    },

    renderImage() {
        return (
            <VelocityComponent
                animation={{
          opacity: this.props.step > 0 ? 1 : 0,
          marginRight: this.props.step > 0 ? '0' : '-50'
        }}
                duration={500}>
                <Image src={this.props.image} width='100%'/>
            </VelocityComponent>
        );
    },

    render() {
        const styles = {
            heading: {
                marginTop: '-100px'
            },
            row: {
                marginTop: '60px'
            }
        };

        return (
            <div>
                <Row>
                    <Col>
                        <Heading size={3} textColor="darkPrimary" style={styles.heading}>{Lang.HEADER}</Heading>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col xs='2/3'>
                        { this.renderList() }
                    </Col>
                    <Col xs='1/3'>
                        { this.renderImage() }
                    </Col>
                </Row>
            </div>
        );
    }

}))

export default stepped(React, 5)(Component)
