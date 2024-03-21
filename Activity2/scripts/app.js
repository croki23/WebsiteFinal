import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "Loki The God of Stories",
    par     : "Loki was born on Jotunheim as the son of the Frost Giant King, Laufey. Small and weak for a Frost Giant, Loki was abandoned by his father in a temple, being left to die. In 965 A.D., not long after the war between the Giants and the Asgardians, Loki was found by King Odin. Adopting Loki and using sorcery to alter his appearance to make him appear to be an Asgardian, Odin raised Loki and his biological son, Thor, with his wife Frigga. As they grew up, Loki always felt that he was always living in Thor's shadow, envious to the fact that Thor was meant to be king instead of him.",
    button  : "Kneel before your King",
    img     : "images/loki2.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "images/loki3.avif",
    desc    : "I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity.",
    button1 : "Be enchanted",
    title2  : "Project Complete"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))

