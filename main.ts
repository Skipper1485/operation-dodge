input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let enemy_2_dead = 0
let sprite: game.LedSprite = null
let x_coordinate_2 = 0
let X_coordinaat = 0
let enemy_2_y_cords = 0
let enemy_y_cords = 0
let enemy_dood = 0
let levens = 3
let enemy = game.createSprite(X_coordinaat, 0)
let enemy_2 = game.createSprite(x_coordinate_2, 0)
X_coordinaat = randint(0, 2)
x_coordinate_2 = randint(2, 4)
sprite = game.createSprite(2, 4)
sprite.set(LedSpriteProperty.X, 2)
sprite.set(LedSpriteProperty.Y, 4)
basic.forever(function () {
    if (enemy.isTouching(sprite)) {
        levens += -1
        basic.pause(600)
    }
    if (enemy_2.isTouching(sprite)) {
        levens += -1
        basic.pause(600)
    }
    if (levens == 0) {
        basic.showString("GAME OVER")
        basic.pause(5000)
        levens = 3
        enemy_2.delete()
        enemy_2_y_cords = 0
        enemy_2_dead += -1
        x_coordinate_2 = randint(2, 4)
        enemy_2 = game.createSprite(x_coordinate_2, 0)
        enemy.delete()
        enemy_y_cords = 0
        enemy_dood += -1
        X_coordinaat = randint(0, 2)
        enemy = game.createSprite(X_coordinaat, 0)
    }
})
basic.forever(function () {
    enemy.change(LedSpriteProperty.Y, 1)
    enemy_y_cords += 1
    basic.pause(300)
    if (enemy_dood == 1) {
        enemy.delete()
        enemy_y_cords = 0
        enemy_dood += -1
        X_coordinaat = randint(0, 2)
        enemy = game.createSprite(X_coordinaat, 0)
    }
    if (enemy_y_cords == 4) {
        enemy_dood += 1
    }
})
basic.forever(function () {
    enemy_2.change(LedSpriteProperty.Y, 1)
    enemy_2_y_cords += 1
    basic.pause(300)
    if (enemy_2_dead == 1) {
        enemy_2.delete()
        enemy_2_y_cords = 0
        enemy_2_dead += -1
        x_coordinate_2 = randint(2, 4)
        enemy_2 = game.createSprite(x_coordinate_2, 0)
    }
    if (enemy_2_y_cords == 4) {
        enemy_2_dead += 1
    }
})
