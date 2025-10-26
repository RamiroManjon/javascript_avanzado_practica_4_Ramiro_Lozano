<template>
    <div class="portfolio">
        <h1>Conoce a la tripulación</h1>

        <div class="cards">
            <div
            class="card"
            v-for="personaje in projects"
            :key="personaje.id"
            @mouseenter="desenfocado = personaje.id"
            @mouseleave="desenfocado = null"
            @click="$router.push(`/project/${personaje.id}`)"
            :class="{
                desenfoque: desenfocado !== null && desenfocado !== personaje.id,
                ampliado: zoom === personaje.id
            }">
                <img v-lazy="personaje.image" :alt="personaje.title" />
                <h2>{{ personaje.title }}</h2>
                <h3>{{ personaje.nick }}</h3>

                <div v-if="zoom === personaje.id" class="detalle">
                    <p>{{ personaje.descripcion }}</p>
                    <button @click.stop="cerrar">Cerrar</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
   import { ref, onMounted } from 'vue'

    const projects = ref([])
    const desenfocado = ref(null)
    const zoom = ref(null)

    onMounted(async () => {
    try {
        const res = await fetch('/projects.json')
        projects.value = await res.json()
    } catch (error) {
        console.error('La tripulación se ha ahogado:', error)
    }
    })
</script>


<style scoped>
.portfolio {
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;

  & .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;

        & .card {
            backdrop-filter: blur(15px);
            background-color: rgba(255, 255, 255, .2);
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            width: calc(50% - 1rem);
            padding: 1rem;
            transition: all .3s ease-in-out;
        }

        & .card:hover{
            transform: scale(1.02);
            cursor: pointer;
        }
    }
}

.card img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  border-radius: 8px;
}

.desenfoque{
    filter: blur(5px) brightness(.8);
    transform: scale(1);
}

.ampliado {
  width: 100vw !important;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 4rem;
  background: white;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ampliado img {
  width: 60%;
  max-width: 600px;
  height: auto;
  margin-bottom: 2rem;
}

.detalle {
  max-width: 700px;
  text-align: left;
}

button {
  margin-top: 2rem;
  padding: 0.5rem 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

</style>