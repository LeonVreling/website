<template>
  <aside class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        position = "static"
        :mobile = "reduce"
        :expand-on-hover = true
        :reduce = false
        type = "is-light"
        open
        id = 'sidebar'
      >
        <div class="block">
          Placeholder
        </div>
        <b-menu class="is-custom-mobile">
          <b-menu-list label="Menu">
            <b-menu-item label="Home"/>
          </b-menu-list>
          <b-menu-list label="contact">
            <div id="contact">
              <a href="https://github.com/LeonVreling" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
              </a>
              <a href="https://www.facebook.com/leon.vreling.5/" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']" size="2x"/>
              </a>
            </div>
          </b-menu-list>
        </b-menu>

        <br><br>

        <div class="block">
          {{ joke }}
        </div>
      </b-sidebar>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      joke: null
    }
  },
  mounted () {
    this.getRandomJoke()
  },
  methods: {
    getRandomJoke () {
      fetch('https://icanhazdadjoke.com/', {
        'method': 'GET',
        'headers': {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          return response.json()
        } else {
          this.$buefy.toast.open({
            message: 'Something went wrong, please try again',
            type: 'is-danger'
          })
        }
      }).then(data => {
        this.joke = data.joke
      })
    }
  }
}
</script>

<style>
  .sidebar-page {
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 10vw;
    height: 100vh;
    min-height: 100vh;
  }

  #sidebar .sidebar-content {
    width: 10vw;
    height: 100vh;
    padding: 1vw;
  }

  #contact > a {
    display: inline-block;
    padding: 0.1em;
  }
</style>
