import React, { createClass } from 'react'
import Base, {BaseComponent} from "./base"
import Radium from "radium"
import extend from '../utils/extend'
import ListBaseComponent from './common/list'

const List = createClass(extend(BaseComponent, ListBaseComponent, {
    render() {
        const { children, style } = this.props
        return (
            <ul style={[this.context.styles.components.list, this.getStyles(), style]}>
                {children}
            </ul>
        );
    }
}))

export default Radium(List)
