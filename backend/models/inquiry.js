import mongoose from 'mongoose';

const userInquirySchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 12,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 50,
        trim:true,
        lowercase: true,
    },
    inquiry_sub: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500,
    },
    issue_addressed: {
        type: Boolean,
        default: false
    }
});

const Inquiry = mongoose.model('Inquiry', userInquirySchema);
export default Inquiry;