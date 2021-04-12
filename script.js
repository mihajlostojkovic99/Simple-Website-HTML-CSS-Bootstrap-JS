function proveri() {
    var ime = document.mojaforma.ime.value
    var prezime = document.mojaforma.prezime.value
    var tip = document.mojaforma.tip.value
    var br = document.mojaforma.br.value
    var tel = document.mojaforma.tel.value
    
    if (ime=="" || prezime=="" || tip == "" || br == "" || tel=="") {
        alertify.warning("Unesite sva polja!")
        return
    }

    var telRegEx = /^(((064)|(065)|(063)|(061))\/\d{4}-\d{3})$/
    if (!telRegEx.test(tel)) {
        alertify.error('Greska za telefon')
        return
    }

}