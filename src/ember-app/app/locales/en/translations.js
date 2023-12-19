import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrimerAnimalLForm from './forms/i-i-s-primer-animal-l';
import IISPrimerCountryLForm from './forms/i-i-s-primer-country-l';
import IISPrimerForestLForm from './forms/i-i-s-primer-forest-l';
import IISPrimerAnimalEForm from './forms/i-i-s-primer-animal-e';
import IISPrimerCountryEForm from './forms/i-i-s-primer-country-e';
import IISPrimerForestEForm from './forms/i-i-s-primer-forest-e';
import IISPrimerAnimalModel from './models/i-i-s-primer-animal';
import IISPrimerBurrowModel from './models/i-i-s-primer-burrow';
import IISPrimerCountryModel from './models/i-i-s-primer-country';
import IISPrimerForestModel from './models/i-i-s-primer-forest';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-primer-animal': IISPrimerAnimalModel,
    'i-i-s-primer-burrow': IISPrimerBurrowModel,
    'i-i-s-primer-country': IISPrimerCountryModel,
    'i-i-s-primer-forest': IISPrimerForestModel
  },

  'application-name': 'Primer',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Primer',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primer',
          title: 'Primer'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        primer: {
          caption: 'Primer',
          title: 'Primer',
          'i-i-s-primer-forest-l': {
            caption: 'Forest',
            title: ''
          },
          'i-i-s-primer-animal-l': {
            caption: 'Animal',
            title: ''
          },
          'i-i-s-primer-country-l': {
            caption: 'Country',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-primer-animal-l': IISPrimerAnimalLForm,
    'i-i-s-primer-country-l': IISPrimerCountryLForm,
    'i-i-s-primer-forest-l': IISPrimerForestLForm,
    'i-i-s-primer-animal-e': IISPrimerAnimalEForm,
    'i-i-s-primer-country-e': IISPrimerCountryEForm,
    'i-i-s-primer-forest-e': IISPrimerForestEForm
  },

});

export default translations;
