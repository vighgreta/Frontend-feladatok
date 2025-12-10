<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a class="navbar-brand" href="#" @click.prevent="$router.push('/')">
        MotorShop
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <!-- Home -->
          <li class="nav-item">
            <RouterLink 
              to="/" 
              class="nav-link" 
              active-class="active-link"
            >Kezdőlap</RouterLink>
          </li>

          <!-- Motors -->
          <li class="nav-item">
            <RouterLink 
              to="/motors" 
              class="nav-link" 
              active-class="active-link"
            >Motorok</RouterLink>
          </li>

        </ul>
      </div>
    </nav>

    <!-- PAGE CONTENT -->
    <main class="py-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// nincs szükség importokra ide
</script>

<style>
/* aktív link */
.active-link {
  font-weight: bold;
  color: #0d6efd !important;
  text-decoration: underline;
}

/* layout fix */
main {
  min-height: calc(100vh - 70px);
}
</style>
