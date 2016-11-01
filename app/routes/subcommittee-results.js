import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    console.log(params);
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id='+ params.committee_id + '&apikey=' + key;

    var url2 = 'http://congress.api.sunlightfoundation.com/committees?&committee_id='+ params.committee_id + '&apikey=' + key;
    console.log(url2);
    return Ember.RSVP.hash({
      parentCommittee: Ember.$.getJSON(url2).then(function(responseJSON) {
        return responseJSON.results
      }),
      subcommittees: Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results
      })
  });
}
});
