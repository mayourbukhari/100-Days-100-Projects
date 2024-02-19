document.addEventListener("DOMContentLoaded", function() {
    const door = document.querySelector('.door-board');
    let isOpen = false;
  
    door.addEventListener('click', function() {
      isOpen = !isOpen;
      if (isOpen) {
        door.style.transform = 'rotateY(-60deg)';
      } else {
        door.style.transform = 'rotateY(0deg)';
      }
    });
  });
  
// mouse

let rotating = false;

function startRotation() {
    rotating = true;
    document.querySelector('.canvas').classList.add('active');
}

function stopRotation() {
    rotating = false;
    document.querySelector('.canvas').classList.remove('active');
}

document.querySelector('.canvas').addEventListener('mousemove', function(event) {
    if (rotating) {
        const canvas = document.querySelector('.canvas');
        const centerX = canvas.offsetLeft + canvas.offsetWidth / 2;
        const centerY = canvas.offsetTop + canvas.offsetHeight / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        const rotationY = -deltaX / 10; // Adjust rotation speed as needed

        canvas.style.transform = `translate(-50%, -50%) translate3d(0vmin, 0, -40vmin) rotate3d(0, 1, 0, ${rotationY}deg)`;
    }
});
 //zoom 
 let scale = 1; // Initial scale
 const canvas = document.getElementById('canvas');
 
 canvas.addEventListener('wheel', (event) => {
     event.preventDefault(); // Prevent default scrolling behavior
 
     const delta = event.deltaY > 0 ? -0.1 : 0.1; // Check scroll direction and set scale factor
     scale += delta; // Adjust scale based on scroll direction
 
     // Apply scale transformation to the canvas
     canvas.style.transform = `scale(${scale})`;
 });
 
