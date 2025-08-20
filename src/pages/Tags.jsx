import { useSearchParams } from 'react-router-dom';

import QuestionCard from '../components/QuestionCard';

import mockQuestions from '../data/mockQuestions';

export default function Tags() {

    const [searchParams] = useSearchParams();
    const tagname = searchParams.get("tagname");

    var questionWithTag = mockQuestions.filter(
        (questionSet) => ((questionSet.tags).filter((tag) => tag == tagname).length >= 1)
    );

    return (
        <>
        <div className='tag m-7 p-7 bg-red-200 text-4xl'>[ {tagname} ]</div>
            {
                questionWithTag.map(
                    (question) => {
                        return (<QuestionCard {...question} />);
                    }
                )
            }
        </> 
    );
}
