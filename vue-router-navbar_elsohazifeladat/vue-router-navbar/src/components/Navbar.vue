<template>
  <div class="flex flex-col items-center justify-start min-h-screen">
    <!-- Navbar -->
    <nav class="bg-blue-500 text-white p-4 flex space-x-6 rounded-b-lg shadow-md">
      <RouterLink to="/" class="hover:underline font-semibold">Kezdőlap</RouterLink>
      <RouterLink to="/konyvek" class="hover:underline font-semibold">Könyvek</RouterLink>
      <RouterLink to="/kapcsolat" class="hover:underline font-semibold">Kapcsolat</RouterLink>
      <RouterLink to="/hello" class="hover:underline font-semibold">Hello</RouterLink>
      <RouterLink to="/helloworld" class="hover:underline font-semibold">Hello World</RouterLink>
    </nav>

    <!-- Router View -->
    <main class="flex flex-col items-center justify-center flex-grow p-6 text-center">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

