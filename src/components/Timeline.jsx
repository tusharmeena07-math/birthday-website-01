import Layout from "./Layout";

const memories = [
  {
    emoji: "✨",
    title: "The First Message",
    date: "18 September 2023",
    description:
      "This is where our story quietly began. Matlab maine to bss pucha tha ladka mila kya dance ke liye or wo baat dance se badal ke zindagi pe aagyi. I still smile whenever I think about it.",
  },
  {
    emoji: "📞",
    title: "The First Call",
    date: "kuch dino baad",
    description:
      "I don't remember the date, but I remember not wanting the call to end. We must have talked for about 40-50min pr it changed everything.",
  },
  
  {
    emoji: "🥺",
    title: "The First Fight",
    date: "date yaad ni rkhna chahiye",
    description:
      "Pahli baar jab ladhayi huyi thi toh laga tha ki ab baat hi nhi hogi, ya phir dheere dheere khtm hojayegi lekin maine smbhal liya🤧.",
  },
  {
    emoji: "❤️",
    title: 'The First " Official Date"',
    date: "14 April 2024",
    description:
      "Humari milne ko leke bohot ladhayi huyi phir finally we decided to meet one day aur jgha choose ki maine, NATIONAL MUSEUM socha  tha tujhe psnd ni  ayega, par agya. Uske baad We sat together at a bus stop, talking for hours as the evening slowly slipped away. I never imagined that such a simple moment would become one of the most beautiful memories of my life.",
  },
  {
    emoji: "🎂",
    title: "Today",
    date: "Your Birthday ❤️",
    description:
      "Today isn't just another day. It's a celebration of you, of your smile, and of all the memories we've made together. Happy Birthday Mohtarma❤️",
  },
];

function Timeline({ onContinue }) {
  return (
    <Layout>
      <h1>📖 Chapter 4</h1>

      <div className="timeline">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="timeline-item"
          >
            <h3>
              {memory.emoji} {memory.title}
            </h3>

            <small>{memory.date}</small>

            <p>{memory.description}</p>
          </div>
        ))}
      </div>

      <button onClick={onContinue}>
        Open Memories 📸
      </button>
    </Layout>
  );
}

export default Timeline;