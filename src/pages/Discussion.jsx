import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mockQuestions from '../data/mockQuestions';
import NotFound from '../pages/NotFound';

import mockUsers from '../data/mockUsers';
import mockComments from '../data/dataAssets/mockComments';


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
        questionCreator: null

    }

    const commentSubmit = (e) => {
        e.preventDefault();
        alert("Comment Added");
    }

    var userData = {
        name: null
    }

    mockQuestions.map(
        (questionSet) => {
            if (questionSet.question_id == postId) {

                qnFound = true;
                questionContent.questionTitle = questionSet.question;
                questionContent.questionContent = questionSet.content;
                questionContent.questionTags = questionSet.tags;
                questionContent.questionCreator = questionSet.creator_id;
            }
        }
    )

    mockUsers.map(
        (user) => {
            if (questionContent.questionCreator == user.id) userData.name = user.name;
        }
    );

    if (!qnFound) questionContent = null;

    return (
        questionContent ? <>
            <div className="flex flex-col shadow-md rounded-lg justify-center discussion-card bg-[#f9f9f9] p-5 m-5">
                <h1 className='mb-3 text-3xl font-bold'>{questionContent.questionTitle}</h1>
                <span>Asked By <Link className='text-xl text-blue-600 underline' to={`/user?id=` + questionContent.questionCreator}>{userData.name}</Link> </span>
                <p className=' text-justify my-5 text-lg'>{questionContent.questionContent}</p>
                <div className="tags flex gap-5">
                    {
                        (questionContent.questionTags).map((tags) => { return <span key={tags} className=" flex flex-wrap bg-blue-100 min-w-[10px] w-auto text-blue-800 px-3 py-1 rounded-full text-sm" >{tags}</span> })
                    }
                </div>
                <hr className='my-5' />

                <div className="add-comment my-5">
                    <div className='comment-panel flex flex-row gap-7'>
                        <span>
                            <img className='w-[50px]' src={mockUsers[1].avatar} alt="" />
                        </span>
                        <form className='w-full' onSubmit={commentSubmit}>
                            <input className='w-full rounded-md p-3 border-2' type="text" name="" placeholder='Add a Comment...' id="" />
                        </form>
                    </div>
                </div>

                <div className="comment-container flex flex-col gap-5">
                    {
                        mockComments.map(
                            (comment) => {
                                return (
                                    <div className="comments">
                                        <div className='comments-panel flex items-center flex-row gap-3'>
                                            <img className='rounded-xl h-[40px]' src={mockUsers[3].avatar} alt="" />
                                            <div className="comment-content p-3 bg-[#e9e9e9] rounded-lg flex- flex-col gap-2">
                                                <div className="username"><Link className='text-blue-600' to={`/user?id=${comment.commenter_id}`}>{`Commentor ID= ${comment.commenter_id}`}</Link></div>
                                                {comment.comment_content}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        )
                    }


                </div>


            </div>
        </> : <NotFound />
    )
}
