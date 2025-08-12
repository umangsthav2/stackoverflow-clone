import { useNavigate, useSearchParams } from 'react-router-dom';
import mockQuestions from '../../data/mockQuestions';
import NotFound from '../../pages/NotFound';

export default function Discussion() {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get('id');



    const questionContent =
    {
        questionTitle: "",
        questionContent: "",
        questionTags: [],
    }

    mockQuestions.map(
        (questionSet) => {
            if (questionSet.id == postId) {

                questionContent.questionTitle = questionSet.question;
                questionContent.questionContent = questionSet.content;
                questionContent.questionTags = questionSet.tags;
            }
        }
    )

    return (
        questionContent ? <>
            <div className="flex flex-col justify-center discussion-card p-5 border-2 m-5">
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
