import mongoose from "mongoose";
import envsConfig from "./envs.config";

export class MongoConfig {

    connect(){
        try {
            if(!envsConfig.MONGO_URL) throw new Error ("Not connected to db")
            mongoose.connect(envsConfig.MONGO_URL);
            console.log("Connected to MongoDB")
        } catch (error) {
            console.log(`Connection error: ${error}`)
        }
    }
};
