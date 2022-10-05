Algoritmo Primer_ejercicio
	definir sexo Como Caracter	
	definir altura Como Real
	definir alturapromedio Como Real
	definir alturapromedioMujeres Como Real
	Definir alturapromediohombres Como Real
	Alturamasbajahombre=999
	alturamasaltamujer=0
	Acumulador=0
	ContadorMuejeres=0
	AcumuladorMujer=0
	ContadorHombres=0
	AcumuladorHombres=0
	Para i=0 Hasta 3 Con Paso 1 Hacer
		escribir "ingrese sexo (M/H) y luego su altura"
		Leer sexo,altura;
		Acumulador=Acumulador+altura;
		si sexo == "M" Entonces
			ContadorMuejeres=ContadorMuejeres+1;
			AcumuladorMujer=AcumuladorMujer+altura;
		FinSi
		si sexo == "H" Entonces
			ContadorHombres=ContadorHombres+1;
			AcumuladorHombres=AcumuladorHombres+altura;
		FinSi
		si (sexo=="H") y (altura<alturamasbajahombre) Entonces
			alturamasbajahombre=altura;
		FinSi
		si (sexo=="M") y (altura>alturamasaltamujer) Entonces
			alturamasaltamujer=altura;
		FinSi
		
	Fin Para
	Escribir "El promedio de altura de las personas son: " Acumulador/i
	Escribir "El promedio de altura de las mujeres son: " AcumuladorMujer/ContadorMuejeres
	Escribir "El promedio de altura de las hombres son: " AcumuladorHombres/ContadorHombres
	Escribir "La altura del hombre mas bajo es: " alturamasbajahombre
	Escribir  "La altura mas alta de mujer es: " alturamasaltamujer
	
	
FinAlgoritmo
