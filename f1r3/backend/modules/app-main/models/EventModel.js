module.exports = (function ( Model, config, CircuitModel ) {
    return Model.extend( "Events",
    {
        type: config['app-main'].driver,
        softDeletable: true,
        timeStampable: true,
    },
    {
        id: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        // circuitId: {
        //     type: Number, // relationship: CircuitsModel
        //     unique: 'seasson-circuit'
        // },
        circuitId: {
            type: Number,
            allowNull: false,
            unique: 'seasson-circuit'
        },
        fp1_dateTime: Date,
        fp2_dateTime: Date,
        fp3_dateTime: Date,
        qly_dateTime: Date,
        race_dateTime: Date,
        seasson: {
            type: Number,
            unique: 'seasson-circuit',
            allowNull: false
        },
        isActive: {
            type: Boolean,
            default: true
        },
        // circuit: {
        //     type: Model['CircuitModel'],
        //     required: true
        // }
        // getters: {
        //     circuit: function() {
        //         // var p = new Promise();

        //         return CircuitModel.find({ id: this.circuitId }).then(function(data){
        //             return data;
        //         });

        //         // return p.Promise();
        //     }
            // circuit: function(){
            //     return this.getCircuits();
            // }
        // }
    });

    //events.hasOne('Circuit', CircuitModel);
    // events.defineModelAssociations('Circuit', 'hasOne');

    //return events;
});