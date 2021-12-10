  
/*
 * World Populution Counter - By JavaScript Kit (http://www.javascriptkit.com)
 * Based on code by Adam Brown
 * This notice MUST stay intact for use
 * Visit JavaScript Kit (http://www.javascriptkit.com) for this script and more
 */

function maind() {
    startdate = new Date()
    now(startdate.getYear(), startdate.getMonth(), startdate.getDate(), startdate.getHours(), startdate
        .getMinutes(), startdate.getSeconds())
}


function ChangeValue(number, pv) {
    numberstring = ""
    var j = 0
    var i = 0
    while (number > 1) {

        numberstring = (Math.round(number - 0.5) % 10) + numberstring
        number = number / 10
        j++
        if (number > 1 && j == 3) {
            numberstring = "," + numberstring
            j = 0
        }
        i++
    }

    numberstring = numberstring

    if (pv == 1) {
        var births = Math.floor(secondsToday() / 0.08);
        var deaths = Math.floor(secondsToday() / 0.11);
        document.getElementById("worldpop").innerHTML = numberstring;
        document.getElementById("birthstoday").innerHTML = numberWithCommas(births);
        document.getElementById("deathstoday").innerHTML = numberWithCommas(deaths);
    }
}


function now(year, month, date, hours, minutes, seconds) {
    startdatum = new Date(year, month, date, hours, minutes, seconds)

    var now = 145500000000.0
    var now2 = 147940000000.0
    var groeipercentage = (now2 - now) / now * 100
    var groeiperseconde = (now * (groeipercentage / 100)) / 365.0 / 24.0 / 60.0 / 60.0
    nu = new Date()
    schuldstartdatum = new Date(96, 1, 1)
    secondenoppagina = (nu.getTime() - startdatum.getTime()) / 1000
    totaleschuld = (nu.getTime() - schuldstartdatum.getTime()) / 1000 * groeiperseconde + now
    ChangeValue(totaleschuld, 1);


    timerID = setTimeout(
        "now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())",
        200)
}

function secondsToday() {
    var now = new Date();
    var then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0);
    var diff = now.getTime() - then.getTime(); // difference in milliseconds
    var secs = diff / 1000;
    return secs
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.onload = maind
