exports.seed = function(knex, Promise) {
    return knex('ingredients').del()
        .then(function () {
            return knex('ingredients').insert([ 
                {'id':1, 'name':'Hinge W Undercut','recipe_id':1},
                {"id":2,"name":"Creme De Menth - White","recipe_id":2},
                {"id":3,"name":"Jam - Raspberry,jar","recipe_id":1},
                {"id":4,"name":"Squid - U - 10 Thailand","recipe_id":1},
                {"id":69,"name":"Apple - Macintosh","recipe_id":1},
                
            ])
        })
}