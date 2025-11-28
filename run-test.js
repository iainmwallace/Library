// Node.js simulation of the test case
const testLibrary = [
    { title: "Killing Floor", author: "Lee Child", year: 1997, key: "/works/OL15497282W", subjects: ["Thriller", "Mystery", "Suspense", "Crime"] },
    { title: "Die Trying", author: "Lee Child", year: 1998, key: "/works/OL15497283W", subjects: ["Thriller", "Mystery", "Suspense"] },
    { title: "Tripwire", author: "Lee Child", year: 1999, key: "/works/OL15497284W", subjects: ["Thriller", "Mystery"] },
    { title: "Running Blind", author: "Lee Child", year: 2000, key: "/works/OL15497285W", subjects: ["Thriller", "Suspense"] },
    { title: "Echo Burning", author: "Lee Child", year: 2001, key: "/works/OL15497286W", subjects: ["Thriller", "Mystery"] },
    { title: "Without Fail", author: "Lee Child", year: 2002, key: "/works/OL15497287W", subjects: ["Thriller", "Suspense"] },
    { title: "Persuader", author: "Lee Child", year: 2003, key: "/works/OL15497288W", subjects: ["Thriller", "Mystery"] },
    { title: "The Enemy", author: "Lee Child", year: 2004, key: "/works/OL15497289W", subjects: ["Thriller", "Military fiction"] },
    { title: "One Shot", author: "Lee Child", year: 2005, key: "/works/OL15497290W", subjects: ["Thriller", "Mystery"] },
    { title: "The Hard Way", author: "Lee Child", year: 2006, key: "/works/OL15497291W", subjects: ["Thriller", "Suspense"] },
    { title: "Bad Luck and Trouble", author: "Lee Child", year: 2007, key: "/works/OL15497292W", subjects: ["Thriller", "Mystery"] },
    { title: "Nothing to Lose", author: "Lee Child", year: 2008, key: "/works/OL15497293W", subjects: ["Thriller", "Suspense"] },
    { title: "Gone Tomorrow", author: "Lee Child", year: 2009, key: "/works/OL15497294W", subjects: ["Thriller", "Mystery"] },
    { title: "61 Hours", author: "Lee Child", year: 2010, key: "/works/OL15497295W", subjects: ["Thriller", "Suspense"] },
    { title: "Worth Dying For", author: "Lee Child", year: 2010, key: "/works/OL15497296W", subjects: ["Thriller", "Mystery"] },
    { title: "A Wanted Man", author: "Lee Child", year: 2012, key: "/works/OL15497297W", subjects: ["Thriller", "Suspense"] },
    { title: "Never Go Back", author: "Lee Child", year: 2013, key: "/works/OL15497298W", subjects: ["Thriller", "Mystery"] },
    { title: "Personal", author: "Lee Child", year: 2014, key: "/works/OL15497299W", subjects: ["Thriller", "Suspense"] },
    { title: "Make Me", author: "Lee Child", year: 2015, key: "/works/OL15497300W", subjects: ["Thriller", "Mystery"] },
    { title: "Night School", author: "Lee Child", year: 2016, key: "/works/OL15497301W", subjects: ["Thriller", "Suspense"] }
];

