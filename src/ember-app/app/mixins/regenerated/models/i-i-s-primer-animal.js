import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  burrow: DS.hasMany('i-i-s-primer-burrow', { inverse: 'animal', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-primer-animal.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  burrow: {
    descriptionKey: 'models.i-i-s-primer-animal.validations.burrow.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AnimalE', 'i-i-s-primer-animal', {
    name: attr('Name', { index: 0 }),
    burrow: hasMany('i-i-s-primer-burrow', 'Burrow', {
      name: attr('Name', { index: 0 }),
      forest: belongsTo('i-i-s-primer-forest', 'Forest', {
        name: attr('Name', { index: 2, hidden: true }),
        country: belongsTo('i-i-s-primer-country', '', {
          name: attr('Country', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 1 })
    })
  });

  modelClass.defineProjection('AnimalL', 'i-i-s-primer-animal', {
    name: attr('Name', { index: 0 })
  });
};
