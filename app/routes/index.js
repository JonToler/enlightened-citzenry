import Ember from 'ember';


export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      chambers: ["","null","house","senate","joint"]
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
