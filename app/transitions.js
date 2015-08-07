export default function(){
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('invoices'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  
  this.transition(
    this.fromRoute('invoices'),
    this.toRoute('reports'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('reports'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  
  this.transition(
    this.fromRoute('reports'),
    this.toRoute('report'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  
  this.transition(
    this.hasClass('report-details'),
    this.use('crossFade')
  );
}
