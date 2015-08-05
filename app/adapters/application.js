import ActiveModelAdapter from 'active-model-adapter';
import ENV from '../config/environment';

export default ActiveModelAdapter.extend({
  namespace: 'api',
  host: ENV.apiHost,
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
