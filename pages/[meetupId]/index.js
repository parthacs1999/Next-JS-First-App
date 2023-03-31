import MeetUpDetail from "../../components/meetups/MeetupDetail";
const MeetUpDetails = () => {
    return (
        <MeetUpDetail image="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="First Meetup" address="Sector 5,kolkata,west Bengal" description="The Meetup description"/>
    )
}

export function getStaticPaths(){
    return {
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1'
                }
            },
            {
                params:{
                    meetupId:'m2'
                }
            }
        ]
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    console.log(meetupId);
    return{
        props:{
            meetupData:{
                id:meetupId,
                image:"https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title:"First Meetup",
                address:"Sector 5,kolkata,west Bengal",
                description:"The Meetup description"
            }
        }
    }
}

export default MeetUpDetails;