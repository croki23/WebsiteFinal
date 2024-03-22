import { leftDiv } from "./info.js";
import { rightDiv } from "./image.js";
import { sectwoDiv } from "./card.js";

let secOne = document.getElementById('sectionOne')
let secTwo = document.getElementById('sectionTwo')

const dataOne = {
    title: "Loki The God of Stories",
    para: "Loki was born on Jotunheim as the son of the Frost Giant King, Laufey. Small and weak for a Frost Giant, Loki was abandoned by his father in a temple, being left to die. In 965 A.D., not long after the war between the Giants and the Asgardians, Loki was found by King Odin. Adopting Loki and using sorcery to alter his appearance to make him appear to be an Asgardian, Odin raised Loki and his biological son, Thor, with his wife Frigga. As they grew up, Loki always felt that he was always living in Thor's shadow, envious to the fact that Thor was meant to be king instead of him.",
    button: "Kneel before your King",
    image: "Loki_Profile.webp"
};

const dataTwo = {
    title2: "Loki The God of Stories",
    image1: "loki1.webp",
    para1: "Loki was born on Jotunheim as the son of the Frost Giant King, Laufey. Small and weak for a Frost Giant, Loki was abandoned by his father in a temple, being left to die. In 965 A.D., not long after the war between the Giants and the Asgardians, Loki was found by King Odin. Adopting Loki and using sorcery to alter his appearance to make him appear to be an Asgardian, Odin raised Loki and his biological son, Thor, with his wife Frigga. As they grew up, Loki always felt that he was always living in Thor's shadow, envious to the fact that Thor was meant to be king instead of him.",
    button1: "Kneel before your King",
    image2: "loki7.jpg",
    para2: "Loki was born on Jotunheim as the son of the Frost Giant King, Laufey. Small and weak for a Frost Giant, Loki was abandoned by his father in a temple, being left to die. In 965 A.D., not long after the war between the Giants and the Asgardians, Loki was found by King Odin. Adopting Loki and using sorcery to alter his appearance to make him appear to be an Asgardian, Odin raised Loki and his biological son, Thor, with his wife Frigga. As they grew up, Loki always felt that he was always living in Thor's shadow, envious to the fact that Thor was meant to be king instead of him.",
    button2: "Kneel before your King",
    image3: "loki8.webp",
    para3: "Loki was born on Jotunheim as the son of the Frost Giant King, Laufey. Small and weak for a Frost Giant, Loki was abandoned by his father in a temple, being left to die. In 965 A.D., not long after the war between the Giants and the Asgardians, Loki was found by King Odin. Adopting Loki and using sorcery to alter his appearance to make him appear to be an Asgardian, Odin raised Loki and his biological son, Thor, with his wife Frigga. As they grew up, Loki always felt that he was always living in Thor's shadow, envious to the fact that Thor was meant to be king instead of him",
    button3: "Kneel before your King",
};

const { title, para, button, image } = dataOne;
const { title2, image1, image2, image3, para1, para2, para3, button1, button2, button3 } = dataTwo;

const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');

sectionOne.append(leftDiv(title, para, button));
sectionOne.append(rightDiv(image));
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3));