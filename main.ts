let Second_player: Sprite = null
null.drawRect(0, 0, 0, 0, 0)
animation.runImageAnimation(
null,
assets.animation`Player shooting`,
500,
true
)
console.log(assets.animation`Player shooting`)
controller.player1.moveSprite(null, 100, 100)
controller.moveSprite(null, 100, 100)
controller.player2.moveSprite(Second_player)
