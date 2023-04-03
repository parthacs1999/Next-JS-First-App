import { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/MeetupDetail";
import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";
const MeetUpDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetUpDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
        </Fragment>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('your mongo URI');
    const db = client.db();
    const meetupsCollections = db.collection('meetups');
    const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: blocking,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect('your mongo URI');
    const db = client.db();
    const meetupsCollections = db.collection('meetups');
    const selectedMeetup = await meetupsCollections.findOne({ _id: new ObjectId(meetupId) });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetUpDetails;