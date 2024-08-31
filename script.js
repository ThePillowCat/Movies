function back() {
  window.location.href = "index.html"
}

function batman() {
  sessionStorage.setItem("movie", "The Dark Knight")
  window.location.href = "batman.html"
}

function ironman() {
  sessionStorage.setItem("movie", "Iron Man")
  window.location.href = "ironman.html"
}

function endgame() {
  sessionStorage.setItem("movie", "End Game")
  window.location.href = "endgame.html"
}

function spiderman() {
  sessionStorage.setItem("movie", "Spider Man")
  window.location.href = "spiderman.html"
}

function venom() {
  sessionStorage.setItem("movie", "Venom")
  window.location.href = "venom.html"
}

function goToTop() {
  document.documentElement.scrollTop = 0
}

function no() {
  if (sessionStorage.getItem("movie") == "The Dark Knight") {
    window.location.href = "batman.html"
  }
  else if (sessionStorage.getItem("movie") == "Iron Man") {
    window.location.href = "ironman.html"
  }
  else if (sessionStorage.getItem("movie") == "End Game") {
    window.location.href = "endgame.html"
  }
  else if (sessionStorage.getItem("movie") == "Spider Man") {
    window.location.href = "spiderman.html"
  }
  else if (sessionStorage.getItem("movie") == "Venom") {
    window.location.href = "venom.html"    
  }
}

function process() {
  let week = document.getElementById("week").value;
  let day = document.getElementById("days").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let ticketC = document.getElementById("quantity1").value;
  let ticketA = document.getElementById("quantity2").value;
  let ticketS = document.getElementById("quantity3").value;
  if (fname == "" || lname == "" || (parseInt(ticketC) < 1 && parseInt(ticketA) < 1 && parseInt(ticketS) < 1)) {
    alert("There was an error. Please make sure you've entered your values correctly.");
    return false;
  }
  sessionStorage.setItem("time", day);
  let time = sessionStorage.getItem("time");
  sessionStorage.setItem("week", week);
  sessionStorage.setItem("fname", fname);
  sessionStorage.setItem("lname", lname);
  sessionStorage.setItem("ticketC", ticketC);
  sessionStorage.setItem("ticketA", ticketA);
  sessionStorage.setItem("ticketS", ticketS);
  if(time.charAt(time.length - 1) == "m") {
    sessionStorage.setItem("when", "Matinee");
  }
  else {
    sessionStorage.setItem("when", "Evening");
  }
  window.location.href = "form.html";
}

function calcPrice() {
  let time = sessionStorage.getItem("time")
  let week = sessionStorage.getItem("week")
  let child = parseInt(sessionStorage.getItem("ticketC"))
  let adult = parseInt(sessionStorage.getItem("ticketA"))
  let senior = parseInt(sessionStorage.getItem("ticketS"))
  let price = 0
  let c = 8
  let a = 13
  let s = 8
  let price3 = "N/A"

  if (time.charAt(time.length - 1) == "m") {
    c--
    a--
    s--
  }
  price = (c*child + a*adult + s*senior)
  let subTotal = price
  if (week == "Tuesday") {
    price3 = price*0.10
    price = price*0.90
  }
  let tax = price*0.13
  return {
    "subtotal" : "$" + subTotal.toFixed(2),
    "tax" : "$"+tax.toFixed(2),
    "Tuesday" : price3,
    "priceWithTax" : "$" + (price*1.13).toFixed(2),
    "price" : "$" +price.toFixed(2),
    "child" : "$"+(c*child).toFixed(2),
    "adult" : "$"+(a*adult).toFixed(2),
    "senior" : "$"+(s*senior).toFixed(2)
    }
}
