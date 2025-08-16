import { useSearchParams } from 'react-router-dom';
import mockQuestions from '../data/mockQuestions';
import NotFound from '../pages/NotFound';

export default function Discussion() {
    document.title = "Discussion | Stackoverflow Clone";
    const [searchParams] = useSearchParams();
    const postId = searchParams.get('id');

    var qnFound = null;

    var questionContent =
    {
        questionTitle: "",
        questionContent: "",
        questionTags: [],
    }

    mockQuestions.map(
        (questionSet) => {
            if (questionSet.id == postId) {

                qnFound = true;
                questionContent.questionTitle = questionSet.question;
                questionContent.questionContent = questionSet.content;
                questionContent.questionTags = questionSet.tags;
            }
        }
    )

    if (!qnFound) questionContent = null;

    return (
        questionContent ? <>
            <div className="flex flex-col shadow-md rounded-lg justify-center discussion-card bg-[#f9f9f9] p-5 m-5">
                <h1 className='mb-5 text-3xl font-bold'>{questionContent.questionTitle}</h1>
                <p className=' text-justify mb-5 text-lg'>{questionContent.questionContent}</p>
                <div className="tags flex gap-5">
                    {
                        (questionContent.questionTags).map((tags) => { return <span key={tags} className=" flex flex-wrap bg-blue-100 min-w-[10px] w-auto text-blue-800 px-3 py-1 rounded-full text-sm" >{tags}</span> })
                    }
                </div>
            </div>
        </> : <NotFound />
    )
}
