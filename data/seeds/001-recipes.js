exports.seed = function(knex, Promise) {
    return knex('recipes').del()
        .then(function () {
            return knex('recipes').insert([{
                "id": 1,
                "user_id": 1,
                "title": "Appetizer - Spring Roll, Veg",
                "source": "Jennilee",
                "notes": "Test"
            },
            {
                "id": 2,
                "user_id": 1,
                "title": "Pomello",
                "source": "Lester",
                "notes": "test"
              }
            ])
        })
    }