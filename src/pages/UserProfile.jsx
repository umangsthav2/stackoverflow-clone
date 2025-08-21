import { Link, useSearchParams } from 'react-router-dom';

import mockUsers from '../data/mockUsers';
import mockQuestions from '../data/mockQuestions';


import QuestionCard from '../components/QuestionCard';

import NotFound from './NotFound';
import Tag from '../components/Tag';

export default function UserProfile() {
    document.title = "User Profile | Stackoverflow Clone";
    const [param] = useSearchParams();
    const userID = param.get('id');


    var userFound = false;

    var userContent = mockUsers.filter(
        (user) => (user.id == userID)
    );

    document.title = userContent.name + " | Stackoverflow Clone";
    return (
        (userContent.length >= 1) ?
            <>
                {
                    userContent.map(
                        (userData) => {
                            return (
                                <>
                                    <span className="flex flex-col rounded-lg flex-wrap  p-2 m-2 gap-15 items-center justify-center">
                                        <span className="avatar-container shrink-0 h-60 rounded-lg overflow-hidden">
                                            <img className="h-full" src={userData.avatar} alt="" />
                                        </span>
                                        <span className="detail-container flex flex-col gap-5 justify-center items-center p-3">
                                            <h1 className="username text-4xl font-bold ">{userData.name}</h1>
                                            <h1 className="username text-2xl">{userData.score}</h1>
                                            <span className="tag-container flex flex-row gap-3">
                                                {
                                                    (userData.tags).map(
                                                        (user_tags) => <Tag tagname={user_tags} key={userData.id} />
                                                    )
                                                }
                                            </span>
                                        </span>
                                    </span>
                                    {
                                        (
                                            mockQuestions.filter(
                                                (question) => ((userData.questions).filter((userQuestion) => question.question_id == userQuestion).length >= 1)
                                            )
                                        ).map((questionData) => { return (<QuestionCard {...questionData}></QuestionCard>) })
                                    }
                                </>
                            );
                        }


                    )
                }



            </> : <NotFound />)
}
