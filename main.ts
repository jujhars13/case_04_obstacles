let sonar = 0
wuKong.setAllMotor(-100, -100)
basic.pause(1000)
basic.forever(function () {
    sonar = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonar < 20 && sonar > 1) {
        wuKong.setAllMotor(10, 10)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
