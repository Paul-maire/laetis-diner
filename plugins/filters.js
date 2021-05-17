import Vue from 'vue'

Vue.filter('time', (value, size) => {
    const labels = {
        min: 'min',
        h: 'h'
    }

    if (size && size == "long") {
        labels.min = "minutes"
        labels.h = "heures"
    }

    const m = value % 100 != 0 ? `${value % 100} ${labels.min}`: ''
    const h = Math.round(value / 100) != 0 ? `${Math.round(value / 100)} ${labels.h}` : ''
    return `${h} ${(size && size == "long" && Math.round(value / 100) > 0 && value % 100 != 0 ) ? ':' : ''} ${m}`
})

Vue.filter('difficulty', value => {
    if (value == "recipes.difficulty.easy") return "Facile"
    if (value == "recipes.difficulty.normal") return "Moyen"
    if (value == "recipes.difficulty.difficult") return "Difficile"
})

Vue.filter('done', value => {
    return value
        ? 'Déjà fait'
        : 'A faire'
})