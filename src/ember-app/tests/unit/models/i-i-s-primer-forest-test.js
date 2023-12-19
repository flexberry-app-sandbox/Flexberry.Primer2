import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primer-forest', 'Unit | Model | i-i-s-primer-forest', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-primer-animal',
    'model:i-i-s-primer-burrow',
    'model:i-i-s-primer-country',
    'model:i-i-s-primer-forest',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
