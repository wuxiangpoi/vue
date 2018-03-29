<template>
  <div class="home">

  </div>
</template>

<script>
const ERR_OK = 0;

export default {
  data() {
    return {
     
    };
  },
  created() {
    this.fetch(this.api.topics,{},(res)=>{
      console.log(res)
    })
  },
  methods: {
    fetchData(){

    }
  },
  components: {}
};
</script>

<style lang="less" scope>
.home {
  
  
}
</style>
