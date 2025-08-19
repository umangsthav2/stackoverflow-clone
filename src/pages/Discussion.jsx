import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mockQuestions from '../data/mockQuestions';
import NotFound from '../pages/NotFound';

import mockUsers from '../data/mockUsers';


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

                <div className="comment-container flex flex-col gap-5">

                    <div className="comments">
                        <div className='comments-panel flex flex-row gap-7'>
                            <span>
                                <img className='min-w-[30px]' src={mockUsers[1].avatar} alt="" />
                            </span>

                            <div className="comment-content p-3 bg-[#e9e9e9] rounded-md flex- flex-col gap-2">
                                <div className="username"><Link className='text-blue-600' to='/user?id=1'>Umang Shrestha</Link></div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <div className='comments-panel flex flex-row gap-7'>
                            <span>
                                <img className='min-w-[30px]' src={mockUsers[1].avatar} alt="" />
                            </span>

                            <div className="comment-content p-3 bg-[#e9e9e9] rounded-md flex- flex-col gap-2">
                                <div className="username"><Link className='text-blue-600' to='/user?id=1'>Umang Shrestha</Link></div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <div className='comments-panel flex flex-row gap-7'>
                            <span>
                                <img className='min-w-[30px]' src={mockUsers[1].avatar} alt="" />
                            </span>

                            <div className="comment-content p-3 bg-[#e9e9e9] rounded-md flex- flex-col gap-2">
                                <div className="username"><Link className='text-blue-600' to='/user?id=1'>Umang Shrestha</Link></div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit repudiandae aspernatur quas sequi voluptatem autem. Deserunt delectus eligendi cumque accusamus! Nemo eum eligendi officiis ad, aliquam consectetur ipsa repudiandae.
                            </div>
                        </div>
                    </div>


                </div>

                <div className="add-comment my-5">
                    <div className='comment-panel flex flex-row gap-7'>
                        <span>
                            <img className='w-[50px]' src={mockUsers[1].avatar} alt="" />
                        </span>
                        <form className='w-full' onSubmit={commentSubmit}>
                            <input className='w-full p-3 border-2' type="text" name="" placeholder='Add a Comment...' id="" />
                        </form>
                    </div>
                </div>
            </div>
        </> : <NotFound />
    )
}
