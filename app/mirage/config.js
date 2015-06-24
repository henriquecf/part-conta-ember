export default function() {

  this.get('/invoices', function() {
    return {
      invoices: [
        {"id":1049,"category":"Restaurante","value":"7.87","date":"2015-06-23","revenue":false,"created_at":"2015-06-23T19:50:35.491-03:00","updated_at":"2015-06-23T19:50:35.491-03:00","user":{"name":"Emely","image":"https://lh3.googleusercontent.com/-jQWvf33SJKQ/AAAAAAAAAAI/AAAAAAAALm4/CD46r9Jgvi8/photo.jpg?sz=50"},"group":1},
        {"id":1048,"category":"Supermercado","value":"56.45","date":"2015-06-23","revenue":false,"created_at":"2015-06-23T19:50:15.416-03:00","updated_at":"2015-06-23T19:50:15.416-03:00","user":{"name":"Coletivo","image":"https://lh3.googleusercontent.com/7i1EumK8mhat4OnZjKMWsT3CoZgYWC6y3GT5ZGvZPjnS=s695-no"},"group":1}
      ],
      groups: [
        {"id": 1, "name": "Nossa Casa"}
      ]
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
