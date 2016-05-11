import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://api.idescat.cat',
  namespace: '/emex/v1',
  urlForFindAll: function(type) {
    return this.host + this.namespace + '/nodes.json?tipus=mun';
  },
  urlForFindRecord: function(id) {
    return this.host + this.namespace + '/geo/' + id + '.json';
  }
  // handleResponse: function(status, headers, payload, requestData) {
  // 	console.log(status, headers, payload, requestData);
  // 	return this._super(status, headers, payload, requestData);
  // }
});