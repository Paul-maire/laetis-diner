<template>
  <div class="absolute z-50 h-screen w-screen top-0">

    <div class="overlay" ref="base"/>

    <div ref="container" class="container">

      <div @click="toggle" class="pill-container">
        <div ref="pill" class="pill"/>
      </div>

      <div ref="default" class="pb-12">
        <component :is="base" v-bind="base_props"/>
      </div>
<!-- 
      <div ref="details" class="pb-12">
        <slot v-if="details">
          <component :is="details" v-bind="details_props"/>
        </slot>
      </div> -->
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { mapGetters, mapMutations } from 'vuex'

export default {
    data: () => ({
        default_ref: null,
    }),
    mounted() {
        this.default_ref = this.$refs.default
        this.enter()
    },
    computed: {
        ...mapGetters('bottom-sheet', ['title', 'base', 'base_props', 'details', 'details_props'])
    },
    methods: {
        enter() {
            const {default: df, pill: p, base: b} = this.$refs

            const total_height = this.default_ref.clientHeight + p.clientHeight
            const targetY = 100 - total_height / b.clientHeight * 100

            anime({
                targets: this.$refs.container,
                translateY: ['100%', targetY],
                easing: 'spring(1, 90, 20, 10)'
            })
        },
        ...mapMutations('bottom-sheet', ['toggle'])
    }
}
</script>

<style scoped>
.overlay {
  @apply absolute z-10 h-screen w-full bg-black opacity-50;
}
.container {
  @apply fixed z-20 bottom-0 w-full bg-white h-screen rounded-t-3xl px-4;
}
.pill-container {
  @apply w-full z-30 py-3;
}
.pill {
  @apply w-12 h-2 rounded-full bg-black opacity-50 mx-auto;
}
</style>