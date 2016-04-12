import Slides from './slides/index'


const images = {
    questions: require('./images/questions.png'),
    thanks: require('./images/ironman-thanks.gif'),
    logo: require('./images/react-logo.png'),
    like: require('./images/like-icon.png'),
    nativeApps: require('./images/native-apps.png'),
    buildingNativeApps: require('./images/building-native-apps.jpeg'),
    me: require('./images/me.png'),
    phones: require('./images/ios-android.png'),
    webHero: require('./images/web-superhero.png'),
    splitBackground: require('./images/split-background.png'),
    splitBackgroundHorizontal: require('./images/split-background-horizontal.png'),
    reactNativeBackground: require('./images/react-native-background.jpg'),
    htmlCssJS: require('./images/html-js-css.png')
}


export default [
    // Intro
    {
        component: Slides.Intro,
        slideProps: {
            bgColor: 'primary'
        },
        props: {
            logo: images.logo
        }
    },
     //Why do we love native apps
    {
        component: Slides.WhyDoWeLoveNativeApps,
        slideProps: {
            bgColor: 'light',
        },
        props: {
            like: images.like
        }
    },
    // Native Apps Bullet
    {
        component: Slides.BulletLoveNativeApps,
        slideProps: {
            bgColor: 'light'
        },
        props: {
            image: images.nativeApps
        }
    },
    {
        component: Slides.BuildingNativeAppsIsHard,
        slideProps: {
            bgImage: images.buildingNativeApps,
            bgDarken: 0.7
        }
    },
    {
        component: Slides.BulletHardNativeApps,
        slideProps: {
            bgColor: 'light'
        },
        props: {
            image: images.phones
        }
    },
    {
        component: Slides.WebSolvesThisProblem,
        slideProps: {
            bgColor: 'darkPrimary'
        },
        props: {
            image: images.webHero
        }
    },
    {
        component: Slides.HowWebSolvedTheProblems,
        slideProps: {
            bgImage: images.splitBackground,
            bgImageIos: images.splitBackgroundHorizontal
        },
        props: {
            image: images.htmlCssJS
        }
    },
    {
        component: Slides.WebBrowser,
        slideProps: {
            bgColor: 'light'
        }
    },
    {
        component: Slides.UserExperinceOrDeveloperVelocity,
        slideProps: {
            bgColor: 'darkPrimary'
        }
    },
    {
        component: Slides.BothAreImportant,
        slideProps: {
            bgColor: 'darkPrimary'
        }
    },
    {
        slideProps: {
            bgImage: images.reactNativeBackground
        }
    },
    {
        component: Slides.ReactJSFramework,
        slideProps: {
            bgColor: 'primary'
        }
    },
    {
        component: Slides.CountExample,
        slideProps: {
            bgColor: 'light'
        }
    },
    {
        component: Slides.CountFunction1,
        slideProps: {
            bgColor: '#F9F6ED'
        }
    },
    {
        component: Slides.ReactIsAbstract,
        slideProps: {
            bgColor: 'light'
        }
    },
    {
        component: Slides.ReactIsAbstract2,
        slideProps: {
            bgColor: 'light'
        }
    },
    {
        component: Slides.NotWriteOnce,
        slideProps: {
            bgColor: 'darkPrimary'
        }
    },
    {
        component: Slides.LearnOnce,
        slideProps: {
            bgColor: 'darkPrimary'
        }
    },
    {
        component: Slides.Tags,
        slideProps: {
            bgColor: 'light'
        },
        props: {
            logo: images.logo
        }
    },
    {
        component: Slides.ReactStyles,
        slideProps: {
            bgColor: 'light'
        },
        props: {
            logo: images.logo
        }
    },
    {
        component: Slides.TwoWaysToDiffer,
        slideProps: {
            bgColor: 'darkPrimary'
        }
    },
    {
        component: Slides.ReactBenefits,
        slideProps: {
            bgColor: 'light'
        },
        props: {
            logo: images.logo
        }
    },
    {
        component: Slides.FacebookAdsManager,
        slideProps: {
            bgColor: 'light'
        },
        props: {
            logo: images.logo
        }
    },
    //{
    //    component: Slides.DemoTime,
    //    slideProps: {
    //        bgColor: 'light'
    //    }
    //},
    {
        component: Slides.FinalSlide,
        slideProps: {
            bgImage: images.thanks,
            bgDarken: 0.6
        }
    }
]