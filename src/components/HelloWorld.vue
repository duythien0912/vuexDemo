<template>
  <div class="hello">
    <div class="left">
      <h1>{{helloBabe}}</h1>
    </div>
    <div class="right">
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{link}}
          <button v-on:click="removeLinks(index)">X</button>
        </li>
      </ul>
      <Couter/>
    </div>
    <form @submit.prevent="addLink">
      <input type="text" placeholder="add new link" v-model="newLink" />
    </form>
  </div>
</template>

<script>
import Couter from "@/components/Couter";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      newLink: ""
    };
  },
  components: {
    Couter
  },
  // cach 1
  //  computed: mapState(["helloBabe"])

  // cach 2
  //  computed: mapState({
  //    custom: "helloBabe"
  //  })

  // cach 3
  computed: {
    ...mapState(["helloBabe", "links"])
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["removeLink"]),
    addLink: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
    },
    removeLinks: function(link) {
      this.removeLink(link);
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