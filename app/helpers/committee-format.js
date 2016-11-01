import Ember from 'ember';

export function committeeFormat(params/*, hash*/) {

  console.log(params[0]);
  if(params[0]) {
    return Ember.String.htmlSafe('There are subcommittees for this committee');
  }else{
    return Ember.String.htmlSafe('There are no subcommittees for this committee');
  }
}

export default Ember.Helper.helper(committeeFormat);
