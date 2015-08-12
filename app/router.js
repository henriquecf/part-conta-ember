import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('new-invoice', {path: '/invoices/new'});
  this.route('edit-invoice', {path: '/invoices/:id/edit'});
  this.route('login');
  this.route('report');
  this.route('invoices');
  this.route('reports');
});

export default Router;
