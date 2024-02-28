import { useState } from "react";

type Props = {
  question: string;
  answer: string;
  open?: boolean;
};

const FaqItem: React.FC<Props> = ({ question, answer, open }) => {
  const [isOpen, setOpen] = useState(open || false);
  const handleFaq = () => setOpen(!isOpen);
  return (
    <div onClick={handleFaq}>
      <h4 className="cursor-pointer">{question}</h4>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FaqItem;
