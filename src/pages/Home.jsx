
import { useEffect, useState } from "react";
import mockQuetion from "../data/mockQuestions";
import QuestionCard from "../components/QuestionCard";
import UserCard from "../components/UserCard";

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