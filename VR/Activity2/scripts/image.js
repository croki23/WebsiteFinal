const rightDiv = (image) => {
    let mydiv = document.createElement("mydiv");
    mydiv.className = "rightClass";
    mydiv.innerHTML = `<img src="./${image}" class="imgc">`;
    return mydiv;
};

export { rightDiv };


const leftDiv = (title, para, button) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "leftClass"
    mydiv.innerHTML = `<h1 class="title1">${title}</h1>
                        <p class ="para1">${para}</p>
                        <button class="sec1btn">${button}</button>
                        `
    return mydiv;
}

export { leftDiv };