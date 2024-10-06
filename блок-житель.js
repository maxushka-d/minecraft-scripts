function init(e) {
  e.block.setModel("minecraft:iron_block")
}

function clicked(e) {
  e.player.message("бульбуль")
  var w = e.player.getWorld()
  var c = w.createEntity("minecraft:villager")
  c.spawn()
  c.setPos(e.player.getPos())
}