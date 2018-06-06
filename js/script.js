
function toggle_visibility(id) {

    var e, p, i, self;
    e = document.getElementById(id);
    
    //show or hide the one we requested
    if (e.style.display === "none") {
        e.style.display = "block";
    } else { e.style.display = 'none'; }
    
    
    //close all currently open projects
    p = document.getElementsByClassName("reveal");
    for (i = 0; i < p.length; i++) {
        if (p[i].id === e.id) { continue; }
        p[i].style.display = "none";
    }
}
