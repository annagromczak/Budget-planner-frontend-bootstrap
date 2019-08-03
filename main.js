function pobierzDate()
{	
	var saldo = 1250;
	var dzisiaj = new Date();
		
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth() + 1;
	var rok = dzisiaj.getFullYear();
	
	if (saldo > 0)
	{
		document.getElementById("podsumowanie").innerHTML = "Saldo na dzień: " + dzien + "-" + miesiac + "-" + rok + " wynosi: " + saldo + " PLN. Gratulacje! Świetnie zarządzasz finansami.";
	}
	else if (saldo == 0)
	{
		document.getElementById("podsumowanie").innerHTML = "Saldo na dzień: " + dzien + "-" + miesiac + "-" + rok + " wynosi: " + saldo + " PLN.";
	}
	else if (saldo < 0)
	{
		document.getElementById("podsumowanie").innerHTML = "Saldo na dzień: " + dzien + "-" + miesiac + "-" + rok + " wynosi: " + saldo + " PLN. Uważaj, wpadasz w długi!";
	}
}

function stanSalda()
{	
	var saldo = 1250;
	
	if (saldo > 0)
	{
		document.getElementById("podsumowanieSalda").innerHTML = "Twoje saldo wynosi: " + saldo + " PLN. Gratulacje! Świetnie zarządzasz finansami.";
	}
	else if (saldo == 0)
	{
		document.getElementById("podsumowanieSalda").innerHTML = "Twoje saldo wynosi: " + saldo + " PLN.";
	}
	else if (saldo < 0)
	{
		document.getElementById("podsumowanieSalda").innerHTML = "Twoje saldo wynosi: " + saldo + " PLN. Uważaj, wpadasz w długi!";
	}
}