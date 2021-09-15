import {constants} from '../shares/constants';

export class Conections {

  baseURL = constants.endpoint;

  async postData (url = '', data = {}) {
    if (url !== '') {
      url = this.baseURL + url;
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  };

  async getData (url = ''){
    if (url !== '') {
      url = this.baseURL + url;

      return fetch(url,
      {
        method: "GET",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((responseData) => {
        return responseData;
      })
      .catch(error => console.warn(error));
    }
  };
}
