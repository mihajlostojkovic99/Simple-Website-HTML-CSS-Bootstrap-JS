function proveri() {
    var ime = document.mojaforma.ime.value
    var prezime = document.mojaforma.prezime.value
    var tip = document.mojaforma.tip.value
    var br = document.mojaforma.br.value
    var tel = document.mojaforma.tel.value
    
    if (ime=="" || prezime=="" || tip == "" || br == "" || tel=="") {
        alertify.warning("Please fill all the fields!")
        return
    }

    var telRegEx = /^(((064)|(065)|(063)|(061))\/\d{4}-\d{3})$/
    if (!telRegEx.test(tel)) {
        alertify.error('Wrong phone number format')
        return
    }

    var brNocenja = parseInt(br) 
    var racun = 0
    var status = false
    if (tip == "Hotel" && brNocenja <= 2) {
        racun = brNocenja*2000
        status = true
    } else if (tip == "Villa" && brNocenja <= 5) {
        racun = brNocenja*1500
        status = true
    } else if (tip == "Village house" && brNocenja <= 10) {
        racun = brNocenja*1000
        status = true
    }

    if (!status) {
        alertify.error("That number of nights is not available at this accomodation")
    } else {
        alertify.success("Your reservation is successful! Dear " + ime + " " + prezime + ",<br/>Your total ammount to pay is " + racun + 
            ".<br/>We will contact you via your phone number " + tel + " for further information.<br/>Have a nice stay!<br/>(Click this message to dismiss it)", 0)
    }
}