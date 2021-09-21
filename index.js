import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
Alpine.plugin(persist)
import { myline } from './js/myline.js'
myline();
import { myscroll, move_up } from './js/myscroll.js'
myscroll();

Alpine.store( 'selection', "topics/default")
Alpine.store( 'moveUp', {
  move() {
    move_up()
    }
    }
)

Alpine.start()
