const context = (React, Component, options) => {
    return React.createClass({
        displayName: 'ContextWrapper',

        propTypes: {
            location: React.PropTypes.object,
            params: React.PropTypes.object
        },

        childContextTypes: {
            styles: React.PropTypes.object,
            slide: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
        },

        getChildContext() {
            const { params } = this.props;

            let slide = 0;
            if (params && 'slide' in params) {
                slide = params.slide;
            }
            return {
                styles: options.styles,
                slide
            };
        },

        render() {
            return <Component {...this.props} />;
        }
    });
};

export default context;
