const routers = {
  "/": "home page",
  "/resume": "my resume",
  "/contact": "contact me"
}
const handleChange = (key) => {
  // go to url
  window.history.pushState(routers[key],"",key)
  // new data
  document.getElementById("app").innerHTML = `<h1>${routers[key]}</h1>`

}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav"))
    e.preventDefault()
  handleChange(e.target.dataset.route)
})
//前进和后退
window.onpopstate = () => {
  handleChange(window.location.pathname)
}