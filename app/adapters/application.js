import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  // Uncomment the following lines when using the local API
  //host: 'http://localhost:3000',
  //headers: {
  //  "Authorization": "Basic ZWxvLmhlbnJpcXVlQGdtYWlsLmNvbTpoYzAzMTE5MA=="
  //}
  
  shouldReloadAll: function(store, snapshotRecordArray) {
    if (snapshotRecordArray.length > 0) {
      return false;    
    } else {
      return true;
    }
  },
  shouldBackgroundReloadAll: function() {
    if (window.navigator.connection === 'none') {
      return false;
    } else {
      return true;
    }
  }
});
