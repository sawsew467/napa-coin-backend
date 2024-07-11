const mongoose = require('mongoose');

const frameSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name must be required'],
        },
        year: {
            type: Number,
            required: [true, 'Year must be required'],
        },
        description: {
            type: String,
        },
        bannerUrl: {
            type: String,
        },
        modelUrl: {
            type: String,
        },
        scale: {
            type: Number,
            default: 1,
        },
        rotationX: {
            type: Number,
            default: 0,
        },
        rotationY: {
            type: Number,
            default: 0,
        },
        rotationZ: {
            type: Number,
            default: 0,
        },
        positionX: {
            type: Number,
            default: 0,
        },
        positionY: {
            type: Number,
            default: 0,
        },
        positionZ: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true },
);

export const Frame = mongoose.model('Frame', frameSchema);
