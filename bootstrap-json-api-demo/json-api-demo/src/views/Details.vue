<template>
  <div>
    <h2 class="mb-4">Adatok</h2>

    <div class="row g-4">
      <div class="col-md-6" v-for="item in items" :key="item.id">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <button class="btn btn-primary">Részletek</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },

  async mounted() {
    const res = await fetch("http://localhost:3000/items");
    this.items = await res.json();
  }
};
</script>
