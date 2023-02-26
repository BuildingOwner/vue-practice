export default {
  data() {
    return {
      totalMoney: 0,
    };
  },
  mounted() {
    console.log("comp using mixin mounted");
  },
  methods: {
    addMoney(price) {
      this.totalMoney += price;
    }
  },
}