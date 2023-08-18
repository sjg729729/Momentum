const quotes = [
  {
    quote: "창조란 모든 것을 연결하는 것이다.",
    author: "스티브 잡스",
  },
  {
    quote: "한낱 빛 따위가 어찌 어둠을 알 랴.",
    author: "프리드리히 니체",
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
    author: "캐롤 버넷",
  },
  {
    quote: "가장 지혜로운 자는 허송세월을 가장 슬퍼한다.",
    author: "단테",
  },
  {
    quote: "늘 갈망하고 우직하게 나아가라.",
    author: "스티브 잡스",
  },
  {
    quote: "반성되지 않는 삶은 인간으로서 살 가치가 없다.",
    author: "소크라테스",
  },
  {
    quote: "지옥을 겪고 있다면 계속 겪어 나가라.",
    author: "윈스턴 처칠",
  },
  {
    quote: "해야할 일은 과감히 하라. 결심한 일은 반드시 실행하라.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "늦었다고 생각할 때가 진짜 너무 늦었다. 그러니 지금 당장 시작해라.",
    author: "박명수",
  },
  {
    quote: "나를 죽이지 못하는 것은 나를 강하게 만든다.",
    author: "프리드리히 니체",
  },
  {
    quote: "인생은 고통이다",
    author: "김종필",
  },
  {
    quote: "Simple is the best",
    author: "최재웅",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// console.log(todaysQuote);
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