const mockApiData = {
    subjects: {
        "Thriller": [
            { title: "The Bourne Identity", author_name: ["Robert Ludlum"], key: "/works/OL123456W", cover_i: 12345, first_publish_year: 1980, subject: ["Thriller", "Espionage", "Suspense"], edition_count: 50, ratings_count: 1000, language: ["eng"] },
            { title: "The Day of the Jackal", author_name: ["Frederick Forsyth"], key: "/works/OL123457W", cover_i: 12346, first_publish_year: 1971, subject: ["Thriller", "Suspense"], edition_count: 45, ratings_count: 800, language: ["eng"] },
            { title: "The Hunt for Red October", author_name: ["Tom Clancy"], key: "/works/OL123458W", cover_i: 12347, first_publish_year: 1984, subject: ["Thriller", "Military fiction"], edition_count: 60, ratings_count: 1200, language: ["eng"] },
            { title: "Transfer of Power", author_name: ["Vince Flynn"], key: "/works/OL123459W", cover_i: 12348, first_publish_year: 1999, subject: ["Thriller", "Political thriller"], edition_count: 30, ratings_count: 600, language: ["eng"] },
            { title: "The Lions of Lucerne", author_name: ["Brad Thor"], key: "/works/OL123460W", cover_i: 12349, first_publish_year: 2002, subject: ["Thriller", "Political thriller"], edition_count: 25, ratings_count: 500, language: ["eng"] },
            { title: "Absolute Power", author_name: ["David Baldacci"], key: "/works/OL123461W", cover_i: 12350, first_publish_year: 1996, subject: ["Thriller", "Political thriller"], edition_count: 40, ratings_count: 900, language: ["eng"] },
            { title: "Point of Impact", author_name: ["Stephen Hunter"], key: "/works/OL123462W", cover_i: 12351, first_publish_year: 1993, subject: ["Thriller", "Military fiction"], edition_count: 20, ratings_count: 400, language: ["eng"] },
            { title: "The Charm School", author_name: ["Nelson DeMille"], key: "/works/OL123463W", cover_i: 12352, first_publish_year: 1988, subject: ["Thriller", "Espionage"], edition_count: 35, ratings_count: 700, language: ["eng"] },
        ],
        "Mystery": [
            { title: "The Girl with the Dragon Tattoo", author_name: ["Stieg Larsson"], key: "/works/OL123464W", cover_i: 12353, first_publish_year: 2005, subject: ["Mystery", "Thriller"], edition_count: 70, ratings_count: 2000, language: ["eng"] },
            { title: "Gone Girl", author_name: ["Gillian Flynn"], key: "/works/OL123465W", cover_i: 12354, first_publish_year: 2012, subject: ["Mystery", "Thriller"], edition_count: 55, ratings_count: 1500, language: ["eng"] },
        ],
        "Suspense": [
            { title: "The Bourne Identity", author_name: ["Robert Ludlum"], key: "/works/OL123456W", cover_i: 12345, first_publish_year: 1980, subject: ["Thriller", "Espionage", "Suspense"], edition_count: 50, ratings_count: 1000, language: ["eng"] },
            { title: "The Day of the Jackal", author_name: ["Frederick Forsyth"], key: "/works/OL123457W", cover_i: 12346, first_publish_year: 1971, subject: ["Thriller", "Suspense"], edition_count: 45, ratings_count: 800, language: ["eng"] },
        ]
    },
    authors: {
        "Lee Child": []
    },
    descriptions: {
        "/works/OL123456W": "Jason Bourne wakes up with no memory and must piece together his identity while being hunted by assassins. A gripping thriller that redefined the espionage genre.",
        "/works/OL123457W": "A professional assassin is hired to kill Charles de Gaulle. An intense cat-and-mouse game between the killer and the detective trying to stop him.",
        "/works/OL123458W": "A Soviet submarine captain attempts to defect to the United States with his officers and the Soviet Navy's newest sub. A tense naval thriller.",
        "/works/OL123459W": "CIA operative Mitch Rapp must stop terrorists who have taken over the White House. Fast-paced political thriller with non-stop action.",
        "/works/OL123460W": "Secret Service agent Scot Harvath must rescue the President when he's kidnapped. A debut thriller that launched a bestselling series.",
        "/works/OL123461W": "A career thief witnesses the President commit murder and must stay alive while exposing the truth. Political intrigue at its finest.",
        "/works/OL123462W": "Bob Lee Swagger, a former Marine sniper, is framed for an assassination attempt and must clear his name. Action-packed military thriller.",
        "/works/OL123463W": "An American tourist stumbles upon a secret KGB training facility in Russia. Classic Cold War espionage thriller.",
        "/works/OL123464W": "A journalist and a hacker investigate a decades-old disappearance on a remote Swedish island. Dark, compelling mystery.",
        "/works/OL123465W": "A woman disappears on her fifth wedding anniversary, and her husband becomes the prime suspect. Twisty psychological thriller.",
    }
};

console.log('========================================');
console.log('RECOMMENDATION TEST - LEE CHILD LIBRARY');
console.log('========================================\n');

console.log('📚 Library: 20 Lee Child books');
console.log('👤 Authors: Lee Child');
console.log('📂 Subjects:', [...new Set(testLibrary.flatMap(b => b.subjects))].join(', '));

// Extract preferences
const myBooks = testLibrary;
const myBookKeys = new Set(myBooks.map(b => b.key));
const recommendations = [];
const seenKeys = new Set();
const authors = [...new Set(myBooks.map(book => book.author))];
const allSubjects = myBooks.flatMap(book => book.subjects || []);

// Get top subjects
const genericTerms = ['fiction', 'literature', 'books', 'reading'];
const subjectFreq = {};
allSubjects.forEach(s => {
    const lower = s.toLowerCase();
    const isGeneric = genericTerms.some(term => lower === term);
    if (!isGeneric && s.length > 3) {
        subjectFreq[s] = (subjectFreq[s] || 0) + 1;
    }
});

