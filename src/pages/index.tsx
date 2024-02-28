import Faq from "@/components/Faq";
import { questionList } from "@/data";

const Home = () => {
  return (
    <main className="page">
      <h1 className="text-4xl font-semibold text-center mb-16">
        Frequently Asked Questions
      </h1>
      <Faq data={questionList} />
    </main>
  );
};

export default Home;
