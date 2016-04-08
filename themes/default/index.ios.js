import webTheme from './index.js'

import assign from 'lodash.assign'
import colors from './colors'
import fonts from './fonts'

export default assign({}, webTheme, {
    global: {
        body: {
            view: {
                backgroundColor: colors.primary,
                overflow: 'hidden'
            },
            text: {
                fontFamily: fonts.segoe,
                fontWeight: 'normal',
                fontSize: 14,
                color: colors.darkPrimary
            }
        },
        'html, body': {
            height: '100%'
        },
        '*': {
            boxSizing: 'border-box'
        }
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    components: {
        slide: {
            flex: 1,
        },

        heading: {
            h1: {
                color: colors.light,
                fontSize: 56,
                lineHeight: 56,
                fontFamily: fonts.segoe,
                fontWeight: '300',
                margin: 0
            },
            h2: {
                color: colors.secondary,
                fontSize: 48,
                fontFamily: fonts.segoe,
                lineHeight: 48,
                fontWeight: '300',
                margin: 0
            },
            h3: {
                color: 'black',
                fontSize: 40,
                fontFamily: fonts.segoe,
                lineHeight: 40,
                fontWeight: '300',
                //margin: '0.5em auto'
            },
            h4: {
                color: 'black',
                //fontSize: '3.82em',
                fontFamily: fonts.segoe,
                lineHeight: 1,
                fontWeight: '300',
                //margin: '0.5em auto'
            },
            h5: {
                color: 'black',
                //fontSize: '3.19em',
                fontFamily: fonts.segoe,
                lineHeight: 1.4,
                fontWeight: '300',
                //margin: '0.5em auto'
            },
            h6: {
                color: 'black',
                fontSize: 24,
                fontFamily: fonts.segoe,
                lineHeight: 25,
                fontWeight: '300'
            }
        },

        list: {
            padding: 0
        },

        listItem: {
            textAlign: 'left',
            fontSize: 20,
            lineHeight: 20,
            fontWeight: '500',
            marginBottom: 10
        },
    },

    slides: {
        common: {
            content: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -40
            }
        },
        intro: {
            image: {
                width: 200,
                height: 200
            },

            header: {
                marginTop: 10,
                textAlign: 'center',
                color: colors.darkPrimary
            },

            description: {
                marginTop: 20,
                textAlign: 'center',
                color: colors.darkPrimary,
                fontWeight: 'normal'
            }

        },

        whyDoWeLoveNativeApps: {
            header: {
                color: colors.darkPrimary,
                textAlign: 'center'
            }
        },

        bulletLoveNativeApps: {
            header: {
                color: colors.darkPrimary,
                textAlign: 'center',
                marginBottom: 50
            }
        },

        buildingNativeAppsIsHard: {
            header: {
                color: colors.primary,
            },
            description: {
                color: colors.primary,
                textAlign: 'center'
            }
        },

        bulletHardNativeApps: {
            header: {
                color: colors.darkPrimary,
                textAlign: 'center',
                marginBottom: 50
            },
        }
    }

})