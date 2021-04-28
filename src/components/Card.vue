<template>
  <div>
    <div class="card card-sw column clickable" @click="openModal()">
      <div class="card-content card-content-sw">
        <p class="title center is-4">
          {{person.name}}
        </p>
      </div>
    </div>
    <modal :show="this.show" :person="person" @close="closeModal"></modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'card',
  components: {
    Modal
  },
  props: {
    person: { type: Object, required: true }
  },
  methods: {
    openModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>