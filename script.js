const sortBtns = document.querySelectorAll(".job-id > *")
const sortItems = document.querySelectorAll(".jobs-container > *")
sortBtns.forEach((btn)=>{
    btn.addEventListener('click', () =>{
        sortBtns.forEach((btn)=> btn.classList.remove
        ("active"));
        btn.classList.add("active");

        const targetData = btn.getAttribute("data-target");

        sortItems.forEach((item) => {
            item.classList.add("delete");
            if(item.getAttribute("data-item") === 
        targetData || targetData === "all"){
                item.classList.remove('delete');
            }
        })
    })
})

// Show loading screen only on first visit (using localStorage)
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');

    // Check if user has already visited
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited && loadingScreen) {
        // First visit → show loading screen with delay
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1500);

        // Mark that user has visited
        localStorage.setItem('hasVisited', 'true');
    } else if (loadingScreen) {
        // If already visited → instantly hide loading screen
        loadingScreen.style.display = 'none';
    }
});
