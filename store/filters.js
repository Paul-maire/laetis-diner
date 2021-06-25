export const state = () => ({
    done: true,
    category: null,
    time: null,
})
  
export const mutations = {
    done(state, done) {
        state.done = done
    },
    category(state, category) {
        state.category = category
    },
    time(state, time) {
        state.time = time
    },
}
  
export const getters = {
    done: state => state.done,
    category: state => state.category,
    time: state => state.time,
}
  