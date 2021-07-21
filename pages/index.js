import Link from "next/link"
import { useRouter } from "next/router";

const userName = "Ikanny!!!";

const IndexPage = () => {
    const router = useRouter();
    const onMoveClick = () => router.push("/friends")
    return (
        <div>
            <p>hello world! {userName}</p>
            <Link href="/counter">
            <a>Counter</a>
            </Link>
            <p> </p>
            <button onClick={onMoveClick}>move</button>
        </div>
    );
}

export default IndexPage;

//hello world! Ikanny!!!
//data binding
//data를 UI bind 묶는다