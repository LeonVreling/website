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
export default {
  name: 'Landing',
  data () {
    return {
      token: null
    }
  },
  methods: {
    authorizeSpotify () {
      var CLIENT_ID = '2a4516102ac543b78be97d3449a3b352'
      var REDIRECT = 'https%3A%2F%2Fwww.vreling.nl%2F%23%2Fspotify%2F'
      var SCOPE = 'user-read-private%20user-read-email%20user-read-currently-playing'

      console.log('The Spotify button was pressed!')
      window.open('https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID + '&response_type=token&redirect_uri=' + REDIRECT + '&scope=' + SCOPE)

      var REGEX = RegExp('access_token=.*?&')
      this.token = this.location.href.match(REGEX)[0].replace('access_token=', '').slice(0, -1)

      // this.location.href.match(RegExp('access_token=.*?&'))[0].replace('access_token=', '').slice(0, -1)

      // }).then(response => {
      //   if (response.ok) {
      //     return response.json()
      //   } else {
      //     this.$buefy.toast.open({
      //       message: 'Something went wrong, please try again',
      //       type: 'is-danger'
      //     })
      //   }
      // }).then(data => {
      //   console.log(data)
      // })
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
