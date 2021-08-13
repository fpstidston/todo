<template>
  <div class="sans-serif pa4">
    <h1 class="normal h1 mb5">My list</h1>
    <div class="mv3 pointer"
      v-for="item in items"
      :key="item.id"
      @click="complete(item)"
      :class="{ 'green': item.completed }"
      >
      <font-awesome-icon v-if="!item.completed" :icon="['fas','circle']" />
      <font-awesome-icon v-else :icon="['fas','check-circle']" />
      <span>{{ item.description }}</span>
    </div>
    <div class="mv3 pointer">
      <font-awesome-icon class="o-50" :icon="['fas','plus-circle']" />
      <input type="text" v-model="description" class="input" @change="add" placeholder="New item..." />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      description: ''
    }
  },
  created() {
    this.get()
  },
  methods: {
    async get() {
      const items = await this.$axios.$get('http://localhost:3002/items')
      this.items = items    
    },
    async add() {
      await this.$axios.$post('http://localhost:3002/items', {
        description: this.description,
        completed: false
      })
      this.description = ''
      this.get()
    },
    async remove() {

    },
    async complete(item) {
      if (item.completed) {
        item.completed = false
        await this.$axios.$put('http://localhost:3002/items', {
          ...item,
          completed: false
        })
      } else {
        item.completed = true
        await this.$axios.$put('http://localhost:3002/items', {
          ...item,
          completed: true
        })
      }
      this.get()
    }
  }
}
</script>