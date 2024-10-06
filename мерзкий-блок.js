function init(e) {
  e.block.setModel("minecraft:iron_block")
}

function clicked(e) {
  e.player.message("пампарам")
  e.player.playSound("entity.player.burp", 9, 1)
}