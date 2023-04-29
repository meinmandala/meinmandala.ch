const code_input = document.getElementById('code');
const output = document.getElementById('output');

function draw() {
  const s = document.createElement('script');
  s.setAttribute('type','text/tikz');
  s.textContent = `
\\begin{tikzpicture}
${code_input.value}
\\end{tikzpicture}
  `;
  output.innerHTML = '';
  output.appendChild(s);
  process_tikz(s);
}

let debounce_update = null;
let debounce_do = false;

update();