const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



//Remove the below code when adjusted for Android View 

function isDesktop() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|android|mobile|tablet|phone/i.test(userAgent);
    return !isMobile;
  }

  // Check if the device is not a desktop
  if (!isDesktop()) {
    alert("For Best View, Open in Desktop. Other Device Compatibility is not added...");
  }
