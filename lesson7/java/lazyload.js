const imagesToLoad = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if (!src){
    return;
  }
  img.src = src;
  img.removeAttribute('data-src');
}
const imgOption = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
}
const imgObserver = new IntersectionObserver((entries, imgObserver ) => {
  entries.forEach( entry =>{
    if (!entry.isIntersecting) {
      return;
    } else{
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }

  })

}, imgOption);

imagesToLoad.forEach( image =>{
  imgObserver.observe(image);
});
