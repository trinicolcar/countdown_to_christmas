console.log("Hello Countdown")

import "./style.sass";
import { updateCountDown } from "./countDown.js";

const finalDate = new Date('Dec 24 2022 23:59:50')
console.log(`Fecha final: ${finalDate}`)

setInterval(() => {
    const actualDate = new Date()
    const remainTime = finalDate - actualDate;
    updateCountDown(remainTime)
}, 1000);


