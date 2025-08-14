
import { useEffect, useState } from "react";
import mockQuetion from "../data/mockQuestions";
import QuestionCard from "../common/QuestionCard";
import UserCard from "../common/UserCard";

export default function Home() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        document.title = "Home | Stackoverflow Clone";
        setQuestions(mockQuetion)
    }, [])
    return (
        <>
            {questions.map((question) => (<QuestionCard key={question.id} {...question} />))}
        </>
    );
}