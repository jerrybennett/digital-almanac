// const searchUrl = (areaCode) => `https://phzmapi.org/${areaCode}.json`
export function searchUrl (areaCode) {
  fetch(`https://cors-anywhere.herokuapp.com/https://phzmapi.org/${areaCode}.json`).then(res => res.json()).then(res => console.log(res))
}
