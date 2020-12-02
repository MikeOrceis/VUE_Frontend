import axios from 'axios';

export default function( {params, store} ) {

  return axios.get(`http://localhost/case?state=${params.state}`)
    .then((response) => {
      store.commit('add', response.data.results);
    });

}
