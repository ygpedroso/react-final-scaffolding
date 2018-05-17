import ConfigTypes from './types';

describe('Suite of Tests for the Config Actions', () => {
    test('Ensure that every config type have been tested', () => {
        expect(Object.keys(ConfigTypes).length).toBe(1);
    });

    test('Check that CHANGE_LOCALE key has correct value', () => {
        expect(ConfigTypes.CHANGE_LOCALE).toBe('CHANGE_LOCALE');
    });
});
