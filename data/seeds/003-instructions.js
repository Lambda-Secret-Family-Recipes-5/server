exports.seed = function(knex, Promise) {
    return knex('instructions').del()
    .then(function () {
        return knex('instructions').insert([
            {"id":1,"recipe_id":2,"name":"curabitur convallis duis consequat dui nec nisi volutpat eleifend"},
            {"id":2,"recipe_id":2,"name":"venenatis lacinia aenean sit amet justo morbi ut odio cras"},
            {"id":3,"recipe_id":1,"name":"mi integer ac neque duis"},
        ])
    })
}