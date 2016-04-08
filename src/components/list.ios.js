import React, { createClass, ListView, StyleSheet, Text } from 'react-native'
import { BaseComponent } from "./base"
import extend from '../utils/extend'
import ListBaseComponent from './common/list'

const List = createClass(extend(BaseComponent, ListBaseComponent, {
    propTypes: {
        dataSource: React.PropTypes.array,
        children: React.PropTypes.node
    },

    renderDataSource(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const { list, listItem } = this.context.styles.components
        const styles = StyleSheet.create({list, listItem})

        const renderRow = (data) => {
            return <Text style={styles.listItem}>{data}</Text>
        };

        return (
            <ListView dataSource={ds.cloneWithRows(this.props.dataSource)}
                      renderRow={renderRow}
                      style={styles.list}/>
        );
    },

    renderChildren(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        const renderRow = (node)=>node
        const styles = StyleSheet.create({list: this.context.styles.components.list})

        return (
            <ListView dataSource={ds.cloneWithRows(this.props.children)}
                      renderRow={renderRow}
                      style={styles.list}/>
        )
    },

    render() {
        return this.props.dataSource && this.props.dataSource.length ? this.renderDataSource() : this.renderChildren()
    }
}))

export default List
