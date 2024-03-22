import { leftDiv } from "./info.js"
import { right } from "./image.js"

const data = {
    title1 : "Dog",
    para1 : "Dogs are mammals, usually kept as pets or for work on farms or police. Some dogs are trained to be rescue dogs, and join teams such as mountain rescue. They have been bred by humans from their ancestral wolves. They were the first animals to live with humans, as far as we know.There was a lot of variety among wolves in the Late Pleistocene. The dingo is also a dog, but many dingos have become wild animals again and live independently of humans in the range where they occur parts of (Australia) Today, some dogs are used as pets, and others are used to help humans do their work. They are popular pets because they are usually playful, friendly, loyal, and listen to humans. Thirty million dogs in the United States are registered as pets. Dogs eat both meat and vegetables, often mixed together and sold in stores as dog food. Dogs often have jobs, including police dogs, army dogs, assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.They are sometimes called 'canines' from the Latin word for dog - canis. Wolves are also canids. A baby dog is called a pup or puppy. A dog is called a puppy until it is about one year old.Dogs are sometimes referred to as man's best friend because they are kept as domestic pets, are usually loyal, and like being around humans. Dogs like to be petted, but only when they can first see the petter's hand before petting; one should never pet a dog from behind. August 26 is National Dog Day. While March 26 is National Puppy Day.",
    Btn1 : "Bark",
    Btn2: "Sit",
    Btn3: "Jump",
    Btn4: "Fetch",
   
    myImage : "dog3.png"
}

const { title1,para1,Btn1, Btn2, Btn3, Btn4, myImage } = data

let container = document.getElementById("container")

container.append(leftDiv(title1,para1,Btn1, Btn2, Btn3, Btn4))
container.append(right(myImage))
