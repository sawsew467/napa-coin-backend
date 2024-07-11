import { Request, Response, NextFunction } from 'express';
import { Frame } from '../models/FrameModel';

export const getAllFrames = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const frames = await Frame.find({}).sort({ createdAt: -1 });

        res.status(200).json({
            status: 'success',
            data: frames,
            length: frames?.length,
        });
    } catch (err) {
        next(err);
    }
};

export const createOneFrame = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        await Frame.create({
            ...data,
        });
        res.status(200).json({
            status: 'success',
        });
    } catch (err) {
        next(err);
    }
};

export const getFrameById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const frame = await Frame.findById(id);

        res.status(200).json({
            status: 'success',
            data: frame,
        });
    } catch (err) {
        next(err);
    }
};

export const editFrame = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const data = req.body;

        await Frame.findByIdAndUpdate(id, data);

        res.status(200).json({
            status: 'success',
        });
    } catch (err) {
        next(err);
    }
};

export const deleteFrame = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        await Frame.findByIdAndDelete(id);

        res.status(200).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        next(err);
    }
};
