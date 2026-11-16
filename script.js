function showLastModified() {
    const lastMod = document.lastModified;

    document.getElementById("last-modified").innerHTML =
        "Last modified: " + lastMod;
}