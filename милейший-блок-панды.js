function init(event) {
    event.block.setModel("minecraft:birch_wood");
}

function clicked(event) {
    event.player.message("Ты чо");
    
    var world = event.block.getWorld();
    var panda = world.createEntity("minecraft:panda");
    panda.spawn();
    panda.setPos(event.block.getPos());
}
