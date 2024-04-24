import { FaUserAlt } from "react-icons/fa";

export const YOUTUBE_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png";

export const SIDEBAR_CONENT = [
  {
    title: "Subscriptions",
    items: ["Gaming", "Music", "Trending", "Popular", "Sports", "News"],
  },
  {
    title: "Subscriptions2",
    items: ["Gaming", "Music", "Trending", "Popular", "Sports", "News"],
  },
  {
    title: "Subscriptions3",
    items: ["Gaming", "Music", "Trending", "Popular", "Sports", "News"],
  },
];

export const YOUTUBE_KEY = "";

export const YOUTUBE_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=100&key=${YOUTUBE_KEY}`;

export const getYoutubeVideoById = (id: string) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUTUBE_KEY}`;
};

export const YOUTUBE_SEARCH_SUGGESTIONS = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const NESTED_COMMENTS = [
  {
    name: "John",
    logo: <FaUserAlt size={28} />,
    text: "This is the first comment. It's a great starting point for the discussion.",
    replies: [
      {
        name: "Alice",
        logo: <FaUserAlt size={28} />,
        text: "I agree with John. Let's discuss further.",
        replies: [
          {
            name: "Bob",
            logo: <FaUserAlt size={28} />,
            text: "Alice, I also agree. What are your thoughts on this specific point?",
            replies: [
              {
                name: "Charlie",
                logo: <FaUserAlt size={28} />,
                text: "Bob, I think that specific point is crucial. Here's why...",
                replies: [
                  {
                    name: "Eve",
                    logo: <FaUserAlt size={28} />,
                    text: "Charlie, excellent analysis. I'd like to add...",
                    replies: [
                      {
                        name: "Grace",
                        logo: <FaUserAlt size={28} />,
                        text: "Eve, I completely agree. Additionally...",
                      },
                      {
                        name: "Daniel",
                        logo: <FaUserAlt size={28} />,
                        text: "Eve, your point resonates with me. Another aspect to consider is...",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sophie",
        logo: <FaUserAlt size={28} />,
        text: "John, your initial point is interesting. I'd like to share my perspective...",
      },
      {
        name: "Mike",
        logo: <FaUserAlt size={28} />,
        text: "John, I have a different view on this. Here's why...",
      },
    ],
  },
  {
    name: "Olivia",
    logo: <FaUserAlt size={28} />,
    text: "I appreciate the insights shared so far. Let's delve deeper into this topic.",
    replies: [
      {
        name: "Liam",
        logo: <FaUserAlt size={28} />,
        text: "Olivia, I'm glad you brought that up. One aspect we haven't discussed much is...",
      },
      {
        name: "Emma",
        logo: <FaUserAlt size={28} />,
        text: "Liam, I agree. I think exploring that aspect is crucial for a comprehensive understanding.",
        replies: [
          {
            name: "Mia",
            logo: <FaUserAlt size={28} />,
            text: "Emma, your point resonates with me. Additionally, we should consider...",
          },
          {
            name: "Noah",
            logo: <FaUserAlt size={28} />,
            text: "Emma, Mia, great points! I'd like to add my perspective on...",
            replies: [
              {
                name: "Ava",
                logo: <FaUserAlt size={28} />,
                text: "Noah, your perspective is insightful. Another angle to consider is...",
              },
              {
                name: "Jackson",
                logo: <FaUserAlt size={28} />,
                text: "Ava, I agree. Building on your point, we should also examine...",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Isabella",
    logo: <FaUserAlt size={28} />,
    text: "Great discussion, everyone! Is there a specific subtopic we should focus on next?",
    replies: [
      {
        name: "Lucas",
        logo: <FaUserAlt size={28} />,
        text: "Isabella, considering the previous discussions, maybe we should explore...",
      },
      {
        name: "Sophia",
        logo: <FaUserAlt size={28} />,
        text: "Lucas, I like your suggestion. Additionally, we should also touch upon...",
      },
    ],
  },
];

export const generateRandomName = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "Katie",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sam",
    "Tina",
    "Ulysses",
    "Violet",
    "William",
    "Xander",
    "Yvonne",
    "Zach",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const generateRandomComment = () => {
  const adjectives = [
    "Amazing",
    "Interesting",
    "Fantastic",
    "Great",
    "Awesome",
    "Wonderful",
  ];
  const nouns = [
    "video",
    "content",
    "tutorial",
    "presentation",
    "article",
    "project",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}!`;
};

export const LIVECHAT_OFFSET = 50;
