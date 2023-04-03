import { MongoClient } from "mongodb";

// /api/new-meet-up
//only post request will be considered through this route
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('your mongo URI');
        const db=client.db();
        const meetupsCollections=db.collection('meetups');
        const result=await meetupsCollections.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:'Meetup inserted!'});
    }
}
export default handler;