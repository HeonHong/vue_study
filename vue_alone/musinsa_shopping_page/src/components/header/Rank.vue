<template >
   <div class="carousel">
    <ul>
      <li class="card" v-for="header in headerData" :key="header.rank">
        <h3>{{ header.name }}</h3>
      </li>

    </ul>
  </div>
</template>
<script>
import headerData from '@/assets/headerData';
export default {
//eslint-disable-next-line
 name: "Rank",
  data() {
    return {
      headerData:headerData,
    };
  },
  methods: {
    
  }
};
</script>
<style>


</style>