var i = 0;

start = setInterval(wyswietlanie, 1000)

function wyswietlanie() {
    wyswietl5 = setInterval(printer, 10);
}

function printer() {
    console.log("a");
    i++;
    if (i == 5) {
        clearInterval(wyswietl5);
        i = 0;
    }
}