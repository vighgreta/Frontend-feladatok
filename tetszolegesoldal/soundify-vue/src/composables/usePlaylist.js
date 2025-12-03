import { ref, computed } from 'vue'
import { mockData } from '../data/mockData'

export function usePlaylist() {
  const playlists = ref(mockData.playlists)
  const currentPlaylist = ref(null)
  const isPlaying = ref(false)

  const trendingPlaylists = computed(() =>
    playlists.value.filter(p => p.category === 'trending')
  )

  const playPlaylist = (playlist) => {
    currentPlaylist.value = playlist
    isPlaying.value = true
    console.log('Now playing:', playlist.title)
  }

  const stopPlaylist = () => {
    isPlaying.value = false
  }

  const searchPlaylists = (query) => {
    if (!query) return playlists.value
    
    const lowerQuery = query.toLowerCase()
    return playlists.value.filter(p =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
    )
  }

  return {
    playlists,
    currentPlaylist,
    isPlaying,
    trendingPlaylists,
    playPlaylist,
    stopPlaylist,
    searchPlaylists
  }
}