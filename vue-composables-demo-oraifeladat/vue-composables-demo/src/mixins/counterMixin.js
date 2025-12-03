export default {
  props: {
    counterKey: {
      type: String,
      default: 'default'
    },
    initialValue: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      count: this.initialValue,
      storageKey: `counter_${this.counterKey}`
    }
  },

  computed: {
    isEven() {
      return this.count % 2 === 0
    },
    double() {
      return this.count * 2
    }
  },

  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = this.initialValue
    }
  },

  mounted() {
    const saved = localStorage.getItem(this.storageKey)
    if (saved) {
      this.count = parseInt(saved)
    }
  },

  unmounted() {
    localStorage.setItem(this.storageKey, this.count.toString())
  }
}
