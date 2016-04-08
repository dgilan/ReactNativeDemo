import { StyleSheet } from 'react-native'

export default function getStyles() {
    const styles = {};

    if (this.props.fontNormal) {
        styles.fontWeight = "500";
    }

    if (this.props.textColor) {
        let color = "";
        if (!this.context.styles.colors.hasOwnProperty(this.props.textColor)) {
            color = this.props.textColor;
        } else {
            color = this.context.styles.colors[this.props.textColor];
        }
        styles.color = color;
    }

    if (this.props.bgColor) {
        let color = "";
        if (!this.context.styles.colors.hasOwnProperty(this.props.bgColor)) {
            color = this.props.bgColor;
        } else {
            color = this.context.styles.colors[this.props.bgColor];
        }
        styles.backgroundColor = color;
    }

    return StyleSheet.create({root: styles}).root;
};