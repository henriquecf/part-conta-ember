export default function(){
  this.setDefault({duration: 1000});
  
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
    this.toRoute('report'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  
  this.transition(
    this.toRoute('login'),
    this.use('toDown'),
    this.reverse('toUp')
  );
  
  this.transition(
    this.toRoute(['new-invoice', 'edit-invoice']),
    this.use('toUp'),
    this.reverse('crossFade')
  );
}
