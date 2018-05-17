import * as reactIntl from 'react-intl';
import en from 'react-intl/locale-data/en';
import * as i18n from './index';

describe('Suite of test for i18n Configuration', () => {
    test('Ensure that every language have been tested', () => {
        expect(Object.keys(i18n.messages).length).toBe(1);
    });

    test('Function: "i18nInitialSetup" should add the locales correctly', () => {
        const spy = jest.spyOn(reactIntl, 'addLocaleData');
        i18n.i18nInitialSetup();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(en);
    });

    test('To have property "message" with the translation messages keys', () => {
        expect(i18n).toHaveProperty('messages');
        expect(i18n.messages).toHaveProperty('en');
    });
});
