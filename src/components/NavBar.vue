<template>
  <header>
    <div class="inner-header">
      <h1>Personajes One Piece</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/" exact-active-class="active-link">Home</router-link>
          </li>
          <li>
            <router-link to="/contact" exact-active-class="active-link">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  background-color: darkblue;
  width: 100%;
  color: white;
}

.inner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
}

nav ul {
  display: flex;
  list-style-type: none;
  gap: 2rem;
}

a {
  color: white;
  text-decoration: none;
  position: relative;
  padding-bottom: 0.2rem;
  transition: all 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: white;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

.active-link {
  font-weight: bold;
}

.active-link::after {
  width: 100%;
}
</style>
