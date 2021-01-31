<template>
  <div id="home">
    <h2>Hello, and welcome to my website!</h2>
    <br><br>
    <b-button v-on:click="authorizeSpotify">Log in with Spotify</b-button>
    <br><br>
    <p>{{ token }}</p>
  </div>
</template>

<script>
const querystring = require('querystring')

export default {
  name: 'Landing',
  data () {
    return {

    }
  },
  methods: {
    authorizeSpotify () {
      const CLIENT_ID = '2a4516102ac543b78be97d3449a3b352'
      const REDIRECT = 'https://www.vreling.nl/spotify/'

      let scopes = 'user-read-private user-top-read'
      window.open(
        'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'token',
          client_id: CLIENT_ID,
          scope: scopes,
          redirect_uri: REDIRECT,
          show_dialog: 'true' // User should approve every time
        }),
        '_self'
        // '_blank',
        // 'width=400,height=600,scrollbars'
      )

      console.log('Opened new window for OAuth')
    }
  }
}
</script>

<style>
  #home {
    padding: 5vh;
    height: 85vh;
  }

  .button {
    color: inherit !important;
    background-color: #F27D42 !important;
  }
</style>
