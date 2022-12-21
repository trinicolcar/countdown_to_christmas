console.log("Hello Countdown💜")

import "./style.sass";
import { updateCountDown } from "./countDown.js";

const finalDate = new Date('Dec 21 2022 23:00:00')
console.log(`Fecha final: ${finalDate}`)

setInterval(() => {
    const actualDate = new Date()
    const remainTime = finalDate - actualDate;
    updateCountDown(remainTime)
}, 1000);


