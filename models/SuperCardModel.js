import mongoose from "mongoose";

const SuperCardSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

const SuperCard = mongoose.model('SuperCard', SuperCardSchema);
export default SuperCard;