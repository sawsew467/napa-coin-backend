const mongoose = require('mongoose');

const followSchema = mongoose.Schema(
    {
        userId: {
            type: String,
        },
        followedId: {
            type: String,
        },
    },
    { timestamps: true },
);

export const Follow = mongoose.model('Follow', followSchema);
