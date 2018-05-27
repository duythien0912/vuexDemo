<template>
  <div class="hello">
    <h1>we are have {{couterLinks}}</h1>
    <button v-on:click="removeAllLinks">Remove All Links</button>
    {{msg}}
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Couter",
  data() {
    return {
      msg: ""
    };
  },
  // cach 1
  //  computed: mapState(["helloBabe"])

  // cach 2
  //  computed: mapState({
  //    custom: "helloBabe"
  //  })

  // cach 3
  computed: {
    ...mapGetters(["couterLinks"])
  },
  methods: {
    ...mapMutations(["REMOVE_ALL_LINK"]),
    ...mapActions(["removeAllLink"]),
    removeAllLinks() {
      this.removeAllLink().then(() => {
        this.msg = "they have been remove";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
