import { useRouter } from "next/router";

const DetailsPage = () => {
    const router = useRouter();
    const param = router.query.newsId;
    return (
        <h1>{param}</h1>
    )
}
export default DetailsPage;