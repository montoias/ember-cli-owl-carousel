import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      options: ['A', 'B', 'C', 'D', 'F', 'G']
    };
  }
});
