servos.P0.setRange(10, 170)
basic.forever(function () {
    servos.P0.setAngle(pins.analogReadPin(AnalogPin.P2) / 540 * 80)
})
