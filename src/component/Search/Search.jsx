import { useSearchParams } from 'react-router-dom';


export default function Search(e) {


    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <span className=" text-5xl font-extrabold">
            SEARCH for {query}
        </span>
    );

}
