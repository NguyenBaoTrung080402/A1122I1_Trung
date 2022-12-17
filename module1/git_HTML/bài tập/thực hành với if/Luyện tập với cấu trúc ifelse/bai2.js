function DONE() {
  let message = document.getElementById("tex").value;
  switch (message) {
    case "Employee":
      document.getElementById("ID").innerText = "Hello";
      break;
    case "Director":
      document.getElementById("ID").innerText = "Greetings";
      break;

    case "":
      document.getElementById("ID").innerText = "No Login";
      break;
    default:
      document.getElementById("ID").innerText = "Nhập lại đi bro =)))";
  }
}
