input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Heart)
            music.ringTone(262)
            basic.pause(100)
            basic.showIcon(IconNames.SmallHeart)
            music.ringTone(196)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        while (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.No)
            music.ringTone(988)
            basic.pause(100)
            music.ringTone(784)
            basic.showIcon(IconNames.Square)
        }
    }
    music.rest(music.beat(BeatFraction.Whole))
    basic.showString("TECLA")
})
