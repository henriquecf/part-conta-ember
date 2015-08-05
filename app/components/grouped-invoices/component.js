import Ember from 'ember';

export default Ember.Component.extend({
  totalValue: 0,
  isRevenue: false,
  fieldName: null,
  showGraph: true,
  chartOptions: {tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%=value.toFixed(2)%>", legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><a href='<%=window.location.href.split('?')[0] + '?typeValue=' + segments[i].label%>'><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%> R$ <%=segments[i].value.toFixed(2)%></li></a><%}%></ul>"},
  
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
    var fieldName = this.get('fieldName') || field;
    var colorsHash = {"Alimentação": "#ff9100","Educação": "#4527a0", "Lazer": "#536dfe",
                      "Moradia": "#795548", "Roupas e Acessórios": "#c51162", "Receita": "#009688",
                      "Transporte": "#1565c0", "Diversos": "#78909c", "Saúde e Beleza": "#43a047"};
    this.get('_expensesOrRevenue').forEach(function(invoice) {
      var value = Number(invoice.get('value'));
      if(invoice.get(field) in grouped) {
        grouped[invoice.get(field)].value += value;
      }
      else {
        var color;
        if(field === "user" || field === "group") {
          color = invoice.get(field + '.color') || "grey"; 
        }
        else {
          color = colorsHash[invoice.get(field)] || "grey";
        }
        grouped[invoice.get(field)] = {label: invoice.get(fieldName), value: value, color: color};
      }
      totalValue += value;
    });
    this.set('totalValue', totalValue);
    var groupedList = Object.keys(grouped).map(function(key) { return grouped[key]; });
    return groupedList.sortBy(['value']).reverse();
  })
});
