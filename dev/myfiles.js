function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    var image = document.createElement("img");
    image.src = img;
    image.width = 1000;
    var content = document.getElementById("content");
    while(content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(image);
}

var summary_txt = 
    {
        name: "summary.txt",
        type: "txt",
        text: "My name is Jonathan Ma, I'm a [[b;red;black]Computer Science] and [[b;red;black]Statistics] major with an [[b;red;black]Economics] Minor at [[b;red;black]University of Waterloo]\n\n" +
              "I'm experienced in [[b;aqua;black]C++/Linux] development from my internships writing clean and scalable code producing high performant applications. My expertise lies in distributed systems, especially in in-memory storage systems or databases.\n In terms of software, I am interested in developing and scaling infrastructure." +
              "My specialties and interest include:\n"+
              "[[b;deeppink;black]Distributed Systems, Unix Network Programming, Concurrency, Data Structure] (C++ STL)" +
              "\n\n"+
              "When not at work, I enjoy [[b;aqua;black]Web Development] creating unique user experiences like the one you are seeing now. I love tapping into my creativity and create unorthodox design. I pride myself in finding unique ways of representing information and media." +
              "\n\n"+
              "I have experience in [[b;aqua;black]finance] and I am interested in statistics. I have a good understanding in [[b;aqua;black]Equity Derivatives] and their valuation models. I was also exposed to [[b;aqua;black]Option Market Making], but I am more interested in learning quantitative approaches to capturing Alpha."+
              "\n\n" +
              "Finally, I want to improve my leadership and managerial skills, hence I am seeking PM opportunities and data science roles relating to growth, retention, and user behaviour."
              +"\n\n"



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
\n   Technical Skills: C/C++, Python, Unix/Linux, Bash, Excel VBA\
\n   Web & Design    : HTML/CSS, Django, PHP, MySQL, Adobe Photoshop\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n   ___________________________________________________________________________\
\n   LinkedIn\
\n   Software Engineer Intern - Graph Team\
\n      - Implemented features in a new generation in memory distributed graph \
\n        database in C++ \
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
\n********\
\nResearch\
\n********\
\n\
\n    Nessie: A Decoupled, Client-Driven, Key-Balue Store using RDMA\
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
        link: "images/DoughBoys.jpg"
    };
var art_2 =
    {
        name: "EnchantedBike.jpg",
        type: "pic",
        link: "images/EnchantedBike.jpg"
    };
var art_3 =
    {
        name: "HeartTouching.jpg",
        type: "pic",
        link: "images/HeartTouching.jpg"
    };
var art_4 =
    {
        name: "McDonaldMystery.jpg",
        type: "pic",
        link: "images/McDonaldMystery.jpg"
    };
var art_5 =
    {
        name: "NewYorkStarryNight.jpg",
        type: "pic",
        link: "images/NewYorkStarryNight.jpg"
    };
var art_6 =
    {
        name: "PaintingImitation.jpg",
        type: "pic",
        link: "images/PaintingImitation.jpg"
    };
var art_7 =
    {
        name: "PenDrawing.jpg",
        type: "pic",
        link: "images/PenDrawing.jpg"
    };
var art_8 =
    {
        name: "SeaMonster.jpg",
        type: "pic",
        link: "images/SeaMonster.jpg"
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
        name: "predictious-bot.git",
        type: "pdf",
        link: "https://github.com/JohnnyJohnAndTheFunkyBunch/predictious-bot"
    };
var websocket =
    {
        name: "simplewebsocket.git",
        type: "pdf",
        link: "https://github.com/JohnnyJohnAndTheFunkyBunch/simplewebsocket"
    };

var coding = 
    {
        name: "Coding",
        type: "folder",
        kids: [predictious, websocket],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/Projects/Coding~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                            'simplewebsocket.git',
                            'predictious-bot.git'
                              ]);},
              }
    };



var aboutme =
    {
        name: "AboutMe",
        type: "folder",
        kids: [resume_pdf, contact_txt, resume_txt,summary_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/AboutMe~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
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

var blog =
    {
        name: "Blog",
        type: "folder",
        kids: [],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/Blog~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              ]);},
              }
    };
var home = 
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, blog, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]jonathan.ma:/~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'welcome.txt',
                              'Projects',
                              'Blog',
                              'AboutMe',
                              ]);},
              }



    };

aboutme.back = home;
blog.back = home;
projects.back = home;
art.back = projects;
coding.back = projects;
