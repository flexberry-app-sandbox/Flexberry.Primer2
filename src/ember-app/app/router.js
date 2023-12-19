import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-primer-animal-l');
  this.route('i-i-s-primer-animal-e',
  { path: 'i-i-s-primer-animal-e/:id' });
  this.route('i-i-s-primer-animal-e.new',
  { path: 'i-i-s-primer-animal-e/new' });
  this.route('i-i-s-primer-country-l');
  this.route('i-i-s-primer-country-e',
  { path: 'i-i-s-primer-country-e/:id' });
  this.route('i-i-s-primer-country-e.new',
  { path: 'i-i-s-primer-country-e/new' });
  this.route('i-i-s-primer-forest-l');
  this.route('i-i-s-primer-forest-e',
  { path: 'i-i-s-primer-forest-e/:id' });
  this.route('i-i-s-primer-forest-e.new',
  { path: 'i-i-s-primer-forest-e/new' });
});

export default Router;
