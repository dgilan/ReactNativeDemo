const context = (React, Component, options) => {
    return React.createClass({
        displayName: 'ContextWrapper',

        propTypes: {
            location: React.PropTypes.object,
            params: React.PropTypes.object
        },

        childContextTypes: {
            styles: React.PropTypes.object,
            presenter: React.PropTypes.bool,
            overview: React.PropTypes.bool,
            export: React.PropTypes.bool,
            print: React.PropTypes.bool,
            slide: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
        },

        getChildContext() {
            const { location, params } = this.props;

            let styles = {};
            if (location.query && 'print' in location.query) {
                styles = options.print;
            } else {
                styles = options.styles;
            }

            let slide = 0;
            if (params && 'slide' in params) {
                slide = params.slide;
            }
            return {
                styles,
                slide,
                presenter: location.query && 'presenter' in location.query,
                overview: location.query && 'overview' in location.query,
                export: location.query && 'export' in location.query,
                print: location.query && 'print' in location.query
            };
        },

        render() {
            return <Component {...this.props} />;
        }
    });
};

export default context;
