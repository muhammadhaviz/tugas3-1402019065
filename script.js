// Clears the screen on click of C button.
function clearScreen() {
    document.getElementById("result").value = "";
  }
  // Displays entered value on screen.
  function liveScreen(value) {
    document.getElementById("result").value += value;
  }
  // Swaps the style sheet in order to  achieve dark mode.
  function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "green.css") {
      theme.href = "dark.css";
      darkMode.innerHTML = "Green Mode 🌞";
    } else {
      theme.href = "green.css";
      darkMode.innerHTML = "Dark Mode 🌙";
    }
  }