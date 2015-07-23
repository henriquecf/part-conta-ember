export default function() {
  
  this.namespace = '/api';

  this.get('/invoices', function() {
    return {
      "invoices": [{"id":1084,"value":"287.24","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Webfaction","updated_at":"2015-07-15T19:00:15.190-03:00","user_id":2,"group_id":4},{"id":1077,"value":"15.4","category":"Alimentação","date":"2015-07-15","revenue":false,"description":"Supermercado","updated_at":"2015-07-15T14:13:25.126-03:00","user_id":38,"group_id":1},{"id":1085,"value":"26.37","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Fnac","updated_at":"2015-07-15T19:00:41.275-03:00","user_id":38,"group_id":2},{"id":1083,"value":"54.26","category":"Saúde e Beleza","date":"2015-07-15","revenue":false,"description":"Farmacia","updated_at":"2015-07-15T19:00:00.256-03:00","user_id":37,"group_id":2},{"id":1082,"value":"27.21","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Santander","updated_at":"2015-07-15T18:58:25.667-03:00","user_id":38,"group_id":2},{"id":1080,"value":"329.9","category":"Moradia","date":"2015-07-15","revenue":false,"description":"Colchao","updated_at":"2015-07-15T18:56:42.328-03:00","user_id":38,"group_id":2},{"id":1078,"value":"1.8","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Bb","updated_at":"2015-07-15T16:25:12.641-03:00","user_id":38,"group_id":2},{"id":1076,"value":"19.9","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Sicoob","updated_at":"2015-07-14T21:26:27.532-03:00","user_id":38,"group_id":2},{"id":1090,"value":"900.35","category":"Receita","date":"2015-07-15","revenue":true,"description":"Ageco","updated_at":"2015-07-15T19:26:26.658-03:00","user_id":39,"group_id":4},{"id":1089,"value":"33.45","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Webfaction","updated_at":"2015-07-15T19:15:47.532-03:00","user_id":39,"group_id":4},{"id":1086,"value":"49.0","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Template","updated_at":"2015-07-15T19:06:25.243-03:00","user_id":2,"group_id":4},{"id":150,"value":"108.6","category":"Diversos","date":"2015-07-15","revenue":false,"description":"Template","updated_at":"2015-07-15T19:05:50.625-03:00","user_id":1,"group_id":4},{"id":1081,"value":"22.98","category":"Alimentação","date":"2015-07-15","revenue":false,"description":"Supermercado","updated_at":"2015-07-15T18:57:02.131-03:00","user_id":38,"group_id":1},{"id":1075,"value":"14.0","category":"Alimentação","date":"2015-07-14","revenue":false,"description":"Lanche","updated_at":"2015-07-14T18:30:22.127-03:00","user_id":38,"group_id":1},{"id":1074,"value":"2600.0","category":"Diversos","date":"2015-07-14","revenue":false,"description":"Casamento","updated_at":"2015-07-14T18:29:52.905-03:00","user_id":38,"group_id":2},{"id":1073,"value":"50.0","category":"Diversos","date":"2015-07-12","revenue":false,"description":"Fotos","updated_at":"2015-07-12T20:14:17.963-03:00","user_id":38,"group_id":2},{"id":1072,"value":"20.0","category":"Receita","date":"2015-07-12","revenue":true,"description":"Bonus","updated_at":"2015-07-15T19:26:26.695-03:00","user_id":38,"group_id":2},{"id":1069,"value":"23.72","category":"Alimentação","date":"2015-07-10","revenue":false,"description":"Supermercado","updated_at":"2015-07-09T21:07:02.057-03:00","user_id":38,"group_id":1},{"id":1070,"value":"20.0","category":"Alimentação","date":"2015-07-10","revenue":false,"description":"Supermercado","updated_at":"2015-07-10T11:44:37.636-03:00","user_id":38,"group_id":1},{"id":1071,"value":"225.0","category":"Diversos","date":"2015-07-10","revenue":false,"description":"Seguro kely","updated_at":"2015-07-10T11:45:02.989-03:00","user_id":38,"group_id":2},{"id":1068,"value":"59.9","category":"Moradia","date":"2015-07-10","revenue":false,"description":"Churrasqueira","updated_at":"2015-07-09T21:06:22.056-03:00","user_id":38,"group_id":2},{"id":1067,"value":"10.0","category":"Alimentação","date":"2015-07-09","revenue":false,"description":"Lanche","updated_at":"2015-07-09T14:55:30.948-03:00","user_id":38,"group_id":1},{"id":1066,"value":"87.7","category":"Transporte","date":"2015-07-09","revenue":false,"description":"Seguro Carro","updated_at":"2015-07-09T14:55:30.970-03:00","user_id":38,"group_id":2},{"id":1063,"value":"23.14","category":"Alimentação","date":"2015-07-06","revenue":false,"description":"Supermercado","updated_at":"2015-07-09T14:55:30.987-03:00","user_id":38,"group_id":1},{"id":1065,"value":"110.0","category":"Moradia","date":"2015-07-06","revenue":false,"description":"Diarista","updated_at":"2015-07-09T14:55:30.999-03:00","user_id":38,"group_id":1},{"id":1064,"value":"21.09","category":"Alimentação","date":"2015-07-06","revenue":false,"description":"Supermercado","updated_at":"2015-07-09T14:55:31.011-03:00","user_id":38,"group_id":1},{"id":1062,"value":"88.18","category":"Transporte","date":"2015-07-04","revenue":false,"description":"Combustivel","updated_at":"2015-07-09T14:55:31.113-03:00","user_id":38,"group_id":2},{"id":1060,"value":"252.89","category":"Educação","date":"2015-07-04","revenue":false,"description":"Estacio","updated_at":"2015-07-09T14:55:31.102-03:00","user_id":3,"group_id":2},{"id":1059,"value":"5765.13","category":"Receita","date":"2015-07-04","revenue":true,"description":"Crea","updated_at":"2015-07-15T19:26:26.720-03:00","user_id":3,"group_id":2},{"id":1057,"value":"41.41","category":"Alimentação","date":"2015-07-04","revenue":false,"description":"Supermercado","updated_at":"2015-07-09T14:55:31.049-03:00","user_id":38,"group_id":2},{"id":1061,"value":"70.0","category":"Moradia","date":"2015-07-04","revenue":false,"description":"Casa","updated_at":"2015-07-09T14:55:31.034-03:00","user_id":38,"group_id":2},{"id":1058,"value":"391.72","category":"Alimentação","date":"2015-07-04","revenue":false,"description":"Supermercado","updated_at":"2015-07-09T14:55:31.072-03:00","user_id":38,"group_id":1},{"id":1056,"value":"51.0","category":"Lazer","date":"2015-07-03","revenue":false,"description":"Lazer","updated_at":"2015-07-09T14:55:31.125-03:00","user_id":38,"group_id":1},{"id":1055,"value":"15.0","category":"Roupas e Acessórios","date":"2015-07-03","revenue":false,"description":"Roupas","updated_at":"2015-07-09T14:55:31.140-03:00","user_id":3,"group_id":2},{"id":1053,"value":"79.8","category":"Moradia","date":"2015-07-02","revenue":false,"description":"Gvt","updated_at":"2015-07-09T14:55:31.153-03:00","user_id":38,"group_id":1},{"id":1054,"value":"4.5","category":"Alimentação","date":"2015-07-02","revenue":false,"description":"Lanche","updated_at":"2015-07-09T14:55:31.170-03:00","user_id":38,"group_id":1}],"users":[{"id":2,"name":"Ivan","image":"https://lh5.googleusercontent.com/-YFBwOgHuU-U/AAAAAAAAAAI/AAAAAAAAAGM/lQg_h8poBuQ/photo.jpg?sz=50","email":"ivan.eng.controle@gmail.com"},{"id":38,"name":"Coletivo","image":"https://lh3.googleusercontent.com/7i1EumK8mhat4OnZjKMWsT3CoZgYWC6y3GT5ZGvZPjnS=s695-no","email":"coletivo@coletivo.com"},{"id":37,"name":"Bruno","image":null,"email":"bruno@bruno.com"},{"id":39,"name":"Ganhos TI","image":null,"email":"ganhos-ti@example.com"},{"id":1,"name":"Henrique","image":"https://lh5.googleusercontent.com/-uJMUOzM72c0/AAAAAAAAAAI/AAAAAAAAO-g/-60r7vw03NI/photo.jpg?sz=50","email":"elo.henrique@gmail.com"},{"id":3,"name":"Emely","image":"https://lh3.googleusercontent.com/-jQWvf33SJKQ/AAAAAAAAAAI/AAAAAAAALm4/CD46r9Jgvi8/photo.jpg?sz=50","email":"emelygomesgo@gmail.com"}],"groups":[{"id":4,"name":"Malucos TI"},{"id":1,"name":"Nossa Casa"},{"id":2,"name":"Familia Faria"}]
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
