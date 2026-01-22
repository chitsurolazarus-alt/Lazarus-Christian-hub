// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Global state
    const appState = {
        currentQuiz: [],
        userAnswers: {},
        savedVerses: JSON.parse(localStorage.getItem('savedVerses')) || [],
        currentMotivation: null
    };

    // DOM Elements
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const themeToggle = document.getElementById('themeToggle');
    const dailyVerseText = document.getElementById('dailyVerseText');
    const dailyVerseRef = document.getElementById('dailyVerseRef');
    const featureButtons = document.querySelectorAll('.feature-btn');
    
    // Initialize daily verse
    const dailyVerse = getDailyVerse();
    dailyVerseText.textContent = `"${dailyVerse.text}"`;
    dailyVerseRef.textContent = `${dailyVerse.book} ${dailyVerse.chapter}:${dailyVerse.verse} (NIV)`;
    
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
            
            // Initialize section if needed
            initializeSection(sectionId);
        });
    });
    
    // Feature button navigation
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            navItems.forEach(nav => {
                if (nav.getAttribute('data-section') === sectionId) {
                    nav.classList.add('active');
                }
            });
            
            // Show corresponding section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
            
            // Initialize section
            initializeSection(sectionId);
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-adjust');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-adjust');
        }
        
        // Save theme preference
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-adjust');
        icon.classList.add('fa-sun');
    }
    
    // Initialize sections based on current active section
    function initializeSection(sectionId) {
        switch(sectionId) {
            case 'quiz':
                initializeQuizSection();
                break;
            case 'scripture':
                initializeScriptureSection();
                break;
            case 'motivation':
                initializeMotivationSection();
                break;
            case 'psalms':
                initializePsalmsSection();
                break;
            case 'about':
                initializeAboutSection();
                break;
        }
    }
    
    // Initialize Quiz Section
    function initializeQuizSection() {
        const generateBtn = document.getElementById('generateQuiz');
        const quizContent = document.getElementById('quizContent');
        const quizSubmitArea = document.getElementById('quizSubmitArea');
        const quizResults = document.getElementById('quizResults');
        const submitBtn = document.getElementById('submitQuiz');
        const retryBtn = document.getElementById('retryQuiz');
        
        generateBtn.addEventListener('click', generateNewQuiz);
        
        if (submitBtn) {
            submitBtn.addEventListener('click', submitQuiz);
        }
        
        if (retryBtn) {
            retryBtn.addEventListener('click', generateNewQuiz);
        }
        
        // Generate initial quiz
        if (appState.currentQuiz.length === 0) {
            generateNewQuiz();
        }
    }
    
    function generateNewQuiz() {
        const category = document.getElementById('quizCategory').value;
        const difficulty = document.getElementById('quizDifficulty').value;
        const count = parseInt(document.getElementById('questionCount').value);
        
        const quizLoading = document.getElementById('quizLoading');
        const quizContent = document.getElementById('quizContent');
        const quizSubmitArea = document.getElementById('quizSubmitArea');
        const quizResults = document.getElementById('quizResults');
        
        // Show loading
        quizLoading.classList.remove('hidden');
        quizContent.innerHTML = '';
        quizSubmitArea.classList.add('hidden');
        quizResults.classList.add('hidden');
        
        // Simulate AI generation delay
        setTimeout(() => {
            // Generate quiz
            appState.currentQuiz = generateQuiz(category, difficulty, count);
            appState.userAnswers = {};
            
            // Display quiz
            displayQuiz(appState.currentQuiz);
            
            // Hide loading and show submit area
            quizLoading.classList.add('hidden');
            if (appState.currentQuiz.length > 0) {
                quizSubmitArea.classList.remove('hidden');
            } else {
                quizContent.innerHTML = '<p class="text-center">No questions found for the selected criteria. Try different settings.</p>';
            }
        }, 800);
    }
    
    function displayQuiz(questions) {
        const quizContent = document.getElementById('quizContent');
        
        if (questions.length === 0) {
            quizContent.innerHTML = '<p class="text-center">No questions available. Try different settings.</p>';
            return;
        }
        
        let quizHTML = '';
        
        questions.forEach((question, index) => {
            quizHTML += `
                <div class="question-card" data-question-id="${question.id}">
                    <div class="question-text">${index + 1}. ${question.question}</div>
                    <div class="options-container">
                        ${question.options.map((option, optIndex) => `
                            <div class="option" data-option="${optIndex}">
                                ${String.fromCharCode(65 + optIndex)}. ${option}
                            </div>
                        `).join('')}
                    </div>
                    <div class="question-reference">Reference: ${question.reference}</div>
                </div>
            `;
        });
        
        quizContent.innerHTML = quizHTML;
        
        // Add event listeners to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                const questionCard = this.closest('.question-card');
                const questionId = parseInt(questionCard.getAttribute('data-question-id'));
                const optionIndex = parseInt(this.getAttribute('data-option'));
                
                // Clear other selections in this question
                questionCard.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Select this option
                this.classList.add('selected');
                
                // Store answer
                appState.userAnswers[questionId] = optionIndex;
            });
        });
    }
    
    function submitQuiz() {
        const quizResults = document.getElementById('quizResults');
        const scoreElement = document.getElementById('score');
        const totalQuestions = document.getElementById('totalQuestions');
        const resultMessage = document.getElementById('resultMessage');
        const quizSubmitArea = document.getElementById('quizSubmitArea');
        
        let score = 0;
        
        // Calculate score
        appState.currentQuiz.forEach(question => {
            if (appState.userAnswers[question.id] === question.answer) {
                score++;
            }
        });
        
        // Display results
        totalQuestions.textContent = appState.currentQuiz.length;
        scoreElement.textContent = score;
        
        // Result message based on score
        const percentage = (score / appState.currentQuiz.length) * 100;
        let message = '';
        
        if (percentage >= 90) {
            message = 'Excellent! You have profound Bible knowledge!';
        } else if (percentage >= 70) {
            message = 'Great job! You know your Bible well!';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep studying God\'s Word.';
        } else {
            message = 'Keep studying! The more you read the Bible, the more you\'ll learn.';
        }
        
        resultMessage.textContent = message;
        
        // Show results and hide submit area
        quizResults.classList.remove('hidden');
        quizSubmitArea.classList.add('hidden');
        
        // Scroll to results
        quizResults.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Initialize Scripture Search Section
    function initializeScriptureSection() {
        const searchBtn = document.getElementById('searchScripture');
        const searchInput = document.getElementById('scriptureSearch');
        const bookFilter = document.getElementById('bookFilter');
        const verseList = document.getElementById('verseList');
        
        // Populate book filter
        bookFilter.innerHTML = '<option value="all">All Books</option>';
        bibleBooks.forEach(book => {
            bookFilter.innerHTML += `<option value="${book}">${book}</option>`;
        });
        
        // Search on button click
        searchBtn.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
        
        // Perform initial search with empty query to show some verses
        performSearch();
        
        function performSearch() {
            const searchTerm = searchInput.value.trim();
            const selectedBook = bookFilter.value;
            const searchLoading = document.getElementById('searchLoading');
            
            // Show loading
            searchLoading.classList.remove('hidden');
            verseList.innerHTML = '';
            
            // Simulate search delay
            setTimeout(() => {
                let results;
                
                if (!searchTerm) {
                    // If no search term, show random verses
                    results = [...bibleVerses].sort(() => 0.5 - Math.random()).slice(0, 10);
                } else {
                    // Check if it's a reference
                    const verseByRef = getVerseByReference(searchTerm);
                    if (verseByRef) {
                        results = [verseByRef];
                    } else {
                        // Perform keyword search
                        results = searchVerses(searchTerm, selectedBook);
                    }
                }
                
                // Display results
                displaySearchResults(results);
                
                // Hide loading
                searchLoading.classList.add('hidden');
            }, 500);
        }
        
        function displaySearchResults(verses) {
            if (verses.length === 0) {
                verseList.innerHTML = '<p class="text-center">No verses found. Try a different search term.</p>';
                return;
            }
            
            let resultsHTML = '';
            
            verses.forEach(verse => {
                resultsHTML += `
                    <div class="verse-item">
                        <div class="verse-text">"${verse.text}"</div>
                        <div class="verse-reference">${verse.book} ${verse.chapter}:${verse.verse} (NIV)</div>
                        <div class="verse-actions">
                            <button class="secondary-btn view-verse-btn" data-book="${verse.book}" data-chapter="${verse.chapter}" data-verse="${verse.verse}">
                                <i class="fas fa-expand"></i> View Full Context
                            </button>
                            <button class="secondary-btn save-verse-btn" data-book="${verse.book}" data-chapter="${verse.chapter}" data-verse="${verse.verse}">
                                <i class="fas fa-bookmark"></i> Save
                            </button>
                        </div>
                    </div>
                `;
            });
            
            verseList.innerHTML = resultsHTML;
            
            // Add event listeners to buttons
            document.querySelectorAll('.view-verse-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const book = this.getAttribute('data-book');
                    const chapter = this.getAttribute('data-chapter');
                    const verse = this.getAttribute('data-verse');
                    viewVerseInModal(book, chapter, verse);
                });
            });
            
            document.querySelectorAll('.save-verse-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const book = this.getAttribute('data-book');
                    const chapter = this.getAttribute('data-chapter');
                    const verse = this.getAttribute('data-verse');
                    saveVerse(book, chapter, verse);
                });
            });
        }
    }
    
    // Initialize Motivation Section
    function initializeMotivationSection() {
        const situationButtons = document.querySelectorAll('.situation-btn');
        const newMotivationBtn = document.getElementById('newMotivation');
        const saveMotivationBtn = document.getElementById('saveMotivation');
        const shareVerseBtn = document.getElementById('shareVerse');
        const savedVersesList = document.getElementById('savedVersesList');
        
        // Set initial motivation
        const initialVerse = getRandomMotivationVerse();
        appState.currentMotivation = initialVerse;
        updateMotivationDisplay(initialVerse);
        
        // Situation buttons
        situationButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                situationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Get motivation for this situation
                const situation = this.getAttribute('data-situation');
                const verse = getMotivationVerse(situation);
                appState.currentMotivation = verse;
                updateMotivationDisplay(verse);
            });
        });
        
        // New random motivation
        newMotivationBtn.addEventListener('click', function() {
            const verse = getRandomMotivationVerse();
            appState.currentMotivation = verse;
            updateMotivationDisplay(verse);
        });
        
        // Save current motivation
        saveMotivationBtn.addEventListener('click', function() {
            if (appState.currentMotivation) {
                saveCurrentMotivation();
            }
        });
        
        // Share verse
        shareVerseBtn.addEventListener('click', function() {
            if (appState.currentMotivation) {
                shareVerse(appState.currentMotivation);
            }
        });
        
        // Load saved verses
        updateSavedVersesDisplay();
    }
    
    function updateMotivationDisplay(verse) {
        document.getElementById('motivationText').textContent = `"${verse.verse}"`;
        document.getElementById('motivationReference').textContent = verse.reference;
        document.getElementById('motivationExplanation').textContent = verse.explanation;
    }
    
    function saveCurrentMotivation() {
        if (!appState.currentMotivation) return;
        
        const verseData = {
            verse: appState.currentMotivation.verse,
            reference: appState.currentMotivation.reference,
            explanation: appState.currentMotivation.explanation,
            timestamp: new Date().toISOString()
        };
        
        // Check if already saved
        const alreadySaved = appState.savedVerses.some(
            saved => saved.verse === verseData.verse && saved.reference === verseData.reference
        );
        
        if (!alreadySaved) {
            appState.savedVerses.push(verseData);
            localStorage.setItem('savedVerses', JSON.stringify(appState.savedVerses));
            updateSavedVersesDisplay();
            
            // Show feedback
            alert('Verse saved to your collection!');
        } else {
            alert('This verse is already in your saved collection.');
        }
    }
    
    function updateSavedVersesDisplay() {
        const savedVersesList = document.getElementById('savedVersesList');
        
        if (appState.savedVerses.length === 0) {
            savedVersesList.innerHTML = '<p class="text-center">No saved verses yet. Save some to see them here!</p>';
            return;
        }
        
        let savedHTML = '';
        
        // Show only last 5 saved verses
        const recentVerses = appState.savedVerses.slice(-5).reverse();
        
        recentVerses.forEach(verse => {
            const date = new Date(verse.timestamp).toLocaleDateString();
            savedHTML += `
                <div class="verse-item">
                    <div class="verse-text">"${verse.verse.substring(0, 100)}${verse.verse.length > 100 ? '...' : ''}"</div>
                    <div class="verse-reference">${verse.reference} • Saved on ${date}</div>
                </div>
            `;
        });
        
        savedVersesList.innerHTML = savedHTML;
    }
    
    function shareVerse(verse) {
        const shareText = `"${verse.verse}" - ${verse.reference}\n\nShared from Lazarus's Christian Hub`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Bible Verse',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Verse copied to clipboard! You can now paste it to share.');
            });
        }
    }
    
    // Initialize Psalms Section
    function initializePsalmsSection() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const prayersList = document.getElementById('prayersList');
        
        // Category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Get prayers for this category
                const category = this.getAttribute('data-category');
                displayPsalmsPrayers(category);
            });
        });
        
        // Display initial prayers
        displayPsalmsPrayers('all');
    }
    
    function displayPsalmsPrayers(category) {
        const prayers = getPsalmsPrayers(category);
        const prayersList = document.getElementById('prayersList');
        
        if (prayers.length === 0) {
            prayersList.innerHTML = '<p class="text-center">No prayers found for this category.</p>';
            return;
        }
        
        let prayersHTML = '';
        
        prayers.forEach(prayer => {
            prayersHTML += `
                <div class="prayer-card">
                    <div class="prayer-header">
                        <div class="prayer-title">${prayer.title}</div>
                        <div class="prayer-reference">${prayer.reference}</div>
                    </div>
                    <div class="prayer-text">"${prayer.text}"</div>
                    <div class="prayer-explanation">${prayer.explanation}</div>
                </div>
            `;
        });
        
        prayersList.innerHTML = prayersHTML;
    }
    
    // Initialize About Section
    function initializeAboutSection() {
        const githubBtn = document.getElementById('githubBtn');
        const privacyLink = document.getElementById('privacyLink');
        const termsLink = document.getElementById('termsLink');
        const contactLink = document.getElementById('contactLink');
        
        // GitHub button
        githubBtn.addEventListener('click', function() {
            window.open('https://github.com', '_blank');
        });
        
        // Footer links
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Privacy Policy: We value your privacy. All data is stored locally in your browser and not shared with any third parties.');
        });
        
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Terms of Use: This tool is provided for personal Bible study and spiritual growth. All Bible content is from the NIV translation.');
        });
        
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Contact: For questions or feedback, please create an issue on the GitHub repository.');
        });
    }
    
    // Modal functions
    function viewVerseInModal(book, chapter, verseNum) {
        const verse = bibleVerses.find(v => 
            v.book === book && v.chapter == chapter && v.verse == verseNum
        );
        
        if (!verse) {
            alert('Verse not found.');
            return;
        }
        
        const modal = document.getElementById('verseModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.querySelector('.close-modal');
        const closeModalBtn = document.getElementById('closeModal');
        const copyVerseBtn = document.getElementById('copyVerse');
        
        modalTitle.textContent = `${book} ${chapter}:${verseNum}`;
        modalBody.innerHTML = `
            <div class="verse-text">"${verse.text}"</div>
            <div class="verse-reference">${book} ${chapter}:${verseNum} (NIV)</div>
            <div class="verse-context">
                <h4>About this verse:</h4>
                <p>This verse is from the book of ${book}, which is part of the ${getBookCategory(book)}. 
                The full context can be found in ${book} chapter ${chapter}.</p>
            </div>
        `;
        
        // Show modal
        modal.classList.remove('hidden');
        
        // Close modal functions
        closeModal.onclick = function() {
            modal.classList.add('hidden');
        };
        
        closeModalBtn.onclick = function() {
            modal.classList.add('hidden');
        };
        
        // Copy verse
        copyVerseBtn.onclick = function() {
            const verseText = `"${verse.text}" - ${book} ${chapter}:${verseNum} (NIV)`;
            navigator.clipboard.writeText(verseText).then(() => {
                alert('Verse copied to clipboard!');
            });
        };
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        };
    }
    
    function getBookCategory(book) {
        const oldTestament = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 
                            'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', 
                            '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 
                            'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 
                            'Ecclesiastes', 'Song of Songs', 'Isaiah', 'Jeremiah', 
                            'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 
                            'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 
                            'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
        
        return oldTestament.includes(book) ? 'Old Testament' : 'New Testament';
    }
    
    function saveVerse(book, chapter, verseNum) {
        const verse = bibleVerses.find(v => 
            v.book === book && v.chapter == chapter && v.verse == verseNum
        );
        
        if (!verse) return;
        
        const verseData = {
            verse: verse.text,
            reference: `${book} ${chapter}:${verseNum}`,
            timestamp: new Date().toISOString()
        };
        
        // Check if already saved
        const alreadySaved = appState.savedVerses.some(
            saved => saved.verse === verseData.verse && saved.reference === verseData.reference
        );
        
        if (!alreadySaved) {
            appState.savedVerses.push(verseData);
            localStorage.setItem('savedVerses', JSON.stringify(appState.savedVerses));
            updateSavedVersesDisplay();
            
            // Show feedback
            alert('Verse saved to your collection!');
        } else {
            alert('This verse is already in your saved collection.');
        }
    }
    
    // Initialize current section
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        initializeSection(activeSection.id);
    }
});