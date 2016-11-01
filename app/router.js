import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee-results', {path: '/results/:chamber'});
  this.route('subcommittee-results', {path: '/subcommittee-results/:committee_id'});
});

export default Router;
