import { useState } from 'react'
import './App.css'

function App() {
    let [isTwoPlayerMode, setIsTwoPlayerMode] = useState(false);

    const defaultPlayers = { "red": true, "green": true, "yellow": true, "blue": true };
    let [players, setPlayers] = useState(defaultPlayers);

    function setTwoPlayerMode() {
        if (confirm("Game progress will be lost. continue?")) {
            setPlayers({ "red": true, "green": false, "yellow": true, "blue": false });
            reset();
            setIsTwoPlayerMode(true);
        }
    }

    function setFourPlayerMode() {
        if (confirm("Game progress will be lost. continue?")) {
            setPlayers(defaultPlayers);
            reset();
            setIsTwoPlayerMode(false);
        }
    }

    const homes = {
        "red": [16, 19, 61, 64],
        "green": [25, 28, 70, 73],
        "yellow": [160, 163, 205, 208],
        "blue": [151, 154, 196, 199]
    };
    const paths = {
        "red": [91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 106, 107, 108, 109, 110, 111],
        "green": [23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 22, 37, 52, 67, 82, 97],
        "yellow": [133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 82, 99, 100, 101, 102, 103, 104, 119, 118, 117, 116, 115, 114, 113],
        "blue": [201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 82, 99, 100, 101, 102, 103, 104, 119, 134, 133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 202, 187, 172, 157, 142, 127]
    };
    const maxRoll = 6;
    const pathLength = 57;

    const defaultActivePlayer = "red";
    let [activePlayer, setActivePlayer] = useState(defaultActivePlayer);

    const defaultNumberRolledByActivePlayer = null;
    let [numberRolledByActivePlayer, setNumberRolledByActivePlayer] = useState(defaultNumberRolledByActivePlayer);

    const defaultIsPassDisabled = true;
    let [isPassDisabled, setIsPassDisabled] = useState(defaultIsPassDisabled);

    const defaultSquares = [
        {
            "key": 0,
            "className": [
                "red"
            ]
        },
        {
            "key": 1,
            "className": [
                "red"
            ]
        },
        {
            "key": 2,
            "className": [
                "red"
            ]
        },
        {
            "key": 3,
            "className": [
                "red"
            ]
        },
        {
            "key": 4,
            "className": [
                "red"
            ]
        },
        {
            "key": 5,
            "className": [
                "red"
            ]
        },
        {
            "key": 6,
            "className": []
        },
        {
            "key": 7,
            "className": []
        },
        {
            "key": 8,
            "className": []
        },
        {
            "key": 9,
            "className": [
                "green"
            ]
        },
        {
            "key": 10,
            "className": [
                "green"
            ]
        },
        {
            "key": 11,
            "className": [
                "green"
            ]
        },
        {
            "key": 12,
            "className": [
                "green"
            ]
        },
        {
            "key": 13,
            "className": [
                "green"
            ]
        },
        {
            "key": 14,
            "className": [
                "green"
            ]
        },
        {
            "key": 15,
            "className": [
                "red"
            ]
        },
        {
            "key": 16,
            "className": [
                "red"
            ],
            "tokens": ["red"]
        },
        {
            "key": 17,
            "className": [
                "red"
            ]
        },
        {
            "key": 18,
            "className": [
                "red"
            ]
        },
        {
            "key": 19,
            "className": [
                "red"
            ],
            "tokens": ["red"]
        },
        {
            "key": 20,
            "className": [
                "red"
            ]
        },
        {
            "key": 21,
            "className": []
        },
        {
            "key": 22,
            "className": [
                "green"
            ]
        },
        {
            "key": 23,
            "className": [
                "green"
            ]
        },
        {
            "key": 24,
            "className": [
                "green"
            ]
        },
        {
            "key": 25,
            "className": [
                "green"
            ],
            "tokens": ["green"]
        },
        {
            "key": 26,
            "className": [
                "green"
            ]
        },
        {
            "key": 27,
            "className": [
                "green"
            ]
        },
        {
            "key": 28,
            "className": [
                "green"
            ],
            "tokens": ["green"]
        },
        {
            "key": 29,
            "className": [
                "green"
            ]
        },
        {
            "key": 30,
            "className": [
                "red"
            ]
        },
        {
            "key": 31,
            "className": [
                "red"
            ]
        },
        {
            "key": 32,
            "className": [
                "red"
            ]
        },
        {
            "key": 33,
            "className": [
                "red"
            ]
        },
        {
            "key": 34,
            "className": [
                "red"
            ]
        },
        {
            "key": 35,
            "className": [
                "red"
            ]
        },
        {
            "key": 36,
            "className": []
        },
        {
            "key": 37,
            "className": [
                "green"
            ]
        },
        {
            "key": 38,
            "className": []
        },
        {
            "key": 39,
            "className": [
                "green"
            ]
        },
        {
            "key": 40,
            "className": [
                "green"
            ]
        },
        {
            "key": 41,
            "className": [
                "green"
            ]
        },
        {
            "key": 42,
            "className": [
                "green"
            ]
        },
        {
            "key": 43,
            "className": [
                "green"
            ]
        },
        {
            "key": 44,
            "className": [
                "green"
            ]
        },
        {
            "key": 45,
            "className": [
                "red"
            ]
        },
        {
            "key": 46,
            "className": [
                "red"
            ]
        },
        {
            "key": 47,
            "className": [
                "red"
            ]
        },
        {
            "key": 48,
            "className": [
                "red"
            ]
        },
        {
            "key": 49,
            "className": [
                "red"
            ]
        },
        {
            "key": 50,
            "className": [
                "red"
            ]
        },
        {
            "key": 51,
            "className": []
        },
        {
            "key": 52,
            "className": [
                "green"
            ]
        },
        {
            "key": 53,
            "className": []
        },
        {
            "key": 54,
            "className": [
                "green"
            ]
        },
        {
            "key": 55,
            "className": [
                "green"
            ]
        },
        {
            "key": 56,
            "className": [
                "green"
            ]
        },
        {
            "key": 57,
            "className": [
                "green"
            ]
        },
        {
            "key": 58,
            "className": [
                "green"
            ]
        },
        {
            "key": 59,
            "className": [
                "green"
            ]
        },
        {
            "key": 60,
            "className": [
                "red"
            ]
        },
        {
            "key": 61,
            "className": [
                "red"
            ],
            "tokens": ["red"]
        },
        {
            "key": 62,
            "className": [
                "red"
            ]
        },
        {
            "key": 63,
            "className": [
                "red"
            ]
        },
        {
            "key": 64,
            "className": [
                "red"
            ],
            "tokens": ["red"]
        },
        {
            "key": 65,
            "className": [
                "red"
            ]
        },
        {
            "key": 66,
            "className": []
        },
        {
            "key": 67,
            "className": [
                "green"
            ]
        },
        {
            "key": 68,
            "className": []
        },
        {
            "key": 69,
            "className": [
                "green"
            ]
        },
        {
            "key": 70,
            "className": [
                "green"
            ],
            "tokens": ["green"]
        },
        {
            "key": 71,
            "className": [
                "green"
            ]
        },
        {
            "key": 72,
            "className": [
                "green"
            ]
        },
        {
            "key": 73,
            "className": [
                "green"
            ],
            "tokens": ["green"]
        },
        {
            "key": 74,
            "className": [
                "green"
            ]
        },
        {
            "key": 75,
            "className": [
                "red"
            ]
        },
        {
            "key": 76,
            "className": [
                "red"
            ]
        },
        {
            "key": 77,
            "className": [
                "red"
            ]
        },
        {
            "key": 78,
            "className": [
                "red"
            ]
        },
        {
            "key": 79,
            "className": [
                "red"
            ]
        },
        {
            "key": 80,
            "className": [
                "red"
            ]
        },
        {
            "key": 81,
            "className": []
        },
        {
            "key": 82,
            "className": [
                "green"
            ]
        },
        {
            "key": 83,
            "className": []
        },
        {
            "key": 84,
            "className": [
                "green"
            ]
        },
        {
            "key": 85,
            "className": [
                "green"
            ]
        },
        {
            "key": 86,
            "className": [
                "green"
            ]
        },
        {
            "key": 87,
            "className": [
                "green"
            ]
        },
        {
            "key": 88,
            "className": [
                "green"
            ]
        },
        {
            "key": 89,
            "className": [
                "green"
            ]
        },
        {
            "key": 90,
            "className": []
        },
        {
            "key": 91,
            "className": [
                "red"
            ]
        },
        {
            "key": 92,
            "className": []
        },
        {
            "key": 93,
            "className": []
        },
        {
            "key": 94,
            "className": []
        },
        {
            "key": 95,
            "className": []
        },
        {
            "key": 96,
            "className": ["gray"]
        },
        {
            "key": 97,
            "className": ["gray"]
        },
        {
            "key": 98,
            "className": ["gray"]
        },
        {
            "key": 99,
            "className": []
        },
        {
            "key": 100,
            "className": []
        },
        {
            "key": 101,
            "className": []
        },
        {
            "key": 102,
            "className": []
        },
        {
            "key": 103,
            "className": []
        },
        {
            "key": 104,
            "className": []
        },
        {
            "key": 105,
            "className": []
        },
        {
            "key": 106,
            "className": [
                "red"
            ]
        },
        {
            "key": 107,
            "className": [
                "red"
            ]
        },
        {
            "key": 108,
            "className": [
                "red"
            ]
        },
        {
            "key": 109,
            "className": [
                "red"
            ]
        },
        {
            "key": 110,
            "className": [
                "red"
            ]
        },
        {
            "key": 111,
            "className": ["gray"]
        },
        {
            "key": 112,
            "className": ["gray"]
        },
        {
            "key": 113,
            "className": ["gray"]
        },
        {
            "key": 114,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 115,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 116,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 117,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 118,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 119,
            "className": []
        },
        {
            "key": 120,
            "className": []
        },
        {
            "key": 121,
            "className": []
        },
        {
            "key": 122,
            "className": []
        },
        {
            "key": 123,
            "className": []
        },
        {
            "key": 124,
            "className": []
        },
        {
            "key": 125,
            "className": []
        },
        {
            "key": 126,
            "className": ["gray"]
        },
        {
            "key": 127,
            "className": ["gray"]
        },
        {
            "key": 128,
            "className": ["gray"]
        },
        {
            "key": 129,
            "className": []
        },
        {
            "key": 130,
            "className": []
        },
        {
            "key": 131,
            "className": []
        },
        {
            "key": 132,
            "className": []
        },
        {
            "key": 133,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 134,
            "className": []
        },
        {
            "key": 135,
            "className": [
                "blue"
            ]
        },
        {
            "key": 136,
            "className": [
                "blue"
            ]
        },
        {
            "key": 137,
            "className": [
                "blue"
            ]
        },
        {
            "key": 138,
            "className": [
                "blue"
            ]
        },
        {
            "key": 139,
            "className": [
                "blue"
            ]
        },
        {
            "key": 140,
            "className": [
                "blue"
            ]
        },
        {
            "key": 141,
            "className": []
        },
        {
            "key": 142,
            "className": [
                "blue"
            ]
        },
        {
            "key": 143,
            "className": []
        },
        {
            "key": 144,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 145,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 146,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 147,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 148,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 149,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 150,
            "className": [
                "blue"
            ]
        },
        {
            "key": 151,
            "className": [
                "blue"
            ],
            "tokens": ["blue"]

        },
        {
            "key": 152,
            "className": [
                "blue"
            ]
        },
        {
            "key": 153,
            "className": [
                "blue"
            ]
        },
        {
            "key": 154,
            "className": [
                "blue"
            ],
            "tokens": ["blue"]
        },
        {
            "key": 155,
            "className": [
                "blue"
            ]
        },
        {
            "key": 156,
            "className": []
        },
        {
            "key": 157,
            "className": [
                "blue"
            ]
        },
        {
            "key": 158,
            "className": []
        },
        {
            "key": 159,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 160,
            "className": [
                "yellow"
            ],
            "tokens": ["yellow"]
        },
        {
            "key": 161,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 162,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 163,
            "className": [
                "yellow"
            ],
            "tokens": ["yellow"]
        },
        {
            "key": 164,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 165,
            "className": [
                "blue"
            ]
        },
        {
            "key": 166,
            "className": [
                "blue"
            ]
        },
        {
            "key": 167,
            "className": [
                "blue"
            ]
        },
        {
            "key": 168,
            "className": [
                "blue"
            ]
        },
        {
            "key": 169,
            "className": [
                "blue"
            ]
        },
        {
            "key": 170,
            "className": [
                "blue"
            ]
        },
        {
            "key": 171,
            "className": []
        },
        {
            "key": 172,
            "className": [
                "blue"
            ]
        },
        {
            "key": 173,
            "className": []
        },
        {
            "key": 174,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 175,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 176,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 177,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 178,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 179,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 180,
            "className": [
                "blue"
            ]
        },
        {
            "key": 181,
            "className": [
                "blue"
            ]
        },
        {
            "key": 182,
            "className": [
                "blue"
            ]
        },
        {
            "key": 183,
            "className": [
                "blue"
            ]
        },
        {
            "key": 184,
            "className": [
                "blue"
            ]
        },
        {
            "key": 185,
            "className": [
                "blue"
            ]
        },
        {
            "key": 186,
            "className": []
        },
        {
            "key": 187,
            "className": [
                "blue"
            ]
        },
        {
            "key": 188,
            "className": []
        },
        {
            "key": 189,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 190,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 191,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 192,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 193,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 194,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 195,
            "className": [
                "blue"
            ]
        },
        {
            "key": 196,
            "className": [
                "blue"
            ],
            "tokens": ["blue"]
        },
        {
            "key": 197,
            "className": [
                "blue"
            ]
        },
        {
            "key": 198,
            "className": [
                "blue"
            ]
        },
        {
            "key": 199,
            "className": [
                "blue"
            ],
            "tokens": ["blue"]

        },
        {
            "key": 200,
            "className": [
                "blue"
            ]
        },
        {
            "key": 201,
            "className": [
                "blue"
            ]
        },
        {
            "key": 202,
            "className": [
                "blue"
            ]
        },
        {
            "key": 203,
            "className": []
        },
        {
            "key": 204,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 205,
            "className": [
                "yellow"
            ],
            "tokens": ["yellow"]
        },
        {
            "key": 206,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 207,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 208,
            "className": [
                "yellow"
            ],
            "tokens": ["yellow"]
        },
        {
            "key": 209,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 210,
            "className": [
                "blue"
            ]
        },
        {
            "key": 211,
            "className": [
                "blue"
            ]
        },
        {
            "key": 212,
            "className": [
                "blue"
            ]
        },
        {
            "key": 213,
            "className": [
                "blue"
            ]
        },
        {
            "key": 214,
            "className": [
                "blue"
            ]
        },
        {
            "key": 215,
            "className": [
                "blue"
            ]
        },
        {
            "key": 216,
            "className": []
        },
        {
            "key": 217,
            "className": []
        },
        {
            "key": 218,
            "className": []
        },
        {
            "key": 219,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 220,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 221,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 222,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 223,
            "className": [
                "yellow"
            ]
        },
        {
            "key": 224,
            "className": [
                "yellow"
            ]
        }
    ];
    let [squares, setSquares] = useState(defaultSquares);

    function reset() {
        setActivePlayer(defaultActivePlayer);
        setNumberRolledByActivePlayer(defaultNumberRolledByActivePlayer);
        setSquares(defaultSquares);
        setIsPassDisabled(defaultIsPassDisabled);
    }

    function roll() {
        if (numberRolledByActivePlayer) {
            return; // there is already a rolled dice, let it be consumed first
        }

        const steps = Math.floor(Math.random() * maxRoll) + 1;
        setNumberRolledByActivePlayer(steps);
        // setNumberRolledByActivePlayer(6);

        const isValidMoveAvailable = squares.find(
            i => i.tokens?.includes(activePlayer) && move(i.key, activePlayer, steps, true)
        ) !== undefined;


        setIsPassDisabled(isValidMoveAvailable); // Enable passing if no valid moves are available
    }

    function move(currentSquareIndex, token, steps, dryRun = true) {
        if (token != activePlayer) { return false; }
        else if (!steps) { return false; }
        else if (paths[token].indexOf(currentSquareIndex) + 1 == pathLength) {
            //already on last square
            return false;
        }
        else if (homes[token].includes(currentSquareIndex) && steps != maxRoll) {
            if (!dryRun) {
                alert("Invalid move! Pass if no moves available.");
            }

            return false;
        }

        let nextPathIndex = homes[token].includes(currentSquareIndex) ? 0 : paths[token].indexOf(currentSquareIndex) + steps;
        let nextSquareIndex = nextPathIndex < paths[token].length ? paths[token][nextPathIndex] : null;

        // console.log(`move ${token} ${steps} steps from square ${currentSquareIndex} to ${nextSquareIndex}`);

        if (nextSquareIndex == null) {
            if (!dryRun) {
                alert(`Invalid move! Cannot move ${steps} steps from current position! Pass if no moves available.`);
            }
            return false;
        }

        let nextSquares = squares.slice();
        if (nextSquares[nextSquareIndex]?.tokens?.length > 0) {
            if (!dryRun) {
                alert("Invalid move! Cannot have 2 tokens in the same square. Pass if no moves available.");
            }
            return false;
        }

        if (!dryRun) {
            nextSquares[currentSquareIndex].tokens.pop(token);

            if (nextSquares[nextSquareIndex]?.tokens) {
                nextSquares[nextSquareIndex].tokens.push(token);
            }
            else {
                nextSquares[nextSquareIndex].tokens = [token];
            }

            if (nextPathIndex == paths[token].length - 1) {
                alert(`Congrats ${activePlayer}!`);
                nextSquares[nextSquareIndex].tokens = [];
            }

            setSquares(nextSquares);
            askNextPlayerToRoll();
        }

        return true;
    }

    function askNextPlayerToRoll() {
        if (numberRolledByActivePlayer == maxRoll) {
            setNumberRolledByActivePlayer(null);
            return; // Allowing active to roll one more time
        }

        if (isTwoPlayerMode) {
            switch (activePlayer) {
                case "red":
                    setActivePlayer("yellow");
                    break;
                case "yellow":
                    setActivePlayer("red");
                    break;
                default:
                    break;
            }
        }
        else {
            switch (activePlayer) {
                case "red":
                    setActivePlayer("green");
                    break;
                case "green":
                    setActivePlayer("yellow");
                    break;
                case "yellow":
                    setActivePlayer("blue");
                    break;
                case "blue":
                    setActivePlayer("red");
                    break;

                default:
                    break;
            }
        }

        setNumberRolledByActivePlayer(null);
        setIsPassDisabled(true);
    }

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', width: "100%", gap: "6px" }}>
            <div
                className="board"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(15, 1fr)`,
                    aspectRatio: "1 / 1",   // keeps it a perfect square
                    width: "90vmin",        // scales with viewport (vmin = min of width/height)
                    maxWidth: "1000px",     // optional cap
                    borderBottom: "1px solid darkslategrey",
                    borderRight: "1px solid darkslategrey",
                    backgroundColor: ""
                }}
            >
                {squares.map((sq, index) => (
                    <div
                        key={sq.key}
                        className={`square ${sq.className?.join(" ")} ${new Set(sq.tokens).size > 1 ? "multi-token" : "single-token"}`}
                    >
                        {/* {index} */}

                        {
                            sq.tokens?.map((token, tokenIndex) => (
                                players[token] ? <button key={`${token}-${tokenIndex}`} className={`${token}-token`} onClick={() => { move(index, token, numberRolledByActivePlayer, false) }} style={{ width: "80%", height: "80%", backgroundColor: `${token}`, borderRadius: "100%", border: "1px solid darkslategrey" }}></button> : <></>
                            ))
                        }
                    </div>
                ))}
            </div>
            <div>
                <div>
                    <span style={{ fontSize: "xx-large", fontWeight: "bolder" }}>Ludo</span>

                    <div>
                        <button style={{ border: "1px solid black", backgroundColor: isTwoPlayerMode ? "lightBlue" : "white", borderRadius: "10px", }} onClick={setTwoPlayerMode}>2 player</button>
                        <button style={{ border: "1px solid black", backgroundColor: isTwoPlayerMode ? "white" : "lightBlue", borderRadius: "10px", marginLeft: "10px" }} onClick={setFourPlayerMode}>4 player</button>
                    </div>


                    <div style={{ marginTop: "60px" }}>
                        <button style={{ height: "100px", width: "150px" }} onClick={roll}>
                            {activePlayer?.toUpperCase()}, Tap to roll
                        </button>

                        <button style={{ marginLeft: "10px", height: "100px" }} onClick={askNextPlayerToRoll} disabled={isPassDisabled}>
                            Pass, If no moves available
                        </button>
                    </div>

                    <p>
                        {
                            numberRolledByActivePlayer
                                ?
                                <>You rolled a {numberRolledByActivePlayer}.</>
                                : <></>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App
