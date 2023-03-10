let intervalID;
let animationID;
let algorythmID = 0;

const algorythmTypes = {
  0: "First algorythm",
  1: "Second algorythm",
};
/* 
########################
## AGENTS' DIMENSIONS ##
########################
*/
const HEIGHT = 10;
const WIDTH = 3;
const DEPTH = 3;

/* 
####################
## SCENE SETTINGS ##
####################
*/
// ground params
const GROUND_WIDTH = 800;
const GROUND_HEIGHT = 500;
const INIT_POS_X = GROUND_WIDTH / 2;
const INIT_POS_Z = GROUND_HEIGHT / 2;
// camera params
const CAMERA_ANGLE = 1.57;
const CAMERA_ZOOM = 700;
const CAMERA_POS_X = INIT_POS_X;
const CAMERA_POS_Y = INIT_POS_Z;
const CAMERA_VIEW_TYPE = 1; // 1 - normal view; -1 - from the top view

/* 
#######################
### SYSTEM SETTINGS ###
#######################
*/
// agent amount
let agentsAmount = 500;
// Promień sąsiedztwa
let neighbourRadius = 8.0;
// Kąt obserwacji
let observDegree = 120.0;
// Odleglosc minimalna
let minDistance = 8.0;
// Waga prędkości sąsiadów
let weightNeighbourVelocity = 0.1;
// Waga odległości sąsiadów
let weightNeighbourDistance = 0.15;
// Waga odległości minimalnej
let weightMinimalDistance = 0.15;
// Waga zakłóceń
let weightPerturbation = 0.1;
// Prędkość maksymalna
let maxVelocity = 1.0;
// defines how fast agents move towards the target
let speedToTarget = 1.0;
// defines how fast agents will get to the target
let timeToTarget = 2000; // time in ms
// defines how likely most of the agents will get to the target
let chanceToGetToTarget = 2; // example: 100 / 3 ~~ 33.3% => 0 === 100%
// defines how likely most of the agents will leave the target
let chanceToLeaveTarget = 10; // example: 100 / 3 ~~ 33.3%
//the lower the number the more the boid is biased towards going to it's current target: 1 -> no bias, 0 -> infinite bias
let currentTargetPriority = 0.8;
/* 
##########################
### OBSTACLE POSITIONS ###
##########################
*/

const OBSTACLE_POSITIONS = [
  {
    name: "Student Center",
    x: 400,
    y: 220,
    width: 50,
    depth: 190,
    rotation: 0,
  },
  {
    name: "Store",
    x: 520,
    y: 100,
    width: 25,
    depth: 25,
    rotation: 30,
  },
  {
    name: "Restaurant",
    x: 320,
    y: 125,
    width: 25,
    depth: 25,
    rotation: 0,
  },
  {
    name: "Library",
    x: 510,
    y: 233,
    width: 15,
    depth: 15,
    rotation: 0,
  },
  {
    name: "FST",
    x: 620,
    y: 373,
    width: 100,
    depth: 50,
    rotation: 0,
  },
  {
    name: "Apartment S3",
    x: 180,
    y: 300,
    width: 130,
    depth: 130,
    rotation: 0,
  },
  {
    name: "Apartment S2",
    x: 180,
    y: 150,
    width: 130,
    depth: 130,
    rotation: 0.05,
  },
  {
    name: "IOTSC",
    x: 785,
    y: 360,
    width: 30,
    depth: 130,
    rotation: 0,
  },
  {
    name: "",
    x: 640,
    y: 305,
    width: 85,
    depth: 20,
    rotation: 0,
  },
  {
    name: "Labs",
    x: 700,
    y: 360,
    width: 30,
    depth: 130,
    rotation: 0,
  },
  {
    name: "N22",
    x: 760,
    y: 470,
    width: 80,
    depth: 60,
    rotation: 0,
  },
];

let TARGET_POSITIONS = [
  {
    name: "Student Center",
    x: 400,
    y: 220,
    width: 70,
    depth: 210,
    rotation: 0,
    attraction_range: 100,
  },
  {
    name: "Store",
    x: 520,
    y: 100,
    width: 45,
    depth: 45,
    rotation: 0,
    attraction_range: 100,
  },
  {
    name: "Restaurant",
    x: 320,
    y: 125,
    width: 45,
    depth: 45,
    rotation: 0,
    attraction_range: 100,
  },
  {
    name: "Library",
    x: 510,
    y: 233,
    width: 65,
    depth: 0,
    rotation: 0,
    attraction_range: 50,
  },
  {
    name: "FST",
    x: 620,
    y: 373,
    width: 120,
    depth: 80,
    rotation: 0,
    attraction_range: 150,
  },
  {
    name: "Apartment S3",
    x: 180,
    y: 300,
    width: 150,
    depth: 150,
    rotation: 0,
    attraction_range: 100,
  },

  {
    name: "N22",
    x: 760,
    y: 470,
    width: 100,
    depth: 80,
    rotation: 0,
    attraction_range: 100,
  },
];
