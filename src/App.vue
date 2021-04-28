<template>
  <div id="app">
    <h1 class="title-sw is-size-1 is-size-4-mobile">Personagens de Star Wars</h1>
    <div class="columns is-mobile is-multiline is-centered">
      <div v-for="person in people" :key="person.id">
        <card
          :person="person"
        ></card>
      </div>
    </div>
    <footer><a href="http://github.com/alanvsega" target="_blank">Alan Vinícius Sega</a></footer>
  </div>
</template>

<script>
import Api from '@/services/Api';
import Card from '@/components/Card';

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      people: []
    }
  },
  created() {
    Api.getPeople(people => {
      this.people = people.data.results;
    })
  }
}
</script>