function init(e) {
  e.block.setModel("minecraft:emerald_block")
}

function clicked(e) {
  e.player.message("нюх")
  var w = e.player.getWorld()
  var c = w.createEntity("minecraft:sniffer")
  c.spawn()
  c.setPos(e.player.getPos())
}
