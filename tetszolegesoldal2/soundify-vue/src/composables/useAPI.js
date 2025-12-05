import { ref } from 'vue'

export function useAPI() {
  const loading = ref(false)
  const error = ref(null)

  // REST API hívás (példa: JSON Placeholder)
  const fetchData = async (url) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      return data
    } catch (err) {
      error.value = err.message
      console.error('API Error:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  // Spotify-szerű API mock (saját backend helyett)
  const fetchPlaylists = async () => {
    // Valódi API példa (JSONPlaceholder users -> playlistek)
    const users = await fetchData('https://jsonplaceholder.typicode.com/users')
    
    if (!users) return []
    
    // Átalakítjuk playlist formátumra
    return users.map(user => ({
      id: user.id,
      title: `${user.name}'s Playlist`,
      description: `Curated by ${user.username} • ${user.company.catchPhrase}`,
      image: `https://picsum.photos/seed/${user.id}/300/300`,
      songs: Math.floor(Math.random() * 100) + 20,
      category: user.id % 2 === 0 ? 'trending' : 'chill'
    }))
  }

  // Albumok lekérése (posts -> albums)
  const fetchAlbums = async () => {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts?_limit=12')
    
    if (!posts) return []
    
    return posts.map(post => ({
      id: post.id,
      title: post.title.substring(0, 30) + '...',
      artist: `Artist ${post.userId}`,
      image: `https://picsum.photos/seed/album${post.id}/300/300`,
      year: 2020 + (post.id % 5)
    }))
  }

  return {
    loading,
    error,
    fetchData,
    fetchPlaylists,
    fetchAlbums
  }
}