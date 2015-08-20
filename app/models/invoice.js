import DS from 'ember-data';
import momentFormat from 'ember-moment/computeds/format';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  category: DS.belongsTo('category', {async: true}),
  value: DS.attr('number'),
  group: DS.belongsTo('group', {async: true}),
  user: DS.belongsTo('user', {async: true}),
  date: DS.attr('string'),
  revenue: DS.attr('boolean'),
  description: DS.attr('string'),
  updatedAt: DS.attr('date'),
  
  formattedDate: momentFormat('date', 'DD/MM/YYYY'),
  
  dateMonth: momentFormat('date', 'MM'),
  
  dateYear: momentFormat('date', 'YYYY'),
  
  validations: {
    value: {
      presence: true,
      numericality: true
    },
    'category.content': {
      presence: true
    },
    date: {
      presence: true
    },
    'user.content': {
      presence: true
    },
    'group.content': {
      presence: true
    },
    revenue: {
      inclusion: {
        in: [true, false]
      }
    }
  }
});
