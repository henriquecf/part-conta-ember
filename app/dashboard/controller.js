import Ember from 'ember';
import InvoicesFilter from '../mixins/invoices-filter';
import UserUtils from '../mixins/user-utils';

export default Ember.Controller.extend(InvoicesFilter, UserUtils);
