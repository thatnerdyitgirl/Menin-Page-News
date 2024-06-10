console.log("IT’S ALIVE!");
function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}

let navLinks = $$("nav", "a")

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
currentLink?.classList.add("current");


let pages = [
    { url: "index.html", title: "Home" },
    { url: "secondpage.html", title: "Projects" },
    { url: "contact.html", title: "Contact"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

    
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }
}

document.body.insertAdjacentHTML("afterbegin", `
<label class="color-scheme">
Theme:
<select id="theme-selector">
<option>Dark</option>
<option>Light</option>
</select>
</label>`);


let select = document.getElementById("theme-selector");


select.addEventListener("input", function (event) {
    console.log("color scheme changed to", event.target.value);
    

    document.documentElement.style.setProperty("color-scheme", event.target.value);

    localStorage.colorScheme = event.target.value
});

