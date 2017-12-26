import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cars', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:car_id'});
  });
  this.route('users');
});

export default Router;
