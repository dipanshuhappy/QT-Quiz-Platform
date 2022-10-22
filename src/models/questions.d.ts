declare type Quiz = {
  id: string;
  title: string;
  description: string?;
  rules: string[]?;
  questions: Question[];
};
declare type Question = {
  id: int?;
  image: string?;
  type: "options" | "fill-in-blank";
  title: string;
  options: Option[] | undefined;
  answer: ""?;
};
declare type Option = {
  id: "A" | "B" | "C" | "D";
  option: string;
};
