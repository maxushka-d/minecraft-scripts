function init(e) {
  e.block.setModel("minecraft:iron_block")
}

function clicked(e) {
  e.player.message("мяу")
  e.player.playSound("entity.cat.purrmeow", 5, 1)
  var w = e.player.getWorld()
  var c = w.createEntity("minecraft:cat")
  c.spawn()
  c.setPos(e.player.getPos())
}