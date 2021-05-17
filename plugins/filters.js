import Vue from 'vue'

Vue.filter('time', value => {
    const m = value % 100 != 0 ? `${value % 100} min`: ''
    const h = Math.round(value / 100) != 0 ? `${Math.round(value / 100)} h` : ''
    return `${h} ${m}`
})