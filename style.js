document.addEventListener('DOMContentLoaded', function () {
    const scrollTrack = document.querySelector('.scroll-track');
    const items = document.querySelectorAll('.scroll-item');
    const totalItems = items.length;
    let index = 0;

    // Clone the first set of items and append them to the end
    const cloneItems = () => {
        for (let i = 0; i < totalItems; i++) {
            const clone = items[i].cloneNode(true);
            scrollTrack.appendChild(clone);  // Append the cloned items to the end
        }
    };

    // Function to shift the items
    function shiftItems() {
        // Shift to the next set of 6 items
        index = (index + 1) % totalItems;  // This will loop the index
        const shiftValue = -(index * (100 / 8)) + '%';  // Calculate the shift percentage

        // Apply the shift (to show a new set of items)
        scrollTrack.style.transform = `translateX(${shiftValue})`;

        // After the first set of items has fully shifted out of view (if we have looped), reset
        if (index === 0) {
            setTimeout(() => {
                scrollTrack.style.transition = 'none';  // Disable transition to reset
                scrollTrack.style.transform = 'translateX(0)';
                
                // Re-enable transition after the reset
                setTimeout(() => {
                    scrollTrack.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);  // Wait until the animation finishes
        }
    }

    // Set an interval for shifting every 3 seconds
    cloneItems();  // Clone and append items initially
    setInterval(shiftItems, 3000);  // Adjust the timing here (3000ms = 3 seconds)
});



// this for the change of the background color of navbar when scroll up 
window.onscroll = function() {
    changeNavbarColor();
  };
  
  let lastScrollTop = 0;
  
  function changeNavbarColor() {
    const navbar = document.getElementById("navbar");
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {
      // Scrolling down
      navbar.classList.remove("scrolled");
    } else {
      // Scrolling up
      navbar.classList.add("scrolled");
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
  }
  