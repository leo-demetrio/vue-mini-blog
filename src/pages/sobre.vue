<template>
    <main>
      <section class="container">
          <h1>Sobre</h1>
          <section class="about" v-html="about"></section>
      </section>
    </main>
</template>

<script>
import api from '@/services/api.js';

export default{
    name: 'Sobre',
    data() {
        return {
            about: ''
        }
    },
    mounted() {
        api.get('/about.json')
        .then(response => {
          
            this.about = response.data.about;
        });
    }

}
</script>
<style scoped>

main{
    align-items: center;
}
.about {
    color: var(--color-text-dark);
    margin-bottom: 40px;
}


</style>