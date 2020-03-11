basic.forever(function () {

    if (pins.digitalReadPin(DigitalPin.P12)) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    else
        pins.analogWritePin(AnalogPin.P0, 0)

}) 
