var app = new Vue({
	el: '#app',
	data: {
		pizze: [
			{
				nome: 'Margherita',
				ingredienti: ['Pomodoro', 'Mozzarella'],
				descrizione: 'Tipica pizza italiana',
				immagine: 'img/pizza-margherita.jpg',
				prezzo: "4.50"
			}, 
			{
				nome: 'Marinara',
				ingredienti: ['Pomodoro', 'Aglio', 'Acciughe'],
				descrizione: 'La pizza più semplice',
				immagine: 'img/pizza-marinara.jpg',
				prezzo: "4.00"
			},
			{
				nome: 'Tonno e Cipolla',
				ingredienti: ['Pomodoro', 'Mozzarella', 'Tonno', 'Cipolla'],
				descrizione: 'La pizza leggera',
				immagine: 'img/pizza-tonno-e-cipolla.jpg',
				prezzo: "6.00"
			}
		],
		risotti: [
			{
				nome: 'Riso cantonese',
				ingredienti: ['Riso Basmati', 'Piselli', 'Prosciutto cotto', 'Uovo', 'Salsa di soia'],
				descrizione: 'Riso fritto orientale',
				immagine: 'img/riso-alla-cantonese.jpg',
				prezzo: "8.00"
			},
			{
				nome: 'Risotto alla milanese',
				ingredienti: ['Riso', 'Burro', 'Vino bianco', 'Brodo di carne', 'Cipolla', 'Zafferano', 'Parmiggiano'],
				descrizione: 'Il risotto allo zafferano',
				immagine: 'img/risotto-alla-milanese.jpg',
				prezzo: '8.00'
			}
		],
		cucina: ['Mozzarella', 'Pomodoro', 'Patatine fritte', 'Rucola', 'Cipolla', 'Acciughe', 'Aglio']
	},
    methods: {
      disponibile: function(piatto, frigo) {
		  for(var i = 0; i < piatto.length; i++) {
			  if (!frigo.includes(piatto[i])) {
				  return false;
			  }
		  }
		  return true;
      },
	  esaurisci: function(elemento, cucina) {
		  for(var i = 0; i < cucina.length; i++){ 
			  if ( cucina[i] == elemento) { 
				  cucina.splice(i, 1); 
			  }
		  }
	  },
	  spesa: function(elemento, cucina) {
		  cucina.push(elemento.value);
		  elemento.value = "";
	  }
    }
});