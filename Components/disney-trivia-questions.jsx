const questions = [
  // Characters
  {
    category: "Characters",
    question:
      "Which Disney princess has a chameleon named Pascal as a sidekick?",
    answers: [
      { text: "Rapunzel", isCorrect: true },
      { text: "Ariel", isCorrect: false },
      { text: "Belle", isCorrect: false },
      { text: "Jasmine", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "What is the name of Aladdin's monkey friend?",
    answers: [
      { text: "Abu", isCorrect: true },
      { text: "Rafiki", isCorrect: false },
      { text: "Raja", isCorrect: false },
      { text: "Iago", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is Mickey Mouse's girlfriend?",
    answers: [
      { text: "Minnie Mouse", isCorrect: true },
      { text: "Daisy Duck", isCorrect: false },
      { text: "Clarabelle Cow", isCorrect: false },
      { text: "Ortensia", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "What type of animal is Bambi?",
    answers: [
      { text: "Deer", isCorrect: true },
      { text: "Rabbit", isCorrect: false },
      { text: "Skunk", isCorrect: false },
      { text: "Squirrel", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is Simba's evil uncle in 'The Lion King'?",
    answers: [
      { text: "Scar", isCorrect: true },
      { text: "Mufasa", isCorrect: false },
      { text: "Timon", isCorrect: false },
      { text: "Rafiki", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question:
      "What is the name of the blue alien experiment in 'Lilo & Stitch'?",
    answers: [
      { text: "Stitch", isCorrect: true },
      { text: "Jumba", isCorrect: false },
      { text: "Pleakley", isCorrect: false },
      { text: "Gantu", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is the villain in 'Sleeping Beauty'?",
    answers: [
      { text: "Maleficent", isCorrect: true },
      { text: "Ursula", isCorrect: false },
      { text: "Cruella De Vil", isCorrect: false },
      { text: "Mother Gothel", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "What is the name of Woody's love interest in 'Toy Story'?",
    answers: [
      { text: "Bo Peep", isCorrect: true },
      { text: "Jessie", isCorrect: false },
      { text: "Mrs. Potato Head", isCorrect: false },
      { text: "Barbie", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is Mulan's dragon sidekick?",
    answers: [
      { text: "Mushu", isCorrect: true },
      { text: "Cri-Kee", isCorrect: false },
      { text: "Khan", isCorrect: false },
      { text: "Little Brother", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "What is the name of the snowman in 'Frozen'?",
    answers: [
      { text: "Olaf", isCorrect: true },
      { text: "Sven", isCorrect: false },
      { text: "Kristoff", isCorrect: false },
      { text: "Marshmallow", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is Captain Hook's sidekick in 'Peter Pan'?",
    answers: [
      { text: "Mr. Smee", isCorrect: true },
      { text: "Tinker Bell", isCorrect: false },
      { text: "Wendy", isCorrect: false },
      { text: "Tiger Lily", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question:
      "What is the name of the Beast's human form in 'Beauty and the Beast'?",
    answers: [
      { text: "Adam", isCorrect: true },
      { text: "Gaston", isCorrect: false },
      { text: "Maurice", isCorrect: false },
      { text: "Lumière", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is the main villain in 'The Little Mermaid'?",
    answers: [
      { text: "Ursula", isCorrect: true },
      { text: "Flotsam", isCorrect: false },
      { text: "Jetsam", isCorrect: false },
      { text: "King Triton", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "What type of animal is Zazu in 'The Lion King'?",
    answers: [
      { text: "Hornbill", isCorrect: true },
      { text: "Parrot", isCorrect: false },
      { text: "Toucan", isCorrect: false },
      { text: "Flamingo", isCorrect: false },
    ],
  },
  {
    category: "Characters",
    question: "Who is the villain in '101 Dalmatians'?",
    answers: [
      { text: "Cruella De Vil", isCorrect: true },
      { text: "Jasper", isCorrect: false },
      { text: "Horace", isCorrect: false },
      { text: "Anita", isCorrect: false },
    ],
  },

  // Movies
  {
    category: "Movies",
    question: "Which Disney movie features a young lion cub who becomes king?",
    answers: [
      { text: "The Lion King", isCorrect: true },
      { text: "Tarzan", isCorrect: false },
      { text: "The Jungle Book", isCorrect: false },
      { text: "Brother Bear", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "In which Disney movie does a wooden puppet come to life?",
    answers: [
      { text: "Pinocchio", isCorrect: true },
      { text: "Toy Story", isCorrect: false },
      { text: "Alice in Wonderland", isCorrect: false },
      { text: "The Sword in the Stone", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "Which Disney princess movie is set in New Orleans?",
    answers: [
      { text: "The Princess and the Frog", isCorrect: true },
      { text: "Cinderella", isCorrect: false },
      { text: "Mulan", isCorrect: false },
      { text: "Brave", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "What was the first full-length animated feature film produced by Disney?",
    answers: [
      { text: "Snow White and the Seven Dwarfs", isCorrect: true },
      { text: "Fantasia", isCorrect: false },
      { text: "Dumbo", isCorrect: false },
      { text: "Bambi", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "Which Disney/Pixar movie features a family of superheroes?",
    answers: [
      { text: "The Incredibles", isCorrect: true },
      { text: "Big Hero 6", isCorrect: false },
      { text: "Wreck-It Ralph", isCorrect: false },
      { text: "Zootopia", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "In which Disney movie does a mermaid trade her voice for legs?",
    answers: [
      { text: "The Little Mermaid", isCorrect: true },
      { text: "Finding Nemo", isCorrect: false },
      { text: "Moana", isCorrect: false },
      { text: "Lilo & Stitch", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "Which Disney movie features a young woman who dresses as a man to join the army?",
    answers: [
      { text: "Mulan", isCorrect: true },
      { text: "Brave", isCorrect: false },
      { text: "Tangled", isCorrect: false },
      { text: "Pocahontas", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "In which Disney movie does a street urchin find a magic lamp?",
    answers: [
      { text: "Aladdin", isCorrect: true },
      { text: "The Sword in the Stone", isCorrect: false },
      { text: "Hercules", isCorrect: false },
      { text: "The Black Cauldron", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "Which Disney/Pixar movie is set in the world of professional auto racing?",
    answers: [
      { text: "Cars", isCorrect: true },
      { text: "Planes", isCorrect: false },
      { text: "Wreck-It Ralph", isCorrect: false },
      { text: "Big Hero 6", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "In which Disney movie does a young deer learn to become the prince of the forest?",
    answers: [
      { text: "Bambi", isCorrect: true },
      { text: "The Fox and the Hound", isCorrect: false },
      { text: "Brother Bear", isCorrect: false },
      { text: "The Jungle Book", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "Which Disney movie features a young woman who wants to explore the ocean beyond her island?",
    answers: [
      { text: "Moana", isCorrect: true },
      { text: "The Little Mermaid", isCorrect: false },
      { text: "Lilo & Stitch", isCorrect: false },
      { text: "Brave", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "In which Disney movie does a young girl follow a white rabbit down a hole?",
    answers: [
      { text: "Alice in Wonderland", isCorrect: true },
      { text: "The Rescuers", isCorrect: false },
      { text: "Peter Pan", isCorrect: false },
      { text: "The Great Mouse Detective", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "Which Disney/Pixar movie is set in the Land of the Dead?",
    answers: [
      { text: "Coco", isCorrect: true },
      { text: "The Nightmare Before Christmas", isCorrect: false },
      { text: "Onward", isCorrect: false },
      { text: "Soul", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question: "In which Disney movie does a girl turn her mother into a bear?",
    answers: [
      { text: "Brave", isCorrect: true },
      { text: "Brother Bear", isCorrect: false },
      { text: "The Princess and the Frog", isCorrect: false },
      { text: "Frozen", isCorrect: false },
    ],
  },
  {
    category: "Movies",
    question:
      "Which Disney movie features a colony of ants standing up to grasshoppers?",
    answers: [
      { text: "A Bug's Life", isCorrect: true },
      { text: "The Lion King", isCorrect: false },
      { text: "Ratatouille", isCorrect: false },
      { text: "The Princess and the Frog", isCorrect: false },
    ],
  },

  // Settings
  {
    category: "Settings",
    question: "In which fictional kingdom is 'Frozen' set?",
    answers: [
      { text: "Arendelle", isCorrect: true },
      { text: "Corona", isCorrect: false },
      { text: "Dunbroch", isCorrect: false },
      { text: "Atlantica", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "What is the name of the island where Moana lives?",
    answers: [
      { text: "Motunui", isCorrect: true },
      { text: "Te Fiti", isCorrect: false },
      { text: "Lalotai", isCorrect: false },
      { text: "Tamatoa", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "In which city is 'The Princess and the Frog' primarily set?",
    answers: [
      { text: "New Orleans", isCorrect: true },
      { text: "Chicago", isCorrect: false },
      { text: "New York", isCorrect: false },
      { text: "San Francisco", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "What is the name of the city where 'Big Hero 6' takes place?",
    answers: [
      { text: "San Fransokyo", isCorrect: true },
      { text: "Tokyo", isCorrect: false },
      { text: "San Francisco", isCorrect: false },
      { text: "Metroville", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "In which country is the movie 'Brave' set?",
    answers: [
      { text: "Scotland", isCorrect: true },
      { text: "Ireland", isCorrect: false },
      { text: "England", isCorrect: false },
      { text: "Wales", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question:
      "What is the name of the town where Belle lives in 'Beauty and the Beast'?",
    answers: [
      { text: "Villeneuve", isCorrect: true },
      { text: "Paris", isCorrect: false },
      { text: "Marseille", isCorrect: false },
      { text: "Lyon", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "On which planet does most of 'WALL-E' take place?",
    answers: [
      { text: "Earth", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Axiom", isCorrect: false },
      { text: "Venus", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "In which fictional land is 'Alice in Wonderland' primarily set?",
    answers: [
      { text: "Wonderland", isCorrect: true },
      { text: "Neverland", isCorrect: false },
      { text: "Oz", isCorrect: false },
      { text: "Narnia", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question:
      "What is the name of the island where the dinosaurs live in 'The Good Dinosaur'?",
    answers: [
      { text: "There is no island", isCorrect: true },
      { text: "Isla Nublar", isCorrect: false },
      { text: "Dinotopia", isCorrect: false },
      { text: "Prehistoric Isle", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "In which city does 'Ratatouille' take place?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "Lyon", isCorrect: false },
      { text: "Marseille", isCorrect: false },
      { text: "Bordeaux", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "What is the name of the kingdom in 'Tangled'?",
    answers: [
      { text: "Corona", isCorrect: true },
      { text: "Arendelle", isCorrect: false },
      { text: "DunBroch", isCorrect: false },
      { text: "Agrabah", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "In which city is 'Zootopia' set?",
    answers: [
      { text: "Zootopia", isCorrect: true },
      { text: "Animal City", isCorrect: false },
      { text: "Furburg", isCorrect: false },
      { text: "Mammal Metropolis", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "What is the name of the magical realm in 'Onward'?",
    answers: [
      { text: "New Mushroomton", isCorrect: true },
      { text: "Pixie Hollow", isCorrect: false },
      { text: "Enchanted Forest", isCorrect: false },
      { text: "Spell City", isCorrect: false },
    ],
  },
  {
    category: "Settings",
    question: "In which country does 'Mulan' take place?",
    answers: [
      { text: "China", isCorrect: true },
      { text: "Japan", isCorrect: false },
      { text: "Korea", isCorrect: false },
      { text: "Mongolia", isCorrect: false },
    ],
  },

  // Songs
  {
    category: "Songs",
    question: "Which Disney movie features the song 'A Whole New World'?",
    answers: [
      { text: "Aladdin", isCorrect: true },
      { text: "The Little Mermaid", isCorrect: false },
      { text: "Beauty and the Beast", isCorrect: false },
      { text: "Pocahontas", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "From which Disney movie is the song 'Let It Go'?",
    answers: [
      { text: "Frozen", isCorrect: true },
      { text: "Tangled", isCorrect: false },
      { text: "Moana", isCorrect: false },
      { text: "Brave", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which song from 'The Lion King' means 'No Worries' in Swahili?",
    answers: [
      { text: "Hakuna Matata", isCorrect: true },
      { text: "Circle of Life", isCorrect: false },
      { text: "Can You Feel the Love Tonight", isCorrect: false },
      { text: "Be Prepared", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which Disney princess sings 'Part of Your World'?",
    answers: [
      { text: "Ariel", isCorrect: true },
      { text: "Belle", isCorrect: false },
      { text: "Jasmine", isCorrect: false },
      { text: "Mulan", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "From which Disney movie is the song 'How Far I'll Go'?",
    answers: [
      { text: "Moana", isCorrect: true },
      { text: "Brave", isCorrect: false },
      { text: "Frozen", isCorrect: false },
      { text: "Tangled", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which song from 'Beauty and the Beast' won an Academy Award?",
    answers: [
      { text: "Beauty and the Beast", isCorrect: true },
      { text: "Be Our Guest", isCorrect: false },
      { text: "Something There", isCorrect: false },
      { text: "Belle", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which Disney villain sings 'Poor Unfortunate Souls'?",
    answers: [
      { text: "Ursula", isCorrect: true },
      { text: "Maleficent", isCorrect: false },
      { text: "Cruella De Vil", isCorrect: false },
      { text: "Scar", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question:
      "From which Disney movie is the song 'You've Got a Friend in Me'?",
    answers: [
      { text: "Toy Story", isCorrect: true },
      { text: "The Jungle Book", isCorrect: false },
      { text: "Lilo & Stitch", isCorrect: false },
      { text: "Monsters, Inc.", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which Disney princess sings 'Reflection'?",
    answers: [
      { text: "Mulan", isCorrect: true },
      { text: "Pocahontas", isCorrect: false },
      { text: "Tiana", isCorrect: false },
      { text: "Rapunzel", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "From which Disney movie is the song 'Colors of the Wind'?",
    answers: [
      { text: "Pocahontas", isCorrect: true },
      { text: "Mulan", isCorrect: false },
      { text: "The Hunchback of Notre Dame", isCorrect: false },
      { text: "Hercules", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which song from 'Frozen II' won an Academy Award?",
    answers: [
      { text: "Into the Unknown", isCorrect: true },
      { text: "Show Yourself", isCorrect: false },
      { text: "Some Things Never Change", isCorrect: false },
      { text: "Lost in the Woods", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which Disney movie features the song 'Be Our Guest'?",
    answers: [
      { text: "Beauty and the Beast", isCorrect: true },
      { text: "Aladdin", isCorrect: false },
      { text: "The Little Mermaid", isCorrect: false },
      { text: "Cinderella", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "From which Disney movie is the song 'Circle of Life'?",
    answers: [
      { text: "The Lion King", isCorrect: true },
      { text: "Tarzan", isCorrect: false },
      { text: "The Jungle Book", isCorrect: false },
      { text: "Brother Bear", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question: "Which Disney princess sings 'Just Around the Riverbend'?",
    answers: [
      { text: "Pocahontas", isCorrect: true },
      { text: "Moana", isCorrect: false },
      { text: "Ariel", isCorrect: false },
      { text: "Merida", isCorrect: false },
    ],
  },
  {
    category: "Songs",
    question:
      "From which Disney movie is the song 'When You Wish Upon a Star'?",
    answers: [
      { text: "Pinocchio", isCorrect: true },
      { text: "Cinderella", isCorrect: false },
      { text: "Sleeping Beauty", isCorrect: false },
      { text: "Snow White and the Seven Dwarfs", isCorrect: false },
    ],
  },
];

export default questions;
