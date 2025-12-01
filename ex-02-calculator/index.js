function ClearSceen(){
    document.getElementById("result").value = '';
}

function LiveScreen(value)
{
     document.getElementById("result").value += value;
}

function switchtheme() {
    let darkmode = document.getElementById("darkmode");
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light.css") {
        theme.href = "dark.css";
        darkmode.innerHTML = "Light Mode"
    } else {
        theme.href = "light.css";
        darkmode.innerHTML = "Dark Mode"
    }
}