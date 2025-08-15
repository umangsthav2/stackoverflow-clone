import { Link, useSearchParams } from 'react-router-dom';

import mockUsers from '../data/mockUsers';
import mockQuestions from '../data/mockQuestions';

import QuestionCard from '../components/QuestionCard';

import NotFound from './NotFound';

export default function UserProfile() {
    const [param] = useSearchParams();
    var userID = param.get('id');

    var userContent =
    {
        id: 4,
        avatar: null,
        name: "Umang Shrestha",
        score: 1,
        tags: ["Hadoop", "HDFS", "Big Data"]
    }
    var userFound = false;

    mockUsers.map(
        (user) => {
            if (user.id == userID) {
                userFound = true;
                userContent.id = user.id;
                userContent.avatar = user.avatar;
                userContent.name = user.name;
                userContent.score = user.score;
                userContent.tags = user.tags;
            }
        }
    )

    if (!userFound) userContent = null;

    return (

        userContent ? <>
            <span className="flex flex-col bg-red-200 rounded-lg flex-wrap  p-2 m-2 gap-15 items-center justify-center">
                <span className="avatar-container shrink-0 h-60 rounded-lg overflow-hidden">
                    <img className="h-full" src={userContent.avatar} alt="" />
                </span>
                <span className="detail-container flex flex-col gap-5 justify-center items-center p-3">
                    <h1 className="username text-4xl font-bold ">{userContent.name}</h1>
                    <h1 className="username text-2xl">{userContent.score}</h1>
                    <span className="tag-container">
                        {
                            (userContent.tags).map(
                                (user_tags) => <span className="bg-blue-100 text-xl text-blue-800 mx-1 px-3 py-1 rounded-full text-sm">{user_tags}</span>
                            )
                        }
                    </span>
                </span>
            </span>
            {
                mockQuestions.map(
                    (question) => { return (<QuestionCard  {...question} />) }
                )
            }
        </> : <NotFound />
    )
}