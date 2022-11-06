  // Function to format 1 in 01
  const zeroFill = (n) => {
    return ("0" + n).slice(-2);
  };

  // Creates interval
  const interval = setInterval(() => {
    // Get current time
    const now = new Date();

    // Format date as in mm/dd/aaaa hh:ii:ss
    const dateTime =
      zeroFill(now.getHours()) + ":" + zeroFill(now.getMinutes());

    // Display the date and time on the screen using div#date-time
    document.getElementById("datetime").innerHTML = dateTime;
  }, 1000);

  // Ricerca Google
  const searchInput = document.querySelector("#cerca");
  const buttonSearch = document.querySelector("#searchButton");
  buttonSearch.addEventListener("click", () => {
    var q = searchInput.value;
    console.log(q);
    if (q == "") {
      return 0;
    } else {
      buttonSearch.onclick = () => {
        window.open("http://google.it/search?q=" + q);
        searchInput.value = "";
      };
    }
  });

  document.addEventListener("keypress", (event) => {
    var q = searchInput.value;
    if (event.keyCode === 13) {
      if (q == "") return;
      window.open("http://google.it/search?q=" + q);
      searchInput.value = "";
    }
  });