import mongoose from 'mongoose';

const SupplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true
    },
    memberNumber: {
        type: Number,
        required: true,
        trim: true
    },
    interests: {
        type: [String],
        required: true,
        trim: true
    },
}, { strict: false });

const Supplier = mongoose.models.Supplier || mongoose.model("Supplier", SupplierSchema);

export default Supplier;
