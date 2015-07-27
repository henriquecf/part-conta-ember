import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000',
  buildURL: function(record, suffix) {
    var s = this._super(record, suffix);
    return s + ".json";
  },
  
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
