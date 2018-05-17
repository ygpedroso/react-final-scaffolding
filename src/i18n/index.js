import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import enMessages from './translations/en_US.json';

export const i18nInitialSetup = () => {
    addLocaleData(en);
};

export const messages = {
    en: enMessages,
};
