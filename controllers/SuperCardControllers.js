import SuperCard from "../models/SuperCardModel.js";
import mongoose from "mongoose";

export const getSuperCard = async (req, res) => {
    try {
        const { cardId } = req.params;



        // Validate videoId format
        if (!mongoose.Types.ObjectId.isValid(cardId)) {
            return res.status(400).json({ error: "Invalid cardId format" });
        }

        // Find the video by videoId
        const card = await SuperCard.findById(cardId);

        // Check if the video exists
        if (!card) {
            return res.status(404).json({ error: "url not found" });
        }

        // Return the video data in the response
        res.json({ cardUrl: card.url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const saveSuperCard = async (req, res) => {
    try {
        console.log(req.body);

        const { url } = req.body;

        if (!url) {
            return res
                .status(400)
                .json({ error: 'The "url" field is required.' });
        }

        const data = await SuperCard.create({ url });

        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateSuperCard = async (req, res) => {
    const { cardId } = req.params;
    const { url } = req.body;
    SuperCard.findByIdAndUpdate(cardId, { url })
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err));
};

export const deleteSuperCard = async (req, res) => {
    const { _id, url } = req.body;
    SuperCard.findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err));
};
