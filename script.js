let loveCalculated = false;

function calculateLove() {
    if (loveCalculated) {
        alert("Love value has already been calculated. Please refresh the page to calculate again.");
        return;
    }

    const yourName = document.getElementById("your-name").value.trim();
    const loveName = document.getElementById("love-name").value.trim();

    if (yourName === "" || loveName === "") {
        alert("Please enter both names!");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 100);
    document.getElementById("love-value").innerText = `Love Percentage: ${lovePercentage}%`;
    
    loveCalculated = true;
}
