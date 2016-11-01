import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    chamberLookup() {
      var params = {
        chamber: this.get('chambers.tagType')
      };
      this.sendAction('chamberLookup', params);
    },
    committeeLookup() {
      var params = {
        committee_id: this.get('committees.tagType')
      };
      console.log(params);
      this.sendAction('committeeLookup', params);
    },
    selectTagType(value, component) {
      this.set('chambers.tagType', value);
    },
    selectCommiteeType(value, component) {
      console.log(value);
      this.set('committees.tagType', value);
    },
  }
});
