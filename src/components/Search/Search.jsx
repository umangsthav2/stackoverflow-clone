import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Search() {

    useEffect(()=> {document.title="Search | Stackoverflow Clone"},[])
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <span className=" text-5xl font-extrabold">
            SEARCH for {query}
        </span>
    );
}
