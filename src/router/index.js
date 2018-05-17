import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { i18nInitialSetup, messages } from './../i18n';
import App from '../layouts/app';

i18nInitialSetup();

const Router = ({ locale }) => (
    <IntlProvider locale={locale} messages={messages[locale]}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </IntlProvider>
);

Router.propTypes = {
    locale: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        locale: state.config.locale,
    };
}

export default connect(mapStateToProps)(Router);
