module.exports = function ( Model, config ) {
    return Model.extend( "Forums",
    {
        type: config['app-main'].driver,
        softDeletable: true,
        timeStampable: true
    },
    {
        id: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: String,
            unique: true
        },
        description: String,
        isPublic: {
            type: Boolean,
            default: true
        },
        order: Number,
        lastMessageId: {
            type: Number,
            allowNull: true
        },
        isModerated: Boolean,
        isActive: {
            type: Boolean,
            default: true
        },

        getters: {
            threads: function() {
                return 0;
            },
            messages: function() {
                return 0;
            },
            lastMessage: function() {
                return {
                    subject: 'N/A'
                };
            }
        }
    });
};