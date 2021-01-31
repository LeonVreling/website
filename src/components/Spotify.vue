<template>
  <div id="spotify">
    <p v-if="body">
      Welcome, {{ body.display_name }}!
      <br/><br/>
      <spotify-game :token="token" />
    </p>
    <p v-else>Something went wrong with logging in :(</p>
  </div>

</template>

<script>
import SpotifyGame from '@/components/SpotifyGame.vue'

export default {
  name: 'Spotify',
  components: {
    SpotifyGame
  },
  data () {
    return {
      token: null,
      body: null,
      top: null
    }
  },
  methods: {

  },
  created () {
    this.token = this.$route.hash.substring(1).split('&')[0].split('=')[1]

    fetch('https://api.spotify.com/v1/me', {
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
      // console.log(data)
      this.body = data
    })
  }
}
</script>

<style>
  #spotify {
    padding: 5vh;
  }

</style>
