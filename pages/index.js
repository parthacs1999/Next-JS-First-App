import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        address: 'Sector 5,Kolkata,West Bengal',
        description: 'First meetup hosted by us'
    },
    {
        id: 'm2',
        title: 'React meetup',
        image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        address: 'Sector 6,Kolkata,West Bengal',
        description: 'meetup details will be forwarded to you'
    }
]
const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups} />
    )
}
export async function getStaticProps(){
    //Fetch data from database
    return {
        props:{
            meetups:DUMMY_MEETUPS
        },
        revalidate:10
    }
}
// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }
export default HomePage;