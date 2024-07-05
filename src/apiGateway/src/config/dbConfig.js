import mongoose from 'mongoose';


export default  mongoose.connect(`${process.env.MONGO_CONN_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});