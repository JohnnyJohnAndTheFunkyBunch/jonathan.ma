function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    document.getElementById("img").src = img;
}

var summary_txt = 
    {
        name: "summary.txt",
        type: "txt",
        text: "My name is Jonathan Ma, I'm a [[b;red;black]Computer Science] and [[b;red;black]Statistics] major with an [[b;red;black]Economics] Minor at [[b;red;black]University of Waterloo]\n\n" +
              "I'm experienced in [[b;aqua;black]C++/Linux] development from my internships writing clean and scalable code producing high performant applications. I enjoy writing multithreaded programs, especially low latency servers by minimizing locks. I take pride in designing maintainable and efficient server/client applications in distributed systems.\n" +
              "My specialties and interest include:\n"+
              "[[b;deeppink;black]Unix Network Programming, Concurrency, Data Structure] (C++ STL)" +
              "\n\n"+
              "When not at work, I enjoy Web Development. Currently I am working in multiple projects, but I am more focused on developing a video streaming website. I am developing a video streaming website in hopes of gaining experience with high traffic while maintaining high availability of my web servers to not hinder user experience."+
              "Using EC2, S3, RDS, CloudFront and other products from [[b;aqua;black]Amazon Web Services], I am able to develop a auto-scaling website and distribute media content accross the nodes in US to increase user experience. I develop mostly in:\n\n" +
              "Front End     : [[b;aqua;black]HTML/CSS/Javascript(JQuery)]\n"+
              "Back End      : [[b;aqua;black]PhP, Python(Django)]\n"+
              "WebServer/WCGI: [[b;aqua;black]Nginx, Green Unicorn]"+
              "\n\n" +
              "I am also interested in statistics and finance. Currently my experiences are in Equity Derivatives with an intermediete understanding of option valuation models and market making of these instruments."
              +"\n\n" +
              "In addition to above, I have little experience but interest in:\n" +
              "[[b;deeppink;black]Computer Vision, Machine Learning, AI]"



    };

var contact_txt =
    {
        name: "contact.txt",
        type: "txt",
        text: "E-mail: jonathan.ma[ at ]uwaterloo.ca\n\n" +
              "LinkedIn: https://www.linkedin.com/pub/jonathan-ma/37/13b/a08\n\n" +
              "Facebook: https://www.facebook.com/majonathanj\n\n" +
              "GitHub: https://github.com/JohnnyJohnAndTheFunkyBunch\n"
    };

var resume_pdf =
    {
        name: "JMA_Resume.pdf",
        type: "pdf",
        link: "JMA_Resume.pdf"
    };

var transcript_pdf =
    {
        name: "long_UW_transcript.pdf",
        type: "pdf",
        link: "UW_transcript.pdf"
    };
var transcript_mini_pdf =
    {
        name: "UW_transcript.pdf",
        type: "pdf",
        link: "UW_transcript_mini.pdf"
    };

var resume_txt =
    {
        name: "resume.txt",
        type: "txt",
        text: "\
\n********************************************************************************\
\n                                  Jonathan Ma\
\njonathan.ma@uwaterloo.ca                                            226.978.3108\
\n\
\n3B Honours Mathematics - Computer Science Major, Statistics Major, Econ Minor\
\n********************************************************************************\
\n\
\n   Technical Skills: C/C++, Python, Unix/Linux, Bash, Excel VBA, LaTex\
\n   Web & Design    : HTML/CSS, Django, PHP, MySQL, Adobe Photoshop\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n   ___________________________________________________________________________\
\n   Citadel\
\n   Financial Technology Summer Associate - Option IT\
\n      - Designed and developed a high performant multithreaded WebSocket/Web \
\n        server in C++ and its web interface in Javascript serving multiple \
\n        browser clients \
\n   ___________________________________________________________________________\
\n   Scotia Capital\
\n   Financial Engineer - Credit & Equity Derivatives\
\n      - Developed and improved option modelling tools for equity\
\n        derivatives traders in C++ and VBA\
\n\
\n**********************************\
\nCompetitions and Personal Projects\
\n**********************************\
\n\
\n    VixnX - http://www.vixnx.com (NSFW)\
\n\
\n    Predictious Trading Bot - https://www.predictious.com/ \
\n\
\n    Rotman International Trading Competition\
\n\
\n    Smash Player Database - http://smashrank.com \
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   University of Waterloo\
\n      - Deans Honours List: 93% Average\
"
    };

var welcome_txt = 
    {
        name: "welcome.txt",
        type: "txt",
        text: "[[b;aqua;black]Welcome to my Website. My name is Jonathan Ma]\nEnjoy your stay.\n\nPress ` to minimize the terminal. Available commands are:\n" +
              "[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open] (opens file like pdf and jpg)\n"
    };

var art_1 =
    {
        name: "DoughBoys.jpg",
        type: "pic",
        link: "DoughBoys.jpg"
    };
var art_2 =
    {
        name: "EnchantedBike.jpg",
        type: "pic",
        link: "EnchantedBike.jpg"
    };
var art_3 =
    {
        name: "HeartTouching.jpg",
        type: "pic",
        link: "HeartTouching.jpg"
    };
var art_4 =
    {
        name: "McDonaldMystery.jpg",
        type: "pic",
        link: "McDonaldMystery.jpg"
    };
var art_5 =
    {
        name: "NewYorkStarryNight.jpg",
        type: "pic",
        link: "NewYorkStarryNight.jpg"
    };
var art_6 =
    {
        name: "PaintingImitation.jpg",
        type: "pic",
        link: "PaintingImitation.jpg"
    };
var art_7 =
    {
        name: "PenDrawing.jpg",
        type: "pic",
        link: "PenDrawing.jpg"
    };
var art_8 =
    {
        name: "SeaMonster.jpg",
        type: "pic",
        link: "SeaMonster.jpg"
    };

var art =
    {
        name: "Art",
        type: "folder",
        kids: [art_1, art_2, art_3, art_4, art_5, art_6, art_7, art_8],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/Projects/Art~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                     "SeaMonster.jpg",
                     "PenDrawing.jpg",
                     "PaintingImitation.jpg",
                     "NewYorkStarryNight.jpg",
                     "McDonaldMystery.jpg",
                     "HeartTouching.jpg",
                     "EnchantedBike.jpg",
                     "DoughBoys.jpg"
                              ]);},
              }
    };

var predictious =
    {
        name: "Predictious_Bot.git",
        type: "pdf",
        link: "https://github.com/JohnnyJohnAndTheFunkyBunch/ProjectP"
    };

var coding = 
    {
        name: "Coding",
        type: "folder",
        kids: [predictious],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/Projects/Coding~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                            'Predictious_Bot.git'
                              ]);},
              }
    };



var aboutme =
    {
        name: "AboutMe",
        type: "folder",
        kids: [resume_pdf, transcript_mini_pdf, transcript_pdf, contact_txt, resume_txt,summary_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/AboutMe~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
                              'long_UW_transcript.pdf',
                              'UW_transcript.pdf',
                              'JMA_Resume.pdf'
                              ]);},
              }
    };

var projects =
    {
        name: "Projects",
        type: "folder",
        kids: [art, coding],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/Projects~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'Coding',
                              'Art',
                              ]);},
              }
    };

var home = 
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'welcome.txt',
                              'Projects',
                              'AboutMe',
                              ]);},
              }



    };

aboutme.back = home;
projects.back = home;
art.back = projects;
coding.back = projects;
