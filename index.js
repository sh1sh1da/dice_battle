var Vue = require('vue')
var Player = require('./Player.vue')

new Vue({
    el: '#player',
    render: h => {
        return h(Player, {props: {breed: "pug", age: 2, owner: "Hathi"}})
    }
})
