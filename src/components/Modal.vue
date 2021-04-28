<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{person.name}}</p>
        <button class="delete" aria-label="close" @click="close()"></button>
      </header>
      <section class="modal-card-body">
        <p><b>Birth year:</b> {{person.birth_year}}</p>
        <p><b>Eye color:</b> {{person.eye_color}}</p>
        <p><b>Gender:</b> {{person.gender}}</p>
        <p><b>Hair color:</b> {{person.hair_color}}</p>
        <p><b>Mass:</b> {{person.mass}}</p>
        <p><b>Skin color:</b> {{person.skin_color}}</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="close()">Fechar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    person: { type: Object, required: true },
    show: { type: Boolean, required: true }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>