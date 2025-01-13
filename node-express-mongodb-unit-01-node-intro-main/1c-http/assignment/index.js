
const http = require('http');
const fs = require('fs');

const jokes = [
  "What's the pirate's favorite letter? The 'C.'",
  "How do you make a squid laugh? Give it ten-tickles.",
  "What's the best way to make an egg roll? Push it.",
  "What did one eye say to the other? Between us, something smells.",
  "When does a dad joke become a dad joke? When it becomes apparent.",
  "Why did the leaf go to the doctor? It had a bad fall.",
  "A bossy man walked into a bar, then ordered everyone a round.",
  "I'm not a hard drinker. I actually find it pretty easy.",
  "Did you hear about the tree that went into banking? It started its own branch.",
  "How does a lumberjack know how many trees he's cut down? He keeps a log.",
  "Why do barbers make good drivers? They know a lot of short cuts.",
  "I'd tell you a pizza joke, but it's probably too cheesy.",
  "Did you hear about the kidnapping? They woke her up.",
]

const albums = [
    {
        artist: "Remi Wolf",
        album: "I'm Allergic To Dogs!",
        release_date: "2020-06-24",
        track_list: [
          "Down the Line",
          "Woo!",
          "Hello Hello Hello",
          "Photo ID",
          "Disco Man",
        ],
      },
      {
        artist: "Kenny Beats",
        album: "LOUIE",
        release_date: "2022-08-31",
        track_list: [
          "Leonard",
          "Parenthesis",
          "Hold My Hand",
          "So They Say",
          "Family Tree",
          "Hooper",
          "Still",
          "Moire",
          "Get Around",
          "Eternal",
          "Last Words",
          "Drop 10",
          "The Perch",
          "Really Really",
          "That Third Thing",
          "Rotten",
          "Hot Hand",
        ],
      },
      {
        artist: "Steve Lacey",
        album: "Gemini Rights",
        release_date: "2022-7-15",
        track_list: [
          "Static",
          "Helmet",
          "Mercury",
          "Buttons",
          "Bad Habit",
          "2Gether (Enterlude)",
          "Cody Freestyle",
          "Amber",
          "Sunshine (feat. Foushee)",
          "Give You the World",
        ],
      },
      {
        artist: "JPEGMAFIA",
        album: "LP!",
        release_date: "2021-03-22",
        track_list: [
          "TRUST!",
          "DIRTY!",
          "NEMO!",
          "END CREDITS!",
          "WHAT KIND OF RAPPIN' IS THIS?",
          "THOT'S PRAYER!",
          "ARE U HAPPY?",
          "REBOUND!",
          "OG!",
          "DAM! DAM! DAM!",
          "SICK, NERVOUS & BROKE!",
          "KISSY, FACE EMOJI",
          "NICE!",
          "BMT",
          "THE GHOST OF RANKING DREAD!",
          "CUTIE PIE!",
          "BALD!",
          "BALD! REMIX",
        ],
      },
      {
        artist: "Childish Gambino",
        album: "Awaken, My Love!",
        release_date: "2016-12-02",
        track_list: [
          "Me and Your Mama",
          "Have Some Love",
          "Boogieman",
          "Zombies",
          "Riot",
          "Redbone",
          "California",
          "Terrified",
          "Baby Boy",
          "The Night Me and Your Mama Met",
          "Stand Tall",
        ],
      },
      {
        artist: "Thundercat",
        album: "It Is What It Is",
        release_date: "2020-04-03",
        track_list: [
          "Lost in Space / Great Scott / 22-26",
          "Innerstellar Love",
          "I Love Louis Cole (feat. Louis Cole)",
          "Black Qualls (feat. Steve Lacy, Steve Arrington & Childish Gambino)",
          "Miguel's Happy Dance",
          "How Sway",
          "Funny Thing",
          "Overseas (feat. Zack Fox)",
          "Dragonball Durag",
          "How I Feel",
          "King of the Hill",
          "Unrequited Love",
          "Fair Chance (feat. Ty Dolla $ign & Lil B)",
          "Existential Dread",
          "It Is What It Is",
        ],
      },
]

const server = http.createServer((request,response) => {
    if (request.url === '/jokes'){
        const i = Math.floor(Math.random() * jokes.length);
        response.end();
    } else if (request.url === '/albums') {
        const i = Math.floor(Math.random() * albums.length);
        response.writeHead(200, {"Content-Type": 'application/json'});
        response.end(JSON.stringify(albums[i]));
    } else {
        fs.readFile('./404.html', (err, data) => {
            if (err) {
                response.end('Error reading 404.html')
                console.log('Error reading 404.html')
                
                return; 
            }
            response.writeHead(404, {'Content-type': 'text/html'})
            response.end(data);
        })
    }
});
const PORT = 3001;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));