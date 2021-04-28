import axios from 'axios';

const urlBase = 'https://swapi.dev/api/people/';

export default {
  getPeople: (callback) => {
    const url = urlBase;

    axios.get(url).then((people) => {
      if (callback) {
        callback(people);
      }
    })
  }
}