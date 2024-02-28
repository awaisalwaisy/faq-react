import FaqItem from "./_item";

type Props = {
  data: {
    question: string;
    answer: string;
    open?: boolean;
  }[];
};

const Faq: React.FC<Props> = ({ data }) => {
  return (
    <section className="border w-[600px] space-y-2">
      {data.map((q, i) => (
        <FaqItem key={q.question} {...q} open={i === 0 ? true : q.open} />
      ))}
    </section>
  );
};

export default Faq;
