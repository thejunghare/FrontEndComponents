document.getElementById("defaultOpen").click();

function openCity(evt, name) {
    // Declare all variables
    var i, tabcontent, link;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="link" and remove the class "active"
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}
