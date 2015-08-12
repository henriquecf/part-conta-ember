import Ember from 'ember';

export default Ember.Mixin.create({
  renderTemplate() {
    this.render();
    this.render('back-button', {outlet: 'menu-action', controller: 'application'});
  }
});
