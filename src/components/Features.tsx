import { HoverEffect } from "./ui/card-hover-effect";

export function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "MarketPlace",
    description:
      "A platform to showcase to your ideas and connect woth the investors",
    link: "https://stripe.com",
  },
  {
    title: "Virtual Sharktank",
    description:
      "A video conferencing service  which helps investors to  organize virtual sharktanks and ask different startups to join their event to pitch thier ideas.",
    link: "https://netflix.com",
  },
  {
    title: "BizzGPT",
    description:
      "A specially designed AI chatbot well trained related to buisness ideas and evaluates your pitch and provides a detailed feedback and negative analysis to list down the weak areas of your pitch",
      link: "https://google.com",
  },
  {
    title: "Ideaplace",
    description: " Startups can list their ideas and the investors can filter the startups based on domai, usp, buisness plans, sales, etc",
      link: "https://meta.com",
  },
  {
    title: "News",
    description: "One platform to get all the news related to latest buisness news in the market. User can select both Positive and Negative news in the market all filtered at one place",
      link: "https://amazon.com",
  },
  {
    title: "Dashboard",
    description:
      "A personalised dashboard to analyse your activites and notifications",
      link: "https://microsoft.com",
  },
];
