function randomise() {
    let arr = ["1.html", "2.html", "3.html"];
    let value = arr[Math.floor(Math.random() * arr.length)];
    window.location = value;
};