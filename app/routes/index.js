import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(){
    var key = config.myApiKey;
    console.log("test");
    var url = 'http://congress.api.sunlightfoundation.com/committees?&apikey=' +key;
    //var committeesObj = {};
    // return
    return Ember.RSVP.hash({
      chambers: ["","null","house","senate","joint"],
      committees: Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON.results);
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
  }
});
