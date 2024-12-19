export default function decorate(block) {
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            if (col.querySelector('picture')) {
                col.classList.add('image-column');
            } else {
                col.classList.add('text-column');
            }
        });
    });
}

