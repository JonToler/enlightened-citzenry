import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(){
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&per_page=50&apikey=' +key;
    return Ember.RSVP.hash({
      chambers: ["","null","house","senate","joint"],
      committees: Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  },
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    chamberLookup(params) {
      this.transitionTo('committee-results', params.chamber);
    },
    committeeLookup(params){
      this.transitionTo('subcommittee-results', params.committee_id);
    }
  }
});
