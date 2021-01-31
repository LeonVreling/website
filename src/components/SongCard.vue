<template>
  <div id="card">
    <span id="index">
      {{ index }})
    </span>
    <div id="image"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="playSong"
    >
      <img :src="song.album.images[2].url" />
      <font-awesome-icon v-if="hover && !playing" :icon="['far', 'play-circle']" size="2x" id="icon"/>
      <font-awesome-icon v-if="playing" :icon="['far', 'pause-circle']" size="2x" id="icon"/>

    </div>
    <div id="info">
      <p id="overflow-wrapper">
        <span class="title is-3" id="title">{{ song.name }}</span>
        <span style="margin-left: 0.5em;">({{ song.album.release_date.split('-')[0] }})</span>
      </p>
      <div id="overflow-wrapper">
        <template v-if="song.artists.length >= 1" class="subtitle is-5">
          <span v-for="(artist, index) in song.artists" :key="artist.id">
            <span>
              {{ artist.name }}<!--
         --></span><!-- Weird comments to remove the space between spans :p
         --><span v-if="index != song.artists.length-1">, </span>
          </span>
        </template>
        <span class="subtitle is-5" v-else>
          {{ song.artists[0].name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song Card',
  props: {
    song: Object,
    index: Number
  },
  data () {
    return {
      hover: false,
      playing: false,
      track: null
    }
  },
  methods: {
    playSong () {
      if (this.playing) {
        this.track.pause()
        this.playing = false
      } else {
        this.track.play()
        this.playing = true
      }
    }
  },
  created () {
    this.track = new Audio(this.song.preview_url)

    this.track.addEventListener('ended', (event) => {
      this.playing = false
    })
  }
}

</script>

<style>
  #card {
    display: inline-block;
    position: relative;
    background-color: #F5F5F5;
    width: 33vw;
    margin: 0.5vw;
    padding: 0.5em;
  }

  #index {
    display: inline-flex;
    align-items: center;
    position: absolute;
      left: 0.5em;
      top: 0;
    height: 100%;
  }

  #image {
    float: left;
    display: inline-block;
    line-height: 0;
    margin-left: 2em;
    cursor: pointer;
  }

  #info {
    float: left;
    display: inline-block;
    text-align: left;
    padding-left: 0.5em;
    overflow: hidden;
    width: calc(33vw - 3em - 64px);
  }

  #title {
    margin-bottom: 0;
  }

  #overflow-wrapper {
    white-space: nowrap;
  }

  #icon {
    color: white;
    position: absolute;
      left: calc(2em - 8px);
      top: 24px;
  }
</style>
