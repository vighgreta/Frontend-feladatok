<template>
  <div class="panel">

    <h2 class="restapi-title">GraphQL API</h2>

    <button class="load-btn" @click="fetchCountries" :disabled="loading">
      {{ loading ? 'Betöltés...' : 'Load Countries (GraphQL)' }}
    </button>

    <LoadingSpinner v-if="loading" />

    <ProgressBar
      v-if="progress > 0 && progress < 100"
      :progress="progress"
    />

    <div v-if="error" class="error">{{ error }}</div>

    <ul>
      <li v-for="country in countries" :key="country.code" class="user-card">
        <strong>{{ country.name }}</strong><br>
        <span><span class="icon-mail">🌍</span>{{ country.code }}</span><br>
        <span><span class="icon-phone">🏛️</span>{{ country.capital }}</span>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  components: { LoadingSpinner, ProgressBar },

  data() {
    return {
      countries: [],
      loading: false,
      error: "",
      progress: 0       // <-- kötelező!
    };
  },

  methods: {
    async fetchCountries() {
      this.loading = true;
      this.error = "";
      this.progress = 10;

      try {
        // GraphQL query
        const query = `
          query {
            countries {
              code
              name
              capital
            }
          }
        `;

        this.progress = 40;

        const resp = await axios.post(
          "https://countries.trevorblades.com/",
          { query }
        );

        this.progress = 80;

        this.countries = resp.data.data.countries.slice(0, 5);

        this.progress = 100;

      } catch (e) {
        this.error = "Hiba történt: " + e.message;
      } finally {
        this.loading = false;

        // Progress bar eltüntetése
        setTimeout(() => {
          this.progress = 0;
        }, 300);
      }
    }
  }
};
</script>
