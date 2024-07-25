const x = document.getElementById('btn');
const y = document.getElementById('username');
const score = localStorage.getItem('maxscore');
const score_show = document.getElementById('score');
score_show.innerText = score;

let array = JSON.parse(localStorage.getItem('highscore'));
if (!array) {
    localStorage.setItem('highscore', JSON.stringify([]));
    array = JSON.parse(localStorage.getItem('highscore'));
}

y.addEventListener('keyup', () => {
    x.disabled = y.value.trim().length === 0;
});

const savedata = (e) => {
    e.preventDefault();
    const save = {
        'score': score,
        'username': y.value,
    };
    x.disabled = true;

    let pos = binary_sort(array, score);
    if (pos === -1) array.unshift(save);
    else if (pos === -2) array.push(save);
    else array.splice(pos, 0, save);

    localStorage.setItem('highscore', JSON.stringify(array));
    document.location.assign("table.html");
};

const binary_sort = (a, value) => {
    let i = 0, j = a.length - 1;
    if (j === -1) return -2;
    if (a[0].score >= value) return -1;
    if (a[j].score <= value) return -2;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (a[mid].score <= value && a[mid + 1]?.score >= value) return mid + 1;
        else if (a[mid].score > value) j = mid - 1;
        else i = mid + 1;
    }
    return -2;
};
