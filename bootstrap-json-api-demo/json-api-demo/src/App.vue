<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">

        <a class="navbar-brand">Demo App</a>

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

            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Főoldal</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/adatok">Adatok</RouterLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>

    <div class="container">
      <RouterView />
    </div>

  </div>
</template>

<script>
export default {}
</script>
