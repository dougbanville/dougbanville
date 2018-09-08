import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'dougbanville/config/environment';

export default  DS.RESTSerializer.extend({
  ajax: Ember.inject.service(),
  query(store, type, query) {
      let url = ""
      if(query.query){
          url = `${ENV.wordpressHost}posts/?slug=${query.query}`
      }else{
          url = `${ENV.wordpressHost}posts/`
      }
    return this.get("ajax").request(`${url}`, {
      dataType: "json",
    });
  }
});
