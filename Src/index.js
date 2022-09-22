import { Router } from './router.js'

const router = new Router()

router.add('/', '../Pages/home.html')
router.add('/universe', '../Pages/theUniverse.html')
router.add('/explorer', '../Pages/explorer.html')
router.add(404, '../Pages/404.html')

router.toggle()

window.onpopstate = () => router.toggle()

window.route = () => router.route()
window.toggleDirect = () => router.toggleDirect()
