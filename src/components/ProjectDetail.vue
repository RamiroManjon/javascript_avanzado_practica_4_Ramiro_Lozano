<template>
  <div v-if="project" class="detalle-proyecto">
    <div
      class="personaje"
      v-lazy:background-image="project.image">
    </div>
    <div class="detalle-personaje">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.nick }}</h2>
        
        <p v-html="project.descripcion"></p>
        <button @click="$router.push('/')"></button>
    </div>
  </div>

  <div v-else>
    <p>Personaje entrenando...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref(null)

onMounted(async () => {
  const res = await fetch('/projects.json')
  const projects = await res.json()
  project.value = projects.find(p => p.id === parseInt(route.params.id))
})
</script>

<style scoped>
.detalle-proyecto {
  min-width: 100vw;
  min-height: 80vh;
  text-align: center;
  display: flex;
  background-color: blanchedalmond;
}

.personaje,
.detalle-personaje{
    flex: 1;
}

.personaje{
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.detalle-personaje{
    text-align: left;
    padding: 2rem;
    color: darkblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1.5rem;
}

img {
  width: 60%;
  border-radius: 10px;
  margin: 2rem 0;
}

button {
  position: relative;
  overflow: hidden;
  width: fit-content;
  padding: .5rem 1.5rem;
  cursor: pointer;
  background-color: blanchedalmond;
  border: 1px solid #00008B;
  border-radius: 1rem;
  color: #00008B;
  transition: all .3s ease-in;
}

button:hover{
    background-color: #00008B;
    color: blanchedalmond;
}

button::before {
  content: '←';
  position: absolute;
  left: -1rem;
  opacity: 0;
  color: blanchedalmond;
  transition: all 0.2s ease-in;
}

button::after {
  content: 'Volver';
  display: inline-block;
  transition: transform 0.2s ease-in;
}

button:hover::before {
  left: .8rem;
  opacity: 1;
}

button:hover::after {
  transform: translateX(.5rem);
}

</style>
