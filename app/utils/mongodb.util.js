const { MongoClient } = require('mongodb');

class MongoDB {
    static client;

    static async connect(uri) {
        if (this.client) return this.client;

        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        try {
            await this.client.connect();
            console.log("Connected to MongoDB!");
            return this.client;
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error; 
        }
    }
}

module.exports = MongoDB;