const topSubjects = Object.entries(subjectFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([subject]) => subject);

console.log('\n🎯 Top subjects (by frequency):');
Object.entries(subjectFreq)
    .sort((a, b) => b[1] - a[1])
    .forEach(([subject, count]) => {
        console.log(`  ${subject}: ${count} books`);
    });

console.log('\n\n--- STRATEGY 1: Favorite Authors ---');
for (const author of authors.slice(0, 5)) {
    const books = mockApiData.authors[author] || [];
    const filtered = books.filter(book => {
        const isEnglish = !book.language || book.language.includes('eng');
        return !myBookKeys.has(book.key) && !seenKeys.has(book.key) && book.cover_i && isEnglish;
    }).slice(0, 8);

    console.log(`${author}: ${filtered.length} books found`);
    filtered.forEach(book => {
        seenKeys.add(book.key);
        recommendations.push({ ...book, recommendedBy: author, recommendationType: 'author', score: 500 });
    });
}

console.log('\n--- STRATEGY 2: Genre-Based ---');
for (const subject of topSubjects.slice(0, 4)) {
    const books = mockApiData.subjects[subject] || [];
    const filtered = books.filter(book => {
        const isEnglish = !book.language || book.language.includes('eng');
        const hasSubject = book.subject?.some(s => s.toLowerCase().includes(subject.toLowerCase()));
        return !myBookKeys.has(book.key) && !seenKeys.has(book.key) && book.cover_i && isEnglish && hasSubject;
    }).slice(0, 10);

    console.log(`${subject}: ${filtered.length} books found`);
    filtered.forEach(book => {
        seenKeys.add(book.key);
        const score = (book.edition_count || 0) * 2 + (book.ratings_count || 0) * 15;
        recommendations.push({ ...book, recommendedBy: subject, score });
    });
}

console.log('\n--- STRATEGY 3: New Authors ---');
for (const subject of topSubjects.slice(0, 3)) {
    const books = mockApiData.subjects[subject] || [];
    const filtered = books.filter(book => {
        const bookAuthor = book.author_name?.[0];
        const isEnglish = !book.language || book.language.includes('eng');
        const hasSubject = book.subject?.some(s => s.toLowerCase().includes(subject.toLowerCase()));
        return bookAuthor && !authors.includes(bookAuthor) &&
               !myBookKeys.has(book.key) && !seenKeys.has(book.key) &&
               book.cover_i && isEnglish && hasSubject;
    }).slice(0, 8);

    console.log(`${subject} (new authors): ${filtered.length} books found`);
    filtered.forEach(book => {
        seenKeys.add(book.key);
        const score = (book.edition_count || 0) + (book.ratings_count || 0) * 10 + 100;
        recommendations.push({ ...book, recommendedBy: 'New author', score });
    });
}

console.log('\n\n=== TOTAL CANDIDATES COLLECTED: ' + recommendations.length + ' ===');

// Sort by score
const topCandidates = recommendations
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 100);

console.log('Top ' + topCandidates.length + ' candidates selected for validation\n');

// Validate descriptions
console.log('--- DESCRIPTION VALIDATION ---');
const validatedBooks = [];
let checkedCount = 0;

for (const book of topCandidates) {
    checkedCount++;
    const description = mockApiData.descriptions[book.key];

    if (description && description.length > 50) {
        validatedBooks.push({ ...book, description });
        console.log(`✓ [${validatedBooks.length}] "${book.title}" by ${book.author_name[0]} (${description.length} chars)`);
    } else {
        console.log(`✗ "${book.title}" - ${description ? 'too short' : 'no description'}`);
    }

    if (validatedBooks.length >= 18) break;
}

console.log('\n\n========================================');
console.log('TEST RESULTS');
console.log('========================================');
console.log('Total Candidates:', recommendations.length);
console.log('Books Checked:', checkedCount);
console.log('Valid Descriptions:', validatedBooks.length);
console.log('Final Recommendations:', validatedBooks.length);
console.log('\n✅ SUCCESS: Found ' + validatedBooks.length + ' books with descriptions');
console.log('\nRecommended Books:');
validatedBooks.forEach((book, i) => {
    console.log(`  ${i+1}. "${book.title}" by ${book.author_name[0]} (${book.first_publish_year})`);
    console.log(`     Reason: ${book.recommendedBy} | Score: ${book.score}`);
});
