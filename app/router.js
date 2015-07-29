import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('invoices');
  this.route('invoice', {path: '/invoices/:id'});
  this.route('dashboard');
  this.route('new-invoice');
  this.route('login');
});

export default Router;
