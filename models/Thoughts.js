const { Schema, model, Types, trusted } = require('mongoose');
const moment = require('moment');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 200
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp),
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema ({
    thoughtBody: {
        type: String,
        required: true,
        maxlength: 300
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtSchema);


module.exports = Thoughts;