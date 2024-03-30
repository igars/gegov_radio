let B = 0
let A = 0
let BLUE = 0
let GREEN = 0
let YELLOW = 0
let RED = 0
let Y = 0
let X = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("X", X)
    radio.sendValue("Y", Y)
    radio.sendValue("RED", RED)
    radio.sendValue("YELLOW", YELLOW)
    radio.sendValue("GREEN", GREEN)
    radio.sendValue("BLUE", BLUE)
    radio.sendValue("A", A)
    radio.sendValue("B", B)
})
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P1)
})
basic.forever(function () {
    Y = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        RED = 1
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        RED = 0
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        A = 1
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        A = 0
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        YELLOW = 1
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        YELLOW = 0
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        B = 1
        pins.digitalWritePin(DigitalPin.P11, 1)
    } else {
        B = 0
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        GREEN = 1
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        GREEN = 0
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        BLUE = 1
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        BLUE = 0
    }
})
basic.forever(function () {
    if (A == 1) {
        if (B == 1) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        if (B == 1) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
