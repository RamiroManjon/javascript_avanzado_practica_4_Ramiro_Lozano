<template>
  <section class="contact">
    <h1>Contacto</h1>
    <p>
      Si quieres más información sobre otro personaje, puedes rellenar el siguiente formulario:
    </p>

    <form @submit.prevent="enviarFormulario">
      <label>
        Nombre
        <input type="text" v-model="nombre" required />
      </label>

      <label>
        Email
        <input type="email" v-model="email" required />
      </label>

      <label>
        Mensaje
        <textarea v-model="mensaje" required></textarea>
      </label>

      <button type="submit">Enviar</button>

      <p v-if="enviado" class="confirmacion">
        Arigato! Gracias por querer ser un nuevo nakama!
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')
const enviado = ref(false)

function enviarFormulario() {
  console.log('Formulario enviado:', { nombre: nombre.value, email: email.value, mensaje: mensaje.value })
  enviado.value = true

  nombre.value = ''
  email.value = ''
  mensaje.value = ''
}
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: left;
  background: rgba(0, 0, 139, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: white;
  border: none;
}

input,
textarea {
  margin-top: 0.5rem;
  padding: 0.8rem;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 1rem;
  background-color: transparent;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button {
  align-self: center;
  background-color: darkblue;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: navy;
}

.confirmacion {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
}
</style>
