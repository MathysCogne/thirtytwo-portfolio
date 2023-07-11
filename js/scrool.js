// ratio = Pourcentage de l'élément visible a l'écran avant que celui soit reveal
const ratio = .3
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
const targets = document.querySelectorAll('.reveal')
targets.forEach(function (target) {
   observer.observe(target)
})