function mensaje() {
	alert("Heeey, me estas haciendo cosquillas")
}

/*
	console.log("variable: " + variable );
	let variablelocal = 177n;

	console.log('Llamó la funcion mensage()! ' + variablelocal);
	alert("Heeey, me estás haciendo cosquillas");
	*/
//

const obj = {
	first: 'Jane', // property
	last: 'Doe', // property
	getFullName() { // property (method)
		return this.first + ' ' + this.last;
	},
};
// Getting a property value

// Setting a property value
obj.first = 'Janey';
// Calling the method
if (obj.getFullName() == 'Janey Doe')
	console.log("Nombre es Janey Doe");
else
	console.log("No coinciden los datos");

console.log('ab' + 'cd', Number('123'));

function cambiarTexto() {
	let btn = document.getElementById("btnMensaje");
	btn.value = "Cambiando el texto del boton ";
}

function agregarElementos() {
	let sel = document.getElementById("lista");
	let opt = document.createElement("option");
	let dato = document.getElementById("datos").value;
	opt.appendChild(document.createTextNode(dato));
	opt.value = dato;
	sel.appendChild(opt);

}

function loadData(){
	let estudiantes=["Marlon Mateos","Alejandro Leon","David Alexis",
					"Samuel Sosa","Javier Emannuel","Deysi Pérez",
					"Efrain Díaz","Rogelio Zavaleta","Isabel Zarate",
					"Marco Ramirez","Jennifer", "Erick Cruz"
					];
	let sel = document.getElementById("estudiantes");
	//--- vaciar la lista actual
	document.querySelector('#estudiantes').innerHTML = '';

	estudiantes.forEach(valor =>{
		let opt = document.createElement("option");
		opt.appendChild(document.createTextNode(valor));
		opt.value= valor;
		sel.appendChild(opt);
	});				
}
