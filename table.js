const ele = document.getElementById('table');
const arr = JSON.parse(localStorage.getItem('highscore')) || [];
let x = "<table><tr><th>Username</th><th>Score</th></tr>";

for (let y = arr.length - 1; y >= 0; y--) {
    x += "<tr><td>" + arr[y].username + "</td><td>" + arr[y].score + "</td></tr>";
}

x += "</table>";
ele.innerHTML = x;
