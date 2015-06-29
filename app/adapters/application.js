import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  // Uncomment the following lines when using the local API
  //host: 'http://localhost:3000',
  //headers: {
  //  "Authorization": "Basic ZWxvLmhlbnJpcXVlQGdtYWlsLmNvbTpoYzAzMTE5MA=="
  //}
});
