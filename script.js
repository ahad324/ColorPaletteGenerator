const container = document.querySelector('.container');
const refreshbtn = document.querySelector('.refresh-btn');
const maxPaletteBoxes = 32;
const generatepalette = () => {

    container.innerHTML = ''; //clearing container

    for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;

        // copying the color
        color.addEventListener('click', () => copycolor(color, randomHex));

        container.appendChild(color);
    }



}
generatepalette();

const copycolor = (elem, hexval) => {

    const colorelement = elem.querySelector('.hex-value');

    navigator.clipboard.writeText(hexval).then(() => {
        colorelement.innerText = "Copied";
        setTimeout(() => colorelement.innerText = hexval, 1000)
    }).catch(() => alert("Failed to copy the color code"))
}

refreshbtn.addEventListener('click', generatepalette)