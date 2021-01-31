<template>
  <div>
    Your favourite songs of last month were:
    <br/>
    <song-card
      v-for="(track, index) in data"
      :key="track.id"
      :index="index + 1"
      :song="track"
    />

  </div>

</template>

<script>
import SongCard from '@/components/SongCard.vue'

export default {
  name: 'Spotify Game',
  components: {
    SongCard
  },
  props: {
    token: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: null
    }
  },
  methods: {

  },
  created () {
    fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10', {
      'headers': {
        'Authorization': 'Bearer ' + this.token
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        /* Handle error in fetch */
      }
    }).then(data => {
      console.log(data.items)
      this.data = data.items
    })
  }
}
</script>
