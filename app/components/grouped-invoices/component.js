import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mdl-cell', 'mdl-cell--4-col'],
  
  totalValue: 0,
  isRevenue: false,
  fieldName: null,
  showGraph: true,
  chartOptions: {animation: false, showTooltips: false, legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><a href='<%='/#/report?invoiceField=' + segments[i].label.split(':')[0] + '&isRevenue=' + segments[i].label.split(':')[2] + '&fieldValue=' + segments[i].label.split(':')[1]%>'><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label.split(':')[1]%><%}%> R$ <%=segments[i].value.toFixed(2)%></li></a><%}%></ul>"},
  
  _expensesOrRevenue: Ember.computed('list', 'isRevenue', function() {
    var self = this;
    return this.get('list').filter(function(invoice) {
      return invoice.get('revenue') === self.get('isRevenue');
    });
  }),
  
  groupedInvoices: Ember.computed('_expensesOrRevenue', 'groupByField', function() {
    var grouped = {};
    var totalValue = 0;
    var field = this.get('groupByField');
    var showGraph = this.get('showGraph');
    var fieldName = this.get('fieldName') || field;
    var isRevenue = this.get('isRevenue');
    var colorsHash = {"Alimentação": "#ff9100","Educação": "#4527a0", "Lazer": "#536dfe",
                      "Moradia": "#795548", "Roupas e Acessórios": "#c51162", "Receita": "#009688",
                      "Transporte": "#1565c0", "Diversos": "#78909c", "Saúde e Beleza": "#43a047"};
    this.get('_expensesOrRevenue').forEach(function(invoice) {
      var value = Number(invoice.get('value'));
      var typeExpenseValue = showGraph ? (fieldName + ':' + invoice.get(fieldName) + ':' + isRevenue) : invoice.get(fieldName);
      if(invoice.get(fieldName) in grouped) {
        grouped[invoice.get(fieldName)].value += value;
      }
      else {
        var color;
        if(field === "user" || field === "group") {
          color = invoice.get(field + '.color') || "grey"; 
        }
        else {
          color = colorsHash[invoice.get(field)] || "grey";
        }
        grouped[invoice.get(fieldName)] = {label: typeExpenseValue, value: value, color: color};
      }
      totalValue += value;
    });
    this.set('totalValue', totalValue);
    var groupedList = Object.keys(grouped).map(function(key) { return grouped[key]; });
    return groupedList.sortBy(['value']).reverse();
  }),
  
  slicedGroupedInvoices: Ember.computed('groupedInvoices.@each.value', 'listSize', function() {
    var listSize = this.get('listSize');
    var list = this.get('groupedInvoices');
    if(listSize) {
      list = list.filter(function(g) {return g.label;}).slice(0, listSize);
    }
    return list;
  })
});
