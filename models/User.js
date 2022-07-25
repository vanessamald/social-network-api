const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
        // add a validator to the email field
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ] 
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// get the length of the user's friends array
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;