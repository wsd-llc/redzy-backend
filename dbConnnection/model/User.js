const mongoose = require("mongoose");
const { User, Bronze, InValid, Active } = require("../../instance");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
    },
    email: String,
    hashedPassword: String,
    salt: String,
    role: { type: String, default: User },
    status: { type: String, default: InValid },//notValid | valid | blocked
    accountStatus: { type: String, default: Active },//Active | blocked
    
    otp: {
        otpString: { type: String, default: null }, // Use null as default for otpString
        otpExpirationDate: { type: Date, default: null }, // Use null as default for otpExpirationDate
    },

    adminRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    mainAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    otpResendDate: { type: Date, default: Date.now() },

    // hashedPassport: String,
    // saltPassport: String,
    accountLevel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commission'
    },

    adminCode: {type: String},
    walletId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet'
    },
    withdrawalPinSalt: String,
    withdrawalPin: {type: String, default: "null"},
    walletAddress: String,
    walletType: String,
    currentJourney: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Journey'
    }
    
}, { timestamps: true })


module.exports = mongoose.model('User', UserSchema)