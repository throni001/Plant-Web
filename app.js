function updateDateTime() {
    const now = new Date();
    const element = document.getElementById("time").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);