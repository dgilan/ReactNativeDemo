import omit from 'lodash.omit';

let slideSteps = {};

export function register(slideIndex, { prev, next, reset }) {
    const noop = () => true;
    slideSteps[slideIndex] = {
        prevStep: prev || noop,
        nextStep: next || noop,
        reset: reset || noop
    }
}

export function unregister(slideIndex) {
    slideSteps = omit(slideSteps, slideIndex);
}

export function prevStep(slideIndex) {
    const steps = slideSteps[slideIndex];
    return steps ? steps.prevStep() : true;
}

export function nextStep(slideIndex) {
    const steps = slideSteps[slideIndex];
    return steps ? steps.nextStep() : true;
}

export function reset(slideIndex) {
    const steps = slideSteps[slideIndex];
    return steps ? steps.reset() : true;
}