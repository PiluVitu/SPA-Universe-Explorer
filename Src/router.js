export class Router {
  routes = {}

  add(path, page) {
    this.routes[path] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState('', '', event.target.href)
    this.toggle()
  }

  toggle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    console.log(pathname)

    fetch(route)
      .then(data => data.text())
      .then(html => (document.querySelector('#app').innerHTML = html))
  }

  toggleDirect() {
    const routeStart = this.routes['/universe']
    fetch(routeStart)
      .then(data => data.text())
      .then(html => (document.querySelector('#app').innerHTML = html))
  }
}
