import { MongoClient } from "mongodb";

// /api/new-meet-up
//only post request will be considered through this route
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://riz_codes:Mongo_riz_123@cluster0.5geqr1z.mongodb.net/meetups?retryWrites=true&w=majority');
        const db=client.db();
        const meetupsCollections=db.collection('meetups');
        const result=await meetupsCollections.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:'Meetup inserted!'});
    }
}
export default handler;