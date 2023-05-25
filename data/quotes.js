const quotes = [
    {
        quoteTitle: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },

    {
        quoteTitle: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
        author: "Antoine de Saint - Exupéry"
    },
    {
        quoteTitle: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },
    {
        quoteTitle: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    }, {
        quoteTitle: "The harder I work, the luckier I get.",
        author: "Samuel Goldwyn"
    }, {
        quoteTitle: "Every problem is an opportunity in disguise.",
        author: "John Adams"
    }, {
        quoteTitle: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    }, {
        quoteTitle: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    }, {
        quoteTitle: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quoteTitle: "Genius is 1% inspiration and 99% perspiration.",
        author: "Thomas Edison"
    },

    {
        quoteTitle: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },
    {
        quoteTitle: "If you want to achieve greatness, stop asking for permission.",
        author: "Anonymous"
    },
    {
        quoteTitle: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quoteTitle: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quoteTitle: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quoteTitle: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D.Roosevelt"
    },
    {
        quoteTitle: "The best way to get something done is to begin.",
        author: "Unknown"
    },
    {
        quoteTitle: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quoteTitle: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        quoteTitle: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quoteTitle: "Be stubborn about your goals and flexible about your methods.",
        author: "Unknown"
    },
    {
        quoteTitle: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "The key to success is to focus on goals, not obstacles.",
        author: "Unknown"
    },
    {
        quoteTitle: "Effort only fully releases its reward after a person refuses to quit.",
        author: "Napoleon Hill"
    },
    {
        quoteTitle: "Do or do not. There is no try.",
        author: "Yoda"
    },
    {
        quoteTitle: "Work smarter, not harder.",
        author: "Allan F.Mogensen"
    },
    {
        quoteTitle: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        quoteTitle: "The only person you should try to be better than is the person you were yesterday.",
        author: "Matty Mullins"
    },
    {
        quoteTitle: "The harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },

    {
        quoteTitle: "Choose a job you love, and you will never have to work a day in your life.",
        author: "Confucius"
    },
    {
        quoteTitle: "The world is changing very fast. Big will not beat small anymore. It will be the fast beating the slow.",
        author: "Rupert Murdoch"
    },
    {
        quoteTitle: "If you do what you always did, you will get what you always got.",
        author: "Albert Einstein"
    },
    {
        quoteTitle: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quoteTitle: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee"
    },
    {
        quoteTitle: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        quoteTitle: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quoteTitle: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quoteTitle: "It does not matter how slowly you go, as long as you do not stop.",
        author: "Confucius"
    },
    {
        quoteTitle: "The secret of success is to know something nobody else knows.",
        author: "Aristotle Onassis"
    },

    {
        quoteTitle: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "Quality is not an act; it is a habit.",
        author: "Aristotle"
    },
    {
        quoteTitle: "The best preparation for tomorrow is doing your best today.",
        author: "H.Jackson Brown Jr."
    },
    {
        quoteTitle: "The man who moves a mountain begins by carrying away small stones.",
        author: "Confucius"
    },
    {
        quoteTitle: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou"
    },
    {
        quoteTitle: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    },
    {
        quoteTitle: "A goal without a plan is just a wish.",
        author: "Antoine de Saint - Exupéry"
    },
    {
        quoteTitle: "Work hard in silence, let success make the noise.",
        author: "Frank Ocean"
    },
    {
        quoteTitle: "If you want to achieve greatness, stop asking for permission.",
        author: "Anonymous"
    },
    {
        quoteTitle: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T.Bennett"
    },

    {
        quoteTitle: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    },
    {
        quoteTitle: "Work hard in silence, let success make the noise.",
        author: "Frank Ocean"
    },
    {
        quoteTitle: "If you want to achieve greatness, stop asking for permission.",
        author: "Anonymous"
    },
    {
        quoteTitle: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T.Bennett"
    },
    {
        quoteTitle: "A smooth sea never made a skilled sailor.",
        author: "Franklin D.Roosevelt"
    },
    {
        quoteTitle: "Success is not just about making money. It's about making a difference.",
        author: "Unknown"
    },
    {
        quoteTitle: "Don't be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller"
    },
    {
        quoteTitle: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quoteTitle: "It's not about how many ideas you have, but how many you make happen.",
        author: "Unknown"
    },
    {
        quoteTitle: "Focus on being productive instead of busy.",
        author: "Tim Ferriss"
    },

    {
        quoteTitle: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "Don't be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller"
    },
    {
        quoteTitle: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg"
    },
    {
        quoteTitle: "Great things are done by a series of small things brought together.",
        author: "Vincent Van Gogh"
    },
    {
        quoteTitle: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quoteTitle: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quoteTitle: "Do not wait for the perfect moment, take the moment and make it perfect.",
        author: "Unknown"
    },
    {
        quoteTitle: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quoteTitle: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        author: "Vince Lombardi"
    },
    {
        quoteTitle: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        quoteTitle: "Every day is a chance to be better than yesterday.",
        author: "Unknown"
    },
    {
        quoteTitle: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quoteTitle: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        quoteTitle: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quoteTitle: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D.Roosevelt"
    },
    {
        quoteTitle: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee"
    },
    {
        quoteTitle: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quoteTitle: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quoteTitle: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler"
    },
    {
        quoteTitle: "The only person you should try to be better than is the person you were yesterday.",
        author: "Matty Mullins"
    },

    {
        quoteTitle: "The harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        quoteTitle: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quoteTitle: "Genius is 1% inspiration and 99% perspiration.",
        author: "Thomas Edison"
    },
    {
        quoteTitle: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },
    {
        quoteTitle: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "The harder I work, the luckier I get.",
        author: "Samuel Goldwyn"
    },
    {
        quoteTitle: "The key to success is to focus on goals, not obstacles.",
        author: "Unknown"
    },
    {
        quoteTitle: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quoteTitle: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
        author: "Antoine de Saint - Exupéry"
    },
    {
        quoteTitle: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },

    {
        quoteTitle: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "The world is changing very fast. Big will not beat small anymore. It will be the fast beating the slow.",
        author: "Rupert Murdoch"
    },
    {
        quoteTitle: "If you do what you always did, you will get what you always got.",
        author: "Albert Einstein"
    },
    {
        quoteTitle: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quoteTitle: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        quoteTitle: "Be stubborn about your goals and flexible about your methods.",
        author: "Unknown"
    },
    {
        quoteTitle: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        quoteTitle: "Work smarter, not harder.",
        author: "Allan F.Mogensen"
    },
    {
        quoteTitle: "Choose a job you love, and you will never have to work a day in your life.",
        author: "Confucius"
    },
    {
        quoteTitle: "The world needs dreamers and the world needs doers. But above all, the world needs dreamers who do.",
        author: "Sarah Ban Breathnach"
    }
]

export default quotes;