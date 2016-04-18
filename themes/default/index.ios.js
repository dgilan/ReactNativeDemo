import webTheme from './index.js'

import assign from 'lodash.assign'
import colors from './colors'
import fonts from './fonts'
import { Dimensions } from 'react-native'

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
                fontSize: 32,
                fontFamily: fonts.segoe,
                lineHeight: 32,
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
        },

        webSolvesThisProblem: {
            header: {
                color: colors.light,
                textAlign: 'center'
            }
        },

        howWebSolvedProblems: {
            half: {
                alignItems: 'center',
                justifyContent: 'center',
                height: Dimensions.get('window').height / 2
            },
            listItem: {
                color: colors.light,
                textAlign: 'center',
                fontWeight: '700'
            },
            header: {
                color: colors.darkPrimary,
                textAlign: 'center',
                marginTop: 50,
                marginBottom: 20
            },
            lightHeader: {
                marginBottom: 0,
                color: colors.light
            }
        },

        webBrowser: {
            root: {
                flexDirection: 'row'
            },
            quote: {
                color: colors.darkPrimary,
                fontSize: 80,
                lineHeight: 80
            },
            header: {
                fontSize: 28,
                lineHeight: 30,
                color: colors.darkPrimary,
                fontWeight: '700'
            }
        },
        userExperienceOrDeveloperVelocity: {
            root: {
                marginTop: 0,
                marginBottom: 0
                //height: Dimensions.get('window').height,
            },
            choice: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            or: {
                //flex: 1
            },
            header: {
                color: colors.light,
                fontWeight: 'bold',
                fontSize: 70,
                lineHeight: 70
            },
            title: {
                color: colors.light
            },
            image: {
                marginTop: 10,
                marginBottom: 10
            }
        },
        bothIsImportant: {
            header: {
                color: colors.light,
                //lineHeight: 40
            }
        },
        countExample: {
            header: {
                color: colors.darkPrimary,
                textAlign: 'center'
            },
            button: {
                backgroundColor: colors.primaryDarker,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10
            },
            label: {
                color: colors.light,
                fontSize: 50,
                lineHeight: 50,
                fontWeight: 'bold',
                fontFamily: fonts.segoe
            },
            input: {
                backgroundColor: colors.light,
                height: 45,
                width: 30,
                borderRadius: 5,
                padding: 3,
                fontSize: 24,
                lineHeight: 24,
                color: colors.darkPrimary,
                fontWeight: 'bold',
                fontFamily: 'Arial'
            },

            error: {
                borderColor: 'red',
                borderWidth: 1
            }

        },

        reactIsAbstract: {
            row: {
                flex: 1,
                flexDirection: 'row',
                marginBottom: 40

            },
            column: {
                flexDirection: 'column',
                paddingLeft: 5,
                paddingRight: 5
            },
            header: {
                color: colors.darkPrimary,
                textAlign: 'center',
                marginBottom: 10
            }
        },

        tags: {
            root: {
                marginTop: 0
            },
            row: {
                flex: 1,
                flexDirection: 'row',
                //marginBottom: 40
            },
            column: {
                flexDirection: 'column',
                paddingLeft: 5,
                paddingRight: 5
            },
            header: {
                color: colors.darkPrimary,
                textAlign: 'center',
                marginBottom: 10
            }
        },
        twoWaysToDiffer: {
            header: {
                color: colors.light,
                textAlign: 'center',
                marginBottom: 10
            }
        },
        reactBenefits: {
            listItem: {
                color: colors.darkPrimary
            },
            header: {
                color: colors.darkPrimary,
                textAlign: 'center'
            }
        },
        facebookAdsManager: {
            item: {
                color: colors.darkPrimary
            },
            header: {
                color: colors.darkPrimary,
                textAlign: 'center'
            }
        },
        finalSlide: {
            header: {
                color: colors.light
            }
        }
    }
})