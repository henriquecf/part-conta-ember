import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import CancelButtonMixin from '../mixins/cancel-button';

export default Ember.Route.extend(AuthenticatedRouteMixin, CancelButtonMixin);
