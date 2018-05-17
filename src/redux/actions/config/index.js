import ConfigTypes from './types';

export default class {
    static changeLocale = locale => dispatch => {
        dispatch({
            type: ConfigTypes.CHANGE_LOCALE,
            locale,
        });
    };
}
