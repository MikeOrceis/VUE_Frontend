<template>
  <div>
    <v-data-table
      :header="headers"
      :items="albumData"
    >
    </v-data-table>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  asyncData({params}) {
    return axios.get(`http://localhost:3000/case?state=${params.state}`)
      .then((response) => {
        return {albumData: response.data.results}
      });
  },
  components: {
      headers () {
        return [
          {text: 'Lastname', value: 'lastname'},
          {text: 'Fristname', value: 'fristname'},
        ]
      }
  },
  middleware: 'search',
  methods: {
  },
  computed: {
    albumExists() {
      return this.albumData.length > 0;
    }

  }

}
</script>
