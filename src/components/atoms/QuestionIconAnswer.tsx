import { ReactNode } from "react";
import { HandLeftOutline } from "react-ionicons";

interface QuestionIconAnswerProps {
  question: ReactNode;
  answer: ReactNode;
}

export default function QuestionIconAnswer({ question, answer }: QuestionIconAnswerProps) {
  return (
    <>
      <p className="p-question">{question}</p>
      <div className="before-buy">
        <HandLeftOutline height="25px" width="25px" color="rgba(100, 58, 124, 0.7)" />

        {answer}
      </div>
    </>
  );
}
