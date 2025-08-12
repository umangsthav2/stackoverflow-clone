
import { useEffect, useState } from "react";
import mockQuetion from "../../data/mockQuestions";
import Card from "../../common/Card";

export default function Main() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        setQuestions(mockQuetion)
    }, [])

    return (
        <>
            {questions.map((question) => (
                <Card key={question.id} {...question} />
            ))

            }
        </>
    );
}