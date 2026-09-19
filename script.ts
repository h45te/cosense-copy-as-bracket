function addCopyButton() {
	const div = document.createElement('div');
	const btn = document.createElement('button');
    const i = document.createElement('i');
    div.appendChild(btn).appendChild(i);

    btn.classList.add('tool-btn');
    btn.type = 'button';
    btn.id = 'copy-as-bracket';
    btn.ariaLabel = 'Copy as bracket';
    i.classList.add('kamon', 'kamon-copy');

    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(`[${new URL(document.URL).pathname}]`);
    });

    const container = document.getElementsByClassName('page-menu')[0];
    container.appendChild(div);
}

addCopyButton();
