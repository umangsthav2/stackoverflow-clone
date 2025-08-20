import { useSearchParams } from 'react-router-dom';

import QuestionCard from '../components/QuestionCard';

import mockQuestions from '../data/mockQuestions';

export default function Tags() {

    document.title="Tags | Stackoverflow Clone";
    const [searchParams] = useSearchParams();
    const tagname = searchParams.get("tagname");

    const questionWithTag = mockQuestions.filter(
        (questionSet) => ((questionSet.tags).filter((tag) => tag == tagname).length >= 1)
    );
    return (
        <>
            <div className='tag m-7 p-7 font-bold text-4xl'>[ {tagname} ]
            </div>
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
