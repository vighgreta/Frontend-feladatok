export default {

  data() {

    return { loading: false, error: null };

  },

  methods: {

    async fetchData(url) {

      this.loading = true; this.error = null;

      try { const resp = await axios.get(url); return resp.data; }

      catch(e) { this.error = e.message || "Hiba"; }

      finally { this.loading = false; }

    }

  }

}
