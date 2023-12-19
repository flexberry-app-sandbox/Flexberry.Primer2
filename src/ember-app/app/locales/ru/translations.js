import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Primer',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primer',
          title: 'Primer'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
