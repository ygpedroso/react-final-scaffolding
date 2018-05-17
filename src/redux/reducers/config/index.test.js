import ConfigReducer from './';
import ConfigTypes from './../../actions/config/types';

describe('Suite of Tests for the Config Reducer', () => {
    test('Should return the initial state', () => {
        expect(ConfigReducer(undefined, undefined)).toEqual({ locale: 'en' });
    });

    test('Should handle CHANGE_LOCALE action type', () => {
        const previousState = { locale: 'es' };
        const action = {
            type: ConfigTypes.CHANGE_LOCALE,
            locale: 'en',
        };
        expect(ConfigReducer(previousState, action)).toEqual({
            locale: 'en',
        });
    });
});
