export default function(){
  var duration = 1000;
  
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('invoices'),
    this.use('toLeft', {duration: duration}),
    this.reverse('toRight', {duration: duration})
  );
  
  this.transition(
    this.fromRoute('invoices'),
    this.toRoute('reports'),
    this.use('toLeft', {duration: duration}),
    this.reverse('toRight', {duration: duration})
  );
  
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('reports'),
    this.use('toLeft', {duration: duration}),
    this.reverse('toRight', {duration: duration})
  );
  
  this.transition(
    this.fromRoute('reports'),
    this.toRoute('report'),
    this.use('toLeft', {duration: duration}),
    this.reverse('toRight', {duration: duration})
  );
}
