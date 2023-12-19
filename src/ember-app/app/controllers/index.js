import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.primer.caption'),
          title: i18n.t('forms.application.sitemap.primer.title'),
          children: [{
            link: 'i-i-s-primer-forest-l',
            caption: i18n.t('forms.application.sitemap.primer.i-i-s-primer-forest-l.caption'),
            title: i18n.t('forms.application.sitemap.primer.i-i-s-primer-forest-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-primer-animal-l',
            caption: i18n.t('forms.application.sitemap.primer.i-i-s-primer-animal-l.caption'),
            title: i18n.t('forms.application.sitemap.primer.i-i-s-primer-animal-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-primer-country-l',
            caption: i18n.t('forms.application.sitemap.primer.i-i-s-primer-country-l.caption'),
            title: i18n.t('forms.application.sitemap.primer.i-i-s-primer-country-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})