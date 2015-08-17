import DS from 'ember-data';
import Ember from 'ember';
import momentFormat from 'ember-moment/computeds/format';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  category: DS.attr('string'),
  value: DS.attr('number'),
  group: DS.belongsTo('group', {async: true}),
  user: DS.belongsTo('user', {async: true}),
  date: DS.attr('string'),
  revenue: DS.attr('boolean'),
  description: DS.attr('string'),
  updatedAt: DS.attr('date'),
  
  formattedDate: momentFormat('date', 'DD/MM/YYYY'),
  
  categoryAbbrev: Ember.computed('category', function() {
    return this.get('category').slice(0,2);
  }),
  
  dateMonth: momentFormat('date', 'MM'),
  
  dateYear: momentFormat('date', 'YYYY'),
  
  categoryColor: Ember.computed('category', function(){
    var colorsHash = {
      "Alimentação": "#ff9100","Educação": "#4527a0", "Lazer": "#536dfe",
      "Moradia": "#795548", "Roupas e Acessórios": "#c51162", "Receita": "#009688",
      "Transporte": "#1565c0", "Diversos": "#78909c", "Saúde e Beleza": "#43a047"
    };
    return colorsHash[this.get('category')];
  }),
  
  validations: {
    value: {
      presence: true,
      numericality: true
    },
    category: {
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
