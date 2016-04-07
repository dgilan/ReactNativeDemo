/* eslint new-cap:0, max-statements:0, react/no-did-mount-set-state:0 */
import PropTypes from 'react/lib/ReactPropTypes'

export default {
    displayName: 'Deck',

    propTypes: {
        children: PropTypes.node
    },

    contextTypes: {
        styles: PropTypes.object,
        router: PropTypes.object,
        presenter: PropTypes.bool,
        export: PropTypes.bool,
        overview: PropTypes.bool,
        slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    },

    getInitialState(){
        return {
            lastSlide: null
        }
    },

    componentDidMount() {
        const slide = this._getSlideIndex()
        this.setState({lastSlide: slide})
        this._setStorage(this.context.slide)
        this._attachEvents()
    },

    componentWillUnmount() {
        this._detachEvents()
    },

    _attachEvents() {
    },

    _detachEvents() {
    },

    _toggleOverviewMode() {
        const suffix = this.context.overview ? '' : '?overview'
        this.context.router.replaceWith(`/${this.context.slide}${suffix}`)
    },

    _togglePresenterMode() {
        const suffix = this.context.presenter ? '' : '?presenter'
        this.context.router.replaceWith(`/${this.context.slide}${suffix}`)
    },

    _getSuffix() {
        if (this.context.presenter) {
            return '?presenter';
        } else if (this.context.overview) {
            return '?overview';
        }
        return '';
    },

    _goToSlide(e) {
        if (e.key === 'spectacle-slide') {
            const data = JSON.parse(e.newValue)
            const slide = this._getSlideIndex()
            this.setState({
                lastSlide: slide || 0
            });
            this.context.router.replaceWith(`/${data.slide}${this._getSuffix()}`)
        }
    },

    _prevSlide() {
        this.setState({
            lastSlide: this._getSlideIndex()
        })
    },

    _nextSlide() {
        this.setState({
            lastSlide: this._getSlideIndex()
        });
    },

    _setStorage(){
    },

    _getHash(slide) {
        let hash = slide;
        if ('id' in this.props.children[slide].props) {
            hash = this.props.children[slide].props.id;
        }
        return hash;
    },

    _getSlideIndex() {
        let index = 0;
        if (!parseInt(this.context.slide, 10)) {
            this.props.children.forEach((slide, i) => {
                if (slide.props.id === this.context.slide) {
                    index = i;
                }
            });
        } else {
            index = parseInt(this.context.slide, 10);
        }
        return index;
    }
}
