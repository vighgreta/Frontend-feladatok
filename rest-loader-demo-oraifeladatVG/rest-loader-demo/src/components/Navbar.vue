<template>
  <nav class="navbar">
    <button
      class="nav-btn"
      :class="{ active: active === 'REST API' }"
      @click="$emit('change', 'REST API')"
    >
      REST API
    </button>

    <button
      class="nav-btn"
      :class="{ active: active === 'GraphQL API' }"
      @click="$emit('change', 'GraphQL API')"
    >
      GraphQL API
    </button>
  </nav>

  <div class="selected-text">
    {{ active }}
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.nav-btn {
  padding: 10px 18px;
  border: none;
  cursor: pointer;
  background: #eee;
  border-radius: 6px;
  font-weight: 600;
  transition: 0.2s;
}

.nav-btn.active {
  background: #007bff;
  color: white;
}

.nav-btn:hover {
  background: #ddd;
}

.selected-text {
  font-size: 20px;
  font-weight: 600;
  margin-top: 6px;
}
</style>
