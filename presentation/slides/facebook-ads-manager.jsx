import React from 'react';
import { Row, Col } from 'elemental';
import { Image, Heading } from '../../src/spectacle';
import Lang from '../language/facebook-ads-manager'

export default class FacebookAdsManager extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired,
        onUpdateStep: React.PropTypes.func.isRequired,
        image: React.PropTypes.string.isRequired
    };

    render() {
        const { logo } = this.props

        const description = Lang.DESCRIPTION.map((item, index)=> {
            return <Heading size={6} textColor="darkPrimary" key={index}>{item}</Heading>
        })

        return (
            <Row>
                <Col>
                    <Image src={logo} width="150px" height="150px"/>
                    <Heading size={6} textColor="darkPrimary">{Lang.HEADER}</Heading>
                    {description}
                </Col>
            </Row>
        );
    }

}
