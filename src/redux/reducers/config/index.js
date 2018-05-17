import ConfigTypes from './../../actions/config/types';

const INITIAL_STATE = {
    locale: 'en',
};

export default function configReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case ConfigTypes.CHANGE_LOCALE:
            return { ...state, locale: action.locale };
        default:
            return state;
    }
}
