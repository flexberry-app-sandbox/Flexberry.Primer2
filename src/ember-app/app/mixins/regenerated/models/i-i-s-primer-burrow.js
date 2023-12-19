import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  forest: DS.belongsTo('i-i-s-primer-forest', { inverse: null, async: false }),
  animal: DS.belongsTo('i-i-s-primer-animal', { inverse: 'burrow', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-primer-burrow.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  forest: {
    descriptionKey: 'models.i-i-s-primer-burrow.validations.forest.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  animal: {
    descriptionKey: 'models.i-i-s-primer-burrow.validations.animal.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BurrowE', 'i-i-s-primer-burrow', {
    name: attr('Name', { index: 0 }),
    forest: belongsTo('i-i-s-primer-forest', 'Forest', {
      name: attr('Name', { index: 2, hidden: true }),
      country: belongsTo('i-i-s-primer-country', '', {
        name: attr('Country', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1 })
  });
};
