import mockStore from './../../../tests/mockStore';
import ConfigTypes from './types';
import ConfigActions from './';

describe('Suite of Tests for the Config Actions', () => {
    const store = mockStore({
        config: {
            locale: 'es',
        },
    });
    let expectedActions = [];

    afterEach(() => {
        expectedActions = [];
        store.clearActions();
    });

    test('Action changeLocale should call function with correct parameters', () => {
        const locale = 'en';
        expectedActions = [
            {
                type: ConfigTypes.CHANGE_LOCALE,
                locale,
            },
        ];
        ConfigActions.changeLocale(locale)(store.dispatch);
        expect(store.getActions()).toEqual(expectedActions);
    });
});
