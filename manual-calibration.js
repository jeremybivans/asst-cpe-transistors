let max = -1
let min = -1
let reading = 0
input.onButtonPressed(Button.A, function () {

    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
    max = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)

})

input.onButtonPressed(Button.B, function () {

    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
    min = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)

})
basic.forever(function () {
    if (min > -1 && max > -1) {

        pins.digitalWritePin(DigitalPin.P12, 1)

        basic.pause(500)

        reading = pins.analogReadPin(AnalogPin.P0)

        pins.digitalWritePin(DigitalPin.P12, 0)

        let cal = pins.map(reading, min, max, 0, 4)

        //basic.showNumber(cal)

        for (let i = 0; i <= cal; i++) {
            led.plot(i - (i), 4 - i)
            led.plot(i - (i - 1), 4 - i)
            led.plot(i - (i - 2), 4 - i)
            led.plot(i - (i - 3), 4 - i)
            led.plot(i - (i - 4), 4 - i)
        }

    }
}) 
