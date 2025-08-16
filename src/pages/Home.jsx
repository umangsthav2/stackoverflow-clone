
import { useEffect, useState } from "react";
import mockQuetion from "../data/mockQuestions";
import QuestionCard from "../components/QuestionCard";
import UserCard from "../components/UserCard";

export default function Home() {
    document.title = "Home | Stackoverflow Clone";
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        setQuestions(mockQuetion)
    }, [])
    return (
        <>
            {questions.map((question) => (<QuestionCard key={question.id} {...question} />))}
        </>
    );
}