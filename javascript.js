// javascript.js

// Show specific standings
function showStandings(standingsType) {

    // Toggle active class on button
    document.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    });

    document.querySelector(`button:nth-child(${standingsType}`).classList.add("active");

    // Show standings
    if(standingsType === 1) {
      document.getElementById('driver-standings').classList.remove('hidden');
      document.getElementById('constructor-standings').classList.add('hidden');
    } else {
      document.getElementById('constructor-standings').classList.remove('hidden');
      document.getElementById('driver-standings').classList.add('hidden');
    }

}

// Set default standings on load
window.onload = function() {
  showStandings(1);
}

// Button click handlers
showDriverStandings = () => showStandings(1);
showConstructorStandings = () => showStandings(2);