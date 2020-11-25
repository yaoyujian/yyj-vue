<!--  -->
<template>
  <div class="">我是组件a</div>
</template>

<script>
import Vue from "vue";
import B from "../components/componentsB/B.js";
console.log(Vue.config.optionMergeStrategies,'mix')
Vue.config.optionMergeStrategies.name = function (from, self) {
   
  return self.name ? self.name : from.name;
};

Vue.config.optionMergeStrategies.love = function (from, self) {
  return from.love ? from.love : self.love;
};

Vue.config.optionMergeStrategies.personality = function (from, self) {
  return self.personality === "花心" ? "专一" : "花心";
};

export default {
  name: "objA",
  love: "小花",
  personality: "花心",
  mixins: [B],
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {
console.log(this.$options.name)
console.log(this.$options.love)
console.log(this.$options.personality)
  },
  mounted() {},
};
</script>
<style scoped>

</style>