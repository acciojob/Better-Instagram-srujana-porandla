//your code here
document.addEventListener('DOMContentLoaded', (event) => {
    let dragged;

    document.querySelectorAll('.image').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            dragged = e.target;
            e.dataTransfer.setData('text/plain', e.target.id);
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            if (dragged !== e.target) {
                let draggedBackground = dragged.style.backgroundImage;
                let targetBackground = e.target.style.backgroundImage;
                dragged.style.backgroundImage = targetBackground;
                e.target.style.backgroundImage = draggedBackground;
            }
        });
    });
});


