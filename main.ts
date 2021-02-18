scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(1, 160), randint(1, 160))
    info.changeScoreBy(1)
    mySprite.say("Yay", 1000)
    mySprite.setImage(img`
        .........ffffff..........
        ........ff7777ff.........
        .......ff777777ff....fff.
        ......ff77777777ff..ff88f
        ......f7f555555f7f..f886f
        ......ff55555555ff..f886f
        .....ff55f5555f55ff.f868f
        ...ffff5f5555fff5fff555ff
        ...fddff5555ffdf5fddf55f.
        ....ffff55fffddf5fff655f.
        .....f5fffffdffff5f5f8ff.
        .....f5f181dd181f5ff8f...
        ......ffd81dd18dff88f....
        ......fffddddddfff888f...
        .......ffffffffff8888f...
        ......f7f777777f7f6688f..
        .....f77f777777f77f668f..
        ....fddff777777ffddf66f..
        ....ffdf7ff55ff7fdf.fff..
        ..ffbfff77f55f77fff......
        .fbbbccfff7777fff........
        fbbbccfeeeffffeeef.......
        fbbccffeeff..ffeef.......
        .ffff..fff....fff........
        `)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ......ffffff......
    .....ff7777ff.....
    ....ff777777ff....
    ...ff77777777ff...
    ...f7f555555f7f...
    ...ff55555555ff...
    ..ff55f5555f55ff..
    ffff5f5555fff5ffff
    fddff5555ffdf5fddf
    .ffff55fffddf5fff.
    ..f5fffffdffff5f..
    ..f5f181dd181f5f..
    ...ffd81dd18dfff..
    ...fffddddddfff...
    ....ffffffffff....
    ...f7f777777f7f...
    ..f77f777777f77f..
    .fddff777777ffddf.
    .ffdf7ff55ff7fdff.
    ..fff77f55f77fff..
    ....fff7777fff....
    ...feeeffffeeef...
    ...feeff..ffeef...
    ....fff....fff....
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
mySprite2 = sprites.create(img`
    . . . . . f f . . . . . 
    . . . . f 8 6 f . . . . 
    . . . . f 5 5 f . . . . 
    . . . . f 5 5 f . . . . 
    . . f f f 8 6 f f f . . 
    . f 8 8 8 8 8 6 6 6 f . 
    f 8 8 f f f f f f 6 6 f 
    f f f . f b c f . f f f 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f b c f . . . . 
    . . . . f c c f . . . . 
    . . . . . f f . . . . . 
    `, SpriteKind.Food)
mySprite.say("Help Me Escape", 1000)
mySprite2.setPosition(20, 50)
game.splash("Help Link Escape")
