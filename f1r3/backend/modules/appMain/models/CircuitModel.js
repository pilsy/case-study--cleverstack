module.exports = function ( Model, config ) {
    return Model.extend( "Circuits",
    {
        type: config['appMain'].driver,
        softDeletable: true,
        timeStampable: true
    },
    {
        id: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        shortName: {
            type: String,
            unique: true
        },
        country: String,
        description: String,
        url: String,
        isActive: {
            type: Boolean,
            default: true
        },

        getters: {
            name: function() {
                return "FORMULA 1 " + shortName;
            }
        }
    });
};