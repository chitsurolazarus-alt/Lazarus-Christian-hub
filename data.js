// data.js

// NIV Bible Verses Database (Sample)
const bibleVerses = [
    { book: "Genesis", chapter: 1, verse: 1, text: "In the beginning God created the heavens and the earth." },
    { book: "Genesis", chapter: 1, verse: 27, text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
    { book: "Genesis", chapter: 50, verse: 20, text: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives." },
    { book: "Exodus", chapter: 20, verse: 12, text: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you." },
    { book: "Psalms", chapter: 23, verse: 1, text: "The Lord is my shepherd, I lack nothing." },
    { book: "Psalms", chapter: 23, verse: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
    { book: "Psalms", chapter: 46, verse: 1, text: "God is our refuge and strength, an ever-present help in trouble." },
    { book: "Psalms", chapter: 119, verse: 105, text: "Your word is a lamp for my feet, a light on my path." },
    { book: "Proverbs", chapter: 3, verse: 5, text: "Trust in the Lord with all your heart and lean not on your own understanding." },
    { book: "Proverbs", chapter: 3, verse: 6, text: "In all your ways submit to him, and he will make your paths straight." },
    { book: "Isaiah", chapter: 40, verse: 31, text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
    { book: "Isaiah", chapter: 41, verse: 10, text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
    { book: "Jeremiah", chapter: 29, verse: 11, text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
    { book: "Matthew", chapter: 5, verse: 16, text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
    { book: "Matthew", chapter: 6, verse: 33, text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
    { book: "Matthew", chapter: 11, verse: 28, text: "Come to me, all you who are weary and burdened, and I will give you rest." },
    { book: "Matthew", chapter: 28, verse: 19, text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
    { book: "John", chapter: 1, verse: 1, text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
    { book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { book: "John", chapter: 14, verse: 6, text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'" },
    { book: "Acts", chapter: 1, verse: 8, text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth." },
    { book: "Romans", chapter: 8, verse: 28, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
    { book: "Romans", chapter: 12, verse: 2, text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will." },
    { book: "1 Corinthians", chapter: 13, verse: 4, text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
    { book: "1 Corinthians", chapter: 13, verse: 13, text: "And now these three remain: faith, hope and love. But the greatest of these is love." },
    { book: "Galatians", chapter: 5, verse: 22, text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness." },
    { book: "Ephesians", chapter: 2, verse: 8, text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God." },
    { book: "Philippians", chapter: 4, verse: 6, text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." },
    { book: "Philippians", chapter: 4, verse: 13, text: "I can do all this through him who gives me strength." },
    { book: "Colossians", chapter: 3, verse: 23, text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
    { book: "1 Thessalonians", chapter: 5, verse: 16, text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus." },
    { book: "2 Timothy", chapter: 1, verse: 7, text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
    { book: "Hebrews", chapter: 11, verse: 1, text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
    { book: "James", chapter: 1, verse: 5, text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you." },
    { book: "1 Peter", chapter: 5, verse: 7, text: "Cast all your anxiety on him because he cares for you." },
    { book: "1 John", chapter: 1, verse: 9, text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
    { book: "Revelation", chapter: 21, verse: 4, text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." }
];

// Quiz Questions Database
const quizQuestions = [
    {
        id: 1,
        question: "Who was the first man created by God?",
        options: ["Adam", "Noah", "Abraham", "Moses"],
        answer: 0,
        reference: "Genesis 2:7",
        category: "old"
    },
    {
        id: 2,
        question: "How many days did God take to create the world?",
        options: ["5 days", "6 days", "7 days", "10 days"],
        answer: 1,
        reference: "Genesis 1:31",
        category: "old"
    },
    {
        id: 3,
        question: "Who built the ark?",
        options: ["Abraham", "Moses", "Noah", "David"],
        answer: 2,
        reference: "Genesis 6:14",
        category: "old"
    },
    {
        id: 4,
        question: "Who was thrown into the lions' den?",
        options: ["Daniel", "David", "Joseph", "Elijah"],
        answer: 0,
        reference: "Daniel 6:16",
        category: "old"
    },
    {
        id: 5,
        question: "Who was the mother of Jesus?",
        options: ["Elizabeth", "Mary", "Martha", "Ruth"],
        answer: 1,
        reference: "Matthew 1:18",
        category: "gospel"
    },
    {
        id: 6,
        question: "How many disciples did Jesus have?",
        options: ["7", "10", "12", "15"],
        answer: 2,
        reference: "Matthew 10:1",
        category: "gospel"
    },
    {
        id: 7,
        question: "Which disciple denied Jesus three times?",
        options: ["Peter", "John", "Judas", "Thomas"],
        answer: 0,
        reference: "Matthew 26:69-75",
        category: "gospel"
    },
    {
        id: 8,
        question: "Where was Jesus born?",
        options: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"],
        answer: 2,
        reference: "Matthew 2:1",
        category: "gospel"
    },
    {
        id: 9,
        question: "Who wrote most of the New Testament letters?",
        options: ["Peter", "John", "Paul", "James"],
        answer: 2,
        reference: "Various epistles",
        category: "pauline"
    },
    {
        id: 10,
        question: "What is the last book of the Bible?",
        options: ["Jude", "Revelation", "Malachi", "Acts"],
        answer: 1,
        reference: "Revelation 22:21",
        category: "prophecy"
    },
    {
        id: 11,
        question: "Which sea did Moses part?",
        options: ["Red Sea", "Dead Sea", "Sea of Galilee", "Mediterranean Sea"],
        answer: 0,
        reference: "Exodus 14:21",
        category: "miracles"
    },
    {
        id: 12,
        question: "Who was the first martyr of the Christian church?",
        options: ["Stephen", "Paul", "Peter", "John"],
        answer: 0,
        reference: "Acts 7:59",
        category: "gospel"
    },
    {
        id: 13,
        question: "What did Jesus turn water into at the wedding in Cana?",
        options: ["Milk", "Oil", "Wine", "Honey"],
        answer: 2,
        reference: "John 2:1-11",
        category: "miracles"
    },
    {
        id: 14,
        question: "How many books are in the New Testament?",
        options: ["27", "39", "66", "50"],
        answer: 0,
        reference: "Complete New Testament",
        category: "all"
    },
    {
        id: 15,
        question: "Who was known as the 'weeping prophet'?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
        answer: 1,
        reference: "Book of Jeremiah",
        category: "prophecy"
    }
];

// Motivation Verses by Situation
const motivationVerses = {
    comfort: [
        {
            verse: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
            reference: "2 Corinthians 1:3-4 (NIV)",
            explanation: "God doesn't just offer sympathy; He is the source of all comfort. When you're hurting, He draws near to bring healing and peace that you can then share with others."
        },
        {
            verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
            reference: "Psalm 34:18 (NIV)",
            explanation: "In your deepest pain, God isn't distant. He is especially near to those with broken hearts, ready to bring salvation and restoration."
        }
    ],
    strength: [
        {
            verse: "I can do all this through him who gives me strength.",
            reference: "Philippians 4:13 (NIV)",
            explanation: "True strength doesn't come from your own abilities but from Christ who empowers you to face any challenge or circumstance."
        },
        {
            verse: "He gives strength to the weary and increases the power of the weak.",
            reference: "Isaiah 40:29 (NIV)",
            explanation: "When you feel exhausted and powerless, God specializes in renewing strength and empowering those who depend on Him."
        }
    ],
    hope: [
        {
            verse: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
            reference: "Romans 15:13 (NIV)",
            explanation: "Hope isn't just wishful thinking; it's a confident expectation that comes from God Himself, filling you with joy and peace as you trust in Him."
        },
        {
            verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
            reference: "Jeremiah 29:11 (NIV)",
            explanation: "Even when you can't see the way forward, God has good plans for your life that include hope and a meaningful future."
        }
    ],
    peace: [
        {
            verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
            reference: "John 14:27 (NIV)",
            explanation: "Jesus offers a peace that transcends circumstances—not like temporary worldly peace, but deep, abiding peace that calms troubled hearts."
        },
        {
            verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
            reference: "Philippians 4:6-7 (NIV)",
            explanation: "When anxiety threatens, the antidote is prayerful surrender to God, resulting in a peace so profound it defies human logic."
        }
    ],
    guidance: [
        {
            verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
            reference: "Proverbs 3:5-6 (NIV)",
            explanation: "Guidance comes not from relying on your limited understanding but from wholehearted trust in God's infinite wisdom and direction."
        },
        {
            verse: "Your word is a lamp for my feet, a light on my path.",
            reference: "Psalm 119:105 (NIV)",
            explanation: "God's Word provides just enough light for the next step, guiding you safely through life's uncertainties one step at a time."
        }
    ],
    joy: [
        {
            verse: "The joy of the Lord is your strength.",
            reference: "Nehemiah 8:10 (NIV)",
            explanation: "True, lasting joy comes from the Lord Himself and becomes your source of strength in every circumstance."
        },
        {
            verse: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
            reference: "1 Thessalonians 5:16-18 (NIV)",
            explanation: "Joy isn't dependent on circumstances but is a choice to rejoice in who God is and what He's done, expressed through constant prayer and gratitude."
        }
    ],
    courage: [
        {
            verse: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
            reference: "Joshua 1:9 (NIV)",
            explanation: "Courage comes from knowing God's presence is with you in every situation, empowering you to face challenges without fear."
        },
        {
            verse: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
            reference: "2 Timothy 1:7 (NIV)",
            explanation: "God's Spirit within you doesn't produce fear but empowers you with boldness, love, and sound judgment to face any challenge."
        }
    ],
    forgiveness: [
        {
            verse: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
            reference: "1 John 1:9 (NIV)",
            explanation: "God's forgiveness isn't based on our worthiness but on His faithfulness and justice. When we confess, He completely cleanses us."
        },
        {
            verse: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
            reference: "Colossians 3:13 (NIV)",
            explanation: "Our ability to forgive others flows from experiencing God's forgiveness toward us. As we've been forgiven, so we should forgive."
        }
    ]
};

// Psalms Prayers by Category
const psalmsPrayers = [
    {
        id: 1,
        title: "Prayer for Protection",
        reference: "Psalm 91",
        text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
        explanation: "This powerful prayer affirms God as our ultimate protector in times of danger, fear, or uncertainty.",
        category: "protection"
    },
    {
        id: 2,
        title: "Prayer of Repentance",
        reference: "Psalm 51",
        text: "Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions. Wash away all my iniquity and cleanse me from my sin.",
        explanation: "A heartfelt prayer of confession and request for forgiveness, acknowledging our need for God's mercy and cleansing.",
        category: "forgiveness"
    },
    {
        id: 3,
        title: "Prayer for Guidance",
        reference: "Psalm 25",
        text: "Show me your ways, Lord, teach me your paths. Guide me in your truth and teach me, for you are God my Savior, and my hope is in you all day long.",
        explanation: "A prayer asking God for direction and wisdom, expressing trust in His guidance through life's decisions.",
        category: "guidance"
    },
    {
        id: 4,
        title: "Prayer of Praise",
        reference: "Psalm 103",
        text: "Praise the Lord, my soul; all my inmost being, praise his holy name. Praise the Lord, my soul, and forget not all his benefits.",
        explanation: "An exuberant prayer of worship that recalls God's many blessings and encourages the soul to praise Him wholeheartedly.",
        category: "praise"
    },
    {
        id: 5,
        title: "Prayer in Times of Trouble",
        reference: "Psalm 46",
        text: "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.",
        explanation: "A prayer of confidence in God's presence and power during tumultuous times, affirming that He is our safe place.",
        category: "help"
    },
    {
        id: 6,
        title: "Prayer of Thanksgiving",
        reference: "Psalm 100",
        text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. For the Lord is good and his love endures forever; his faithfulness continues through all generations.",
        explanation: "A joyful prayer of gratitude that invites us to approach God with thankful hearts, recognizing His enduring love and faithfulness.",
        category: "thanksgiving"
    },
    {
        id: 7,
        title: "Prayer for Deliverance",
        reference: "Psalm 34",
        text: "I sought the Lord, and he answered me; he delivered me from all my fears. The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
        explanation: "A prayer testifying to God's faithfulness in answering cries for help and delivering from fear and trouble.",
        category: "help"
    },
    {
        id: 8,
        title: "Prayer of Trust",
        reference: "Psalm 23",
        text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
        explanation: "Perhaps the most beloved prayer of trust, portraying God as a caring shepherd who provides, guides, and restores.",
        category: "praise"
    },
    {
        id: 9,
        title: "Prayer for Justice",
        reference: "Psalm 82",
        text: "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed. Rescue the weak and the needy; deliver them from the hand of the wicked.",
        explanation: "A prayer asking God to intervene on behalf of the vulnerable and oppressed, calling for divine justice in an unjust world.",
        category: "help"
    },
    {
        id: 10,
        title: "Prayer of Lament",
        reference: "Psalm 13",
        text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? But I trust in your unfailing love; my heart rejoices in your salvation.",
        explanation: "A honest prayer that expresses deep sorrow and questioning, yet concludes with trust in God's faithful love.",
        category: "help"
    }
];

// Get unique book names for filter
const bibleBooks = [...new Set(bibleVerses.map(verse => verse.book))];

// Daily verse of the day (randomized)
function getDailyVerse() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % bibleVerses.length;
    return bibleVerses[index];
}

// Get verse by reference
function getVerseByReference(reference) {
    // Simple reference parsing (e.g., "John 3:16")
    const parts = reference.match(/(\d?\s?\w+)\s+(\d+):(\d+)/i);
    if (!parts) return null;
    
    const book = parts[1].trim();
    const chapter = parseInt(parts[2]);
    const verse = parseInt(parts[3]);
    
    return bibleVerses.find(v => 
        v.book.toLowerCase() === book.toLowerCase() && 
        v.chapter === chapter && 
        v.verse === verse
    );
}

// Search verses by keyword
function searchVerses(keyword, bookFilter = "all") {
    const searchTerm = keyword.toLowerCase();
    return bibleVerses.filter(verse => {
        const matchesKeyword = verse.text.toLowerCase().includes(searchTerm) || 
                              verse.book.toLowerCase().includes(searchTerm);
        
        const matchesBook = bookFilter === "all" || verse.book === bookFilter;
        
        return matchesKeyword && matchesBook;
    });
}

// Generate quiz based on parameters
function generateQuiz(category, difficulty, count) {
    let filteredQuestions = [...quizQuestions];
    
    // Filter by category
    if (category !== "all") {
        filteredQuestions = filteredQuestions.filter(q => q.category === category);
    }
    
    // Adjust based on difficulty
    if (difficulty === "easy") {
        filteredQuestions = filteredQuestions.filter(q => 
            ["old", "gospel"].includes(q.category) && q.id <= 8
        );
    } else if (difficulty === "hard") {
        filteredQuestions = filteredQuestions.filter(q => 
            ["pauline", "prophecy", "miracles"].includes(q.category) || q.id > 10
        );
    }
    
    // Shuffle questions
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    
    // Return requested number of questions
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get motivation verse by situation
function getMotivationVerse(situation) {
    const verses = motivationVerses[situation];
    if (!verses || verses.length === 0) {
        return motivationVerses.comfort[0]; // Default to comfort
    }
    
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

// Get random motivation verse
function getRandomMotivationVerse() {
    const situations = Object.keys(motivationVerses);
    const randomSituation = situations[Math.floor(Math.random() * situations.length)];
    return getMotivationVerse(randomSituation);
}

// Get Psalms prayers by category
function getPsalmsPrayers(category = "all") {
    if (category === "all") {
        return psalmsPrayers;
    }
    
    return psalmsPrayers.filter(prayer => prayer.category === category);
}