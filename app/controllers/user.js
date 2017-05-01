import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  email: '',

  actions : {
    save() {
      let post = this.store.createRecord('user', {
        name: this.get('name'),
        email: this.get('email')
      });
      post.save();
    }
  }
});
