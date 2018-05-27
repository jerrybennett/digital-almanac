class AlmanacAPI {

  static fetchLocation() {
    return fetch(`https://cors-anywhere.herokuapp.com/https://phzmapi.org/${areaCode}.json`).then(res => res.json()).then(res => console.log(res));
  }

}
export default AlmanacAPI;
