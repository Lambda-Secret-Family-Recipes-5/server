exports.seed = function(knex, Promise) {
    return knex('tags').del()
        .then(function () {
            return knex('tags').insert([
                {
                    "id": 1,
                    "tag": "stew",
                    "recipe_id": 1
                },
                {
                    "id": 2,
                    "tag": "pie",
                    "recipe_id": 2
                },  
            ])
        })
}