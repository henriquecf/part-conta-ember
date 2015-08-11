import Ember from 'ember';

export default Ember.Mixin.create({
  renderTemplate() {
    this.render();
    this.render('cancel-button', {outlet: 'menu-action'});
  }
});
