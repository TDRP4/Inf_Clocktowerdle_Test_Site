//Wrap everything in a function for resetting
const characters = ([
    {name: "Chef", script: "Trouble Brewing", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Number", "Positioning", "Alignment"]
    },
    {name: "Librarian", script: "Trouble Brewing", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Character", "Learns Number", "Outsiders"]
    },
    {name: "Investigator", script: "Trouble Brewing", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Character", "Minions"]
    },
    {name: "Washerwoman", script: "Trouble Brewing", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Character", "Townsfolk"]
    },
    {name: "Empath", script: "Trouble Brewing", type: "Townsfolk", wakes: "Always", selects: "No", info: "Yes",
        abilities: ["Learns Number", "Positioning", "Alignment"]
    },
    {name: "Fortune Teller", script: "Trouble Brewing", type: "Townsfolk", wakes: "Always", selects: "Required",
        info: "Yes", abilities: ["Yes/No", "Demon"]
    },
    {name: "Undertaker", script: "Trouble Brewing", type: "Townsfolk", wakes: "Sometimes", selects: "No",
        info: "Yes", abilities: ["On Death", "Execution", "Learns Character"]
    },
    {name: "Monk", script: "Trouble Brewing", type: "Townsfolk", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Prevents Death", "Demon"]
    },
    {name: "Ravenkeeper", script: "Trouble Brewing", type: "Townsfolk", wakes: "Sometimes", selects: "Required",
        info: "Yes", abilities: ["On Death", "Learns Character"]
    },
    {name: "Virgin", script: "Trouble Brewing", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Once/First Time", "Nomination/Voting", "Townsfolk", "Execution"]
    },
    {name: "Slayer", script: "Trouble Brewing", type: "Townsfolk", wakes: "No", selects: "Optionally", info: "No",
        abilities: ["Causes Death", "Once/First Time", "Public", "Demon"]
    },
    {name: "Soldier", script: "Trouble Brewing", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Demon", "Prevents Death"]
    },
    {name: "Mayor", script: "Trouble Brewing", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Prevents Death", "Nomination/Voting", "Win/Loss"]
    },
    {name: "Butler", script: "Trouble Brewing", type: "Outsider", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Nomination/Voting"]
    },
    {name: "Saint", script: "Trouble Brewing", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Execution", "Win/Loss"]
    },
    {name: "Recluse", script: "Trouble Brewing", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions", "Demon", "Alignment"]
    },
    {name: "Drunk", script: "Trouble Brewing", type: "Outsider", wakes: "?", selects: "?", info: "?",
        abilities: ["Townsfolk", "Droisoning"]
    },
    {name: "Poisoner", script: "Trouble Brewing", type: "Minion", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Droisoning"]
    },
    {name: "Spy", script: "Trouble Brewing", type: "Minion", wakes: "Always", selects: "No", info: "Yes",
        abilities: ["Alignment", "Townsfolk", "Outsiders"]
    },
    {name: "Baron", script: "Trouble Brewing", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Setup", "Outsiders"]
    },
    {name: "Scarlet Woman", script: "Trouble Brewing", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Demon", "On Death", "Changes Character"]
    },
    {name: "Imp", script: "Trouble Brewing", type: "Demon", wakes: "Always (Except First)", selects: "Required", info: "No",
        abilities: ["Causes Death", "On Death", "Changes Character"]
    },
    {name: "Clockmaker", script: "Sects & Violets", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Number", "Demon", "Minions", "Positioning"]
    },
    {name: "Dreamer", script: "Sects & Violets", type: "Townsfolk", wakes: "Always", selects: "Required", info: "Yes",
        abilities: ["Learns Character", "Alignment"]
    },
    {name: "Snake Charmer", script: "Sects & Violets", type: "Townsfolk", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Demon", "Alignment", "Droisoning", "Changes Character"]
    },
    {name: "Mathematician", script: "Sects & Violets", type: "Townsfolk", wakes: "Always", selects: "No", info: "Yes",
        abilities: ["Learns Number"]
    },
    {name: "Flowergirl", script: "Sects & Violets", type: "Townsfolk", wakes: "Always (Except First)", selects: "No",
        info: "Yes", abilities: ["Yes/No", "Demon", "Nomination/Voting"]
    },
    {name: "Town Crier", script: "Sects & Violets", type: "Townsfolk", wakes: "Always (Except First)", selects: "No",
        info: "Yes", abilities: ["Yes/No", "Minions", "Nomination/Voting"]
    },
    {name: "Oracle", script: "Sects & Violets", type: "Townsfolk", wakes: "Always (Except First)", selects: "No",
        info: "Yes", abilities: ["Alignment", "Learns Number"]
    },
    {name: "Savant", script: "Sects & Violets", type: "Townsfolk", wakes: "No", selects: "No", info: "Yes",
        abilities: ["Storyteller"]
    },
    {name: "Seamstress", script: "Sects & Violets", type: "Townsfolk", wakes: "Sometimes", selects: "Optionally",
        info: "Yes", abilities: ["Yes/No", "Alignment", "Once/First Time"]
    },
    {name: "Philosopher", script: "Sects & Violets", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "No",
        abilities: ["Droisoning", "Once/First Time", "Selects Character"]
    },
    {name: "Artist", script: "Sects & Violets", type: "Townsfolk", wakes: "No", selects: "No", info: "Yes",
        abilities: ["Yes/No", "Once/First Time", "Storyteller"]
    },
    {name: "Juggler", script: "Sects & Violets", type: "Townsfolk", wakes: "Once", selects: "Optionally", info: "Yes",
        abilities: ["Once/First Time", "Learns Number", "Selects Character", "Public"]
    },
    {name: "Sage", script: "Sects & Violets", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "Yes",
        abilities: ["On Death", "Demon"]
    },
    {name: "Mutant", script: "Sects & Violets", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Madness", "Outsiders", "Execution"]
    },
    {name: "Sweetheart", script: "Sects & Violets", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["On Death", "Droisoning"]
    },
    {name: "Barber", script: "Sects & Violets", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["On Death", "Demon", "Changes Character"]
    },
    {name: "Klutz", script: "Sects & Violets", type: "Outsider", wakes: "No", selects: "Required", info: "No",
        abilities: ["On Death", "Public", "Alignment", "Win/Loss"]
    },
    {name: "Evil Twin", script: "Sects & Violets", type: "Minion", wakes: "Once", selects: "No", info: "No",
        abilities: ["Alignment", "Execution", "Win/Loss"]
    },
    {name: "Witch", script: "Sects & Violets", type: "Minion", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Nomination/Voting", "Causes Death"]
    },
    {name: "Cerenovus", script: "Sects & Violets", type: "Minion", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Selects Character", "Madness", "Execution"]
    },
    {name: "Pit Hag", script: "Sects & Violets", type: "Minion", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Selects Character", "Changes Character"]
    },
    {name: "Fang Gu", script: "Sects & Violets", type: "Demon", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Once/First Time", "Changes Character", "Specific Character", "Outsiders",
            "Alignment", "Setup"]
    },
    {name: "Vigormortis", script: "Sects & Violets", type: "Demon", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Minions", "Droisoning", "Setup", "Positioning"]
    },
    {name: "No Dashii", script: "Sects & Violets", type: "Demon", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Droisoning", "Townsfolk", "Positioning"]
    },
    {name: "Vortox", script: "Sects & Violets", type: "Demon", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Townsfolk", "Execution", "Win/Loss"]
    },
    {name: "Grandmother", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Character", "Alignment", "Causes Death", "On Death", "Demon"]
    },
    {name: "Sailor", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Droisoning", "Prevents Death"]
    },
    {name: "Chambermaid", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Always", selects: "Required", info: "Yes",
        abilities: ["Learns Number"]
    },
    {name: "Exorcist", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Demon"]
    },
    {name: "Innkeeper", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Prevents Death", "Droisoning"]
    },
    {name: "Gambler", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Selects Character", "Causes Death"]
    },
    {name: "Gossip", script: "Bad Moon Rising", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Causes Death", "Public"]
    },
    {name: "Courtier", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "No",
        abilities: ["Selects Character", "Droisoning", "Once/First Time"]
    },
    {name: "Professor", script: "Bad Moon Rising", type: "Townsfolk", wakes: "Sometimes", selects: "Optionally", info: "No",
        abilities: ["Townsfolk", "Once/First Time", "Can Revive"]
    },
    {name: "Minstrel", script: "Bad Moon Rising", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions", "Execution", "Droisoning"]
    },
    {name: "Tea Lady", script: "Bad Moon Rising", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Prevents Death", "Alignment", "Positioning"]
    },
    {name: "Pacifist", script: "Bad Moon Rising", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Prevents Death", "Execution", "Alignment"]
    },
    {name: "Fool", script: "Bad Moon Rising", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Prevents Death", "Once/First Time"]
    },
    {name: "Goon", script: "Bad Moon Rising", type: "Outsider", wakes: "Sometimes", selects: "No", info: "No",
        abilities: ["Droisoning", "Alignment"]
    },
    {name: "Lunatic", script: "Bad Moon Rising", type: "Outsider", wakes: "?", selects: "?", info: "No",
        abilities: ["Demon"]
    },
    {name: "Tinker", script: "Bad Moon Rising", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Causes Death"]
    },
    {name: "Moonchild", script: "Bad Moon Rising", type: "Outsider", wakes: "No", selects: "Required", info: "No",
        abilities: ["Causes Death", "Alignment", "Public"]
    },
    {name: "Godfather", script: "Bad Moon Rising", type: "Minion", wakes: "Sometimes", selects: "Required", info: "Yes",
        abilities: ["Learns Character", "Outsiders", "On Death", "Causes Death", "Setup"]
    },
    {name: "Devil's Advocate", script: "Bad Moon Rising", type: "Minion", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Execution", "Prevents Death"]
    },
    {name: "Assassin", script: "Bad Moon Rising", type: "Minion", wakes: "Sometimes", selects: "Optionally", info: "No",
        abilities: ["Causes Death", "Once/First Time"]
    },
    {name: "Mastermind", script: "Bad Moon Rising", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Demon", "Execution", "Win/Loss"]
    },
    {name: "Zombuul", script: "Bad Moon Rising", type: "Demon", wakes: "Sometimes", selects: "Required", info: "No",
        abilities: ["Causes Death", "On Death", "Once/First Time", "Prevents Death"]
    },
    {name: "Pukka", script: "Bad Moon Rising", type: "Demon", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Causes Death", "Droisoning"]
    },
    {name: "Shabaloth", script: "Bad Moon Rising", type: "Demon", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Can Revive"]
    },
    {name: "Po", script: "Bad Moon Rising", type: "Demon", wakes: "Always", selects: "Optionally", info: "No",
        abilities: ["Causes Death"]
    },
    {name: "Acrobat", script: "Experimental", type: "Townsfolk", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Droisoning"]
    },
    {name: "Alchemist", script: "Experimental", type: "Townsfolk", wakes: "?", selects: "?", info: "Yes",
        abilities: ["Learns Character", "Minions", "Storyteller"]
    },
    {name: "Alsaahir", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "Optionally", info: "No",
        abilities: ["Minions", "Demon", "Public", "Win/Loss"]
    },
    {name: "Amnesiac", script: "Experimental", type: "Townsfolk", wakes: "?", selects: "?", info: "Yes",
        abilities: ["?"]
    },
    {name: "Atheist", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Setup", "Storyteller", "Execution", "Win/Loss"]
    },
    {name: "Balloonist", script: "Experimental", type: "Townsfolk", wakes: "Always", selects: "No", info: "Yes",
        abilities: ["Setup"]
    },
    {name: "Banshee", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["On Death", "Demon", "Nomination/Voting", "Public"]
    },
    {name: "Bounty Hunter", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "Yes",
        abilities: ["Setup", "Townsfolk", "Alignment", "On Death"]
    },
    {name: "Cannibal", script: "Experimental", type: "Townsfolk", wakes: "?", selects: "?", info: "?",
        abilities: ["Execution", "On Death", "Aligmnent", "Droisoning", "?"]
    },
    {name: "Choirboy", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "Yes",
        abilities: ["On Death", "Demon", "Specific Character", "Setup"]
    },
    {name: "Cult Leader", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "No",
        abilities: ["Alignment", "Positioning", "Public", "Win/Loss"]
    },
    {name: "Engineer", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "No",
        abilities: ["Once/First Time", "Demon", "Minions", "Selects Character", "Changes Character"]
    },
    {name: "Farmer", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["On Death", "Changes Character", "Alignment", "Specific Character"]
    },
    {name: "Fisherman", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "Yes",
        abilities: ["Once/First Time", "Storyteller", "Win/Loss"]
    },
    {name: "General", script: "Experimental", type: "Townsfolk", wakes: "Always", selects: "No", info: "Yes",
        abilities: ["Alignment", "Storyteller"]
    },
    {name: "High Priestess", script: "Experimental", type: "Townsfolk", wakes: "Always", selects: "No", info: "Yes",
        abilities: ["Storyteller"]
    },
    {name: "Huntsman", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "Optionally", info: "No",
        abilities: ["Once/First Time", "Setup", "Specific Character"]
    },
    {name: "King", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "No", info: "Yes",
        abilities: ["Demon", "Learns Character", "Specific Character"]
    },
    {name: "Knight", script: "Experimental", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Demon"]
    },
    {name: "Lycanthrope", script: "Experimental", type: "Townsfolk", wakes: "Always (Except First)", selects: "Required",
        info: "No", abilities: ["Causes Death", "Alignment", "Prevents Death", "Demon"]
    },
    {name: "Magician", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions", "Demon"]
    },
    {name: "Nightwatchman", script: "Experimental", type: "Townsfolk", wakes: "Sometimes", selects: "Optionally", info: "No",
        abilities: ["Specific Character", "Once/First Time"]
    },
    {name: "Noble", script: "Experimental", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Alignment"]
    },
    {name: "Pixie", script: "Experimental", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Townsfolk", "Learns Character", "Madness", "On Death"]
    },
    {name: "Poppy Grower", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions", "Demon", "On Death"]
    },
    {name: "Preacher", script: "Experimental", type: "Townsfolk", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Minions"]
    },
    {name: "Princess", script: "Experimental", type: "Townsfolk", wakes: "No", selects: "No", info: "No",
        abilities: ["Nomination/Voting", "Execution", "Once/First Time", "Demon", "Prevents Death"]
    },
    {name: "Shugenja", script: "Experimental", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Positioning", "Alignment"]
    },
    {name: "Steward", script: "Experimental", type: "Townsfolk", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Alignment"]
    },
    {name: "Village Idiot", script: "Experimental", type: "Townsfolk", wakes: "Always", selects: "Required", info: "Yes",
        abilities: ["Alignment", "Droisoning", "Setup", "Specific Character"]
    },
    {name: "Damsel", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions", "Public", "Win/Loss", "Once/First Time", "Specific Character"]
    },
    {name: "Golem", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Nomination/Voting", "Once/First Time", "Causes Death", "Demon"]
    },
    {name: "Hatter", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["On Death", "Minions", "Demon", "Changes Character"]
    },
    {name: "Heretic", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Win/Loss"]
    },
    {name: "Hermit", script: "Experimental", type: "Outsider", wakes: "?", selects: "?", info: "?",
        abilities: ["Outsiders", "Setup", "?"]
    },
    {name: "Ogre", script: "Experimental", type: "Outsider", wakes: "Once", selects: "Required", info: "No",
        abilities: ["Alignment"]
    },
    {name: "Plague Doctor", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["On Death", "Storyteller", "Minions"]
    },
    {name: "Politician", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Win/Loss", "Alignment"]
    },
    {name: "Puzzlemaster", script: "Experimental", type: "Outsider", wakes: "No", selects: "Optionally", info: "Yes",
        abilities: ["Droisoning", "Demon", "Once/First Time"]
    },
    {name: "Snitch", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions"]
    },
    {name: "Zealot", script: "Experimental", type: "Outsider", wakes: "No", selects: "No", info: "No",
        abilities: ["Nomination/Voting"]
    },
    {name: "Boffin", script: "Experimental", type: "Minion", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Learns Character", "Demon", "Alignment"]
    },
    {name: "Boomdandy", script: "Experimental", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Execution", "Causes Death", "Win/Loss"]
    },
    {name: "Fearmonger", script: "Experimental", type: "Minion", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Nomination/Voting", "Execution", "Win/Loss", "Public"]
    },
    {name: "Goblin", script: "Experimental", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Execution", "Win/Loss", "Public", "Specific Character"]
    },
    {name: "Harpy", script: "Experimental", type: "Minion", wakes: "Yes", selects: "Required", info: "No",
        abilities: ["Madness", "Alignment", "Causes Death"]
    },
    {name: "Marionette", script: "Experimental", type: "Minion", wakes: "?", selects: "?", info: "?",
        abilities: ["Alignment", "Demon", "Positioning", "Setup"]
    },
    {name: "Mezepheles", script: "Experimental", type: "Minion", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Alignment", "Once/First Time"]
    },
    {name: "Organ Grinder", script: "Experimental", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Nomination/Voting", "Droisoning"]
    },
    {name: "Psychopath", script: "Experimental", type: "Minion", wakes: "No", selects: "Optionally", info: "No",
        abilities: ["Public", "Causes Death", "Execution", "Prevents Death"]
    },
    {name: "Summoner", script: "Experimental", type: "Minion", wakes: "Sometimes", selects: "Required", info: "Yes",
        abilities: ["Selects Character", "Changes Character", "Demon", "Alignment", "Setup"]
    },
    {name: "Vizier", script: "Experimental", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Prevents Death", "Public", "Execution", "Nomination/Voting", "Alignment"]
    },
    {name: "Widow", script: "Experimental", type: "Minion", wakes: "Once", selects: "Required", info: "Yes",
        abilities: ["Droisoning", "Once/First Time", "Alignment", "Specific Character"]
    },
    {name: "Wizard", script: "Experimental", type: "Minion", wakes: "Sometimes", selects: "No", info: "No",
        abilities: ["Once/First Time", "?"]
    },
    {name: "Wraith", script: "Experimental", type: "Minion", wakes: "Always", selects: "No", info: "No",
        abilities: ["Alignment"]
    },
    {name: "Xaan", script: "Experimental", type: "Minion", wakes: "No", selects: "No", info: "No",
        abilities: ["Townsfolk", "Droisoning", "Setup", "Outsiders"]
    },
    {name: "Al-Hadikhia", script: "Experimental", type: "Demon", wakes: "Always (Except First)", selects: "Optionally",
        info: "No", abilities: ["Causes Death", "Public", "Can Revive"]
    },
    {name: "Kazali", script: "Experimental", type: "Demon", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Selects Character", "Causes Death", "Setup", "Minions", "Outsiders"]
    },
    {name: "Legion", script: "Experimental", type: "Demon", wakes: "No", selects: "No", info: "No",
        abilities: ["Causes Death", "Setup", "Minions", "Execution"]
    },
    {name: "Leviathan", script: "Experimental", type: "Demon", wakes: "No", selects: "No", info: "No",
        abilities: ["Public", "Execution", "Win/Loss"]
    },
    {name: "Lil' Monsta", script: "Experimental", type: "Demon", wakes: "No", selects: "No", info: "No",
        abilities: ["Minions", "Demon", "Setup", "Causes Death"]
    },
    {name: "Lleech", script: "Experimental", type: "Demon", wakes: "Always", selects: "Required", info: "No",
        abilities: ["Causes Death", "Droisoning", "Prevents Death"]
    },
    {name: "Lord of Typhon", script: "Experimental", type: "Demon", wakes: "Always (Except First)", selects: "No", info: "No",
        abilities: ["Causes Death", "Setup", "Alignment", "Positioning", "Minions", "Outsiders"]
    },
    {name: "Ojo", script: "Experimental", type: "Demon", wakes: "Always (Except First)", selects: "No", info: "No",
        abilities: ["Selects Character", "Causes Death", "Storyteller"]
    },
    {name: "Riot", script: "Experimental", type: "Demon", wakes: "No", selects: "No", info: "No",
        abilities: ["Changes Character", "Causes Death", "Nomination/Voting", "Minions"]
    },
    {name: "Yaggababble", script: "Experimental", type: "Demon", wakes: "Once", selects: "No", info: "Yes",
        abilities: ["Causes Death", "Public"]
    }
]);

//Set Answer
let answer = characters[Math.floor(Math.random() * characters.length)];

//Answer Log
//console.log(`Answer: ${answer.name}`);

//Character Log
/*let num = 1;

characters.forEach(character => {
    console.log(`----- Character ${num} -----`);
    console.log(`Name: ${character.name}`);
    console.log(`Script: ${character.script}`);
    console.log(`Wakes in the Night: ${character.wakes}`);
    console.log(`Selects Player: ${character.selects}`);
    console.log(`Learns Info: ${character.info}`);
    console.log(`Ability Details: ${character.abilities.join(', ')}`);
    num++;
});*/

//Adds to dropdown list
function charList(items) {

    let choices = document.querySelector('#characters select');
    choices.replaceChildren();

    let blankChoice = document.createElement('option');
    choices.appendChild(blankChoice);

    items.forEach(item => {
        let option = document.createElement('option');

        option.value = item.name;
        option.textContent = item.name;

        choices.appendChild(option);
    });
}

charList(characters);

//Character Selection
const options = document.getElementById('characters');

let selectedName = '';
let selectedChar = null;

options.addEventListener('change', (event) => {
    selectedName = event.target.value;

    selectedChar = characters.find(character => 
        character.name === selectedName
    );
});

let topCon = document.getElementById('topContent');

let guesses = 0;
let guessCount = document.querySelector('#guessCount p');

let avgGuesses = 'N/A';
let guessTotal = 0;
let gamesPlayed = 0;
let avgGuessCount = document.getElementById('avgGuesses');

let answerWrapper = document.getElementById('guesses');
let congrats = document.getElementById('congratsMsg');
let resetBtn = document.getElementById('resetPage');

let playerMetrics = '';

//Submit Character
function subChar() {

    if (selectedChar == null) return;

    //Guess Counter
    guessCount.textContent = `Guesses: ${++guesses}`;

    //Comparing "Types", "Wakes", and "Selects" Answers
    const simTypes = [["Townsfolk", "Outsider"], ["Minion", "Demon"]];
    const simWakes = ["Always", "Always (Except First)", "Once", "Sometimes"];
    const simSelects = ["Required", "Optionally"];

    let attType = selectedChar.type;
    let propType = answer.type;

    //Text Color
    let elemColor = null;

    if (attType === "Townsfolk") {
        elemColor = '#00166e';
        //console.log(textColor);
    } else if (attType === "Outsider") {
        elemColor = '#0083a1';
        //console.log(textColor);
    } else if (attType === "Minion") {
        elemColor = '#805300';
        //console.log(textColor);
    } else if (attType === "Demon") {
        elemColor = '#800000';
        //console.log(textColor);
    }

    let attWakes = selectedChar.wakes;
    let attSelects = selectedChar.selects;

    //Ability Comparison
    let attAb = selectedChar.abilities;
    let propAb = answer.abilities;

    let commonAb = propAb.filter(item => attAb.includes(item));

    //console.log(`Selected Character Abilities: ${attAb}`);
    //console.log(`Answer Abilities: ${propAb}`);

    let matches = attAb.length === propAb.length && attAb.every((value, index) => value === propAb[index]);

    //console.log(matches ? "Matches!" : "Does not match");

    //console.log(commonAb);
    //console.log(`Common Abilities: ${commonAb.length}`);

    let parType = simTypes.some(pair =>
        pair.includes(attType) && pair.includes(propType)
    );

    let parWakes = simWakes.includes(attWakes) && simWakes.includes(answer.wakes);
    let parSelects = simSelects.includes(attSelects) && simSelects.includes(answer.selects);
    let parAb = commonAb.length > 0 && !matches;

    //Selected Character Attributes
    let attributes = [selectedChar.name, selectedChar.script, selectedChar.type, selectedChar.wakes, selectedChar.selects,
        selectedChar.info, `${selectedChar.abilities.join(', ')} [${commonAb.length}]`
    ];

    //Answer Attributes
    let properties = [answer.name, answer.script, answer.type, answer.wakes, answer.selects, answer.info,
        `${answer.abilities.join(', ')} [${commonAb.length}]`
    ];

    let details = document.createElement('div');
    details.classList.add('details');

    for (let i = 0; i < attributes.length; i++) {
        let p = document.createElement('p');
        p.textContent = attributes[i];
        p.style.color = 'white';

        let circle = document.createElement('div');
        circle.classList.add('circle');

        if (p.textContent !== attributes[0] && p.textContent === properties[i]) {
            circle.style.background = '#005203';
        } else if (p.textContent === attributes[2] && parType || p.textContent === attributes[3] && parWakes
            || p.textContent === attributes[4] && parSelects || p.textContent === attributes[6] && parAb) {
            circle.style.background = '#969400';
        } else if (p.textContent === attributes[0]) {
            circle.style.background = elemColor;
        } else {
            circle.style.background = '#242424';
        }

        let circleWrapper = document.createElement('div');
        circleWrapper.classList.add('circleWrapper');

        circle.appendChild(p);
        circleWrapper.appendChild(circle);
        details.appendChild(circleWrapper);
    }

    //Append
    answerWrapper.prepend(details);

    const select = document.querySelector('#characters select');
    select.options[select.selectedIndex].remove();

    let messages = Array.from(document.querySelectorAll('#congratsMsg p'));

    if (selectedChar.name == answer.name) {

        topCon.style.display = 'none';
        guessCount.style.display = 'none';
        congrats.style.display = 'flex';

        //Keeps track of current guesses and games played
        gamesPlayed++;
        guessTotal += guesses;
        avgGuesses = guessTotal / gamesPlayed;

        if (avgGuesses % 1 !== 0) {
            avgGuesses = avgGuesses.toFixed(2);
        }
        //console.log(`Games Played: ${gamesPlayed}`);
        //console.log(`Total Amount of Guesses Ever: ${guessTotal}`);
        //console.log(`Average Number of Guesses: ${avgGuesses}`);

        avgGuessCount.textContent = `Average Guesses: ${avgGuesses}`;

        if (guesses > 1) {
            messages[1].textContent = `You guessed ${answer.name} in ${guesses} guesses!`;
        } else {
            messages[1].textContent = `You guessed ${answer.name} in ${guesses} guess!`;
        }

        resetBtn.style.display = 'block';
    }

    selectedChar = null;

    playerMetrics = {user: "user1", avg: avgGuesses, games: gamesPlayed, guesses: guessTotal, adjustedAvg: ""};
}

avgGuessCount.textContent = `Average Guesses: ${avgGuesses}`;

//Start New Game
function startWordle() {
    //Resets Info
    guesses = 0;

    topCon.style.display = 'flex';
    guessCount.style.display = 'block';
    guessCount.textContent = '';

    //Resets Elements
    answerWrapper.replaceChildren();
    congrats.style.display = 'none';
    resetBtn.style.display = 'none';

    charList(characters);

    //Resets Answer
    answer = characters[Math.floor(Math.random() * characters.length)];
    console.log(`Answer: ${answer.name}`);
}

//TEMPORARY FUNCTION
function followMouse(elem) {
    document.addEventListener('mousemove', function(e) {
        fromLeft = e.pageX;
        fromTop = e.pageY;
        elem.style.left = fromLeft + 7 + "px";
        elem.style.top = fromTop + 8 + "px";
    });
}

let div = null;

const leaderboardTxt = document.getElementById('leaderboardTxt');
avgGuessCount.style.cursor = 'default';

leaderboardTxt.addEventListener('mouseenter', () => {
    div = document.createElement('div');
    let p = document.createElement('p');

    if (gamesPlayed > 1) {
        p.textContent = "There is no official leaderboard currently! Click to view what the leaderboard will look like.";
    } else {
        p.textContent = `There is no official leaderboard currently! Click to view what the leaderboard will look like \n
    (must play at least 2 games to view yourself on the leaderboard)`;
    }

    div.appendChild(p);
    div.classList.add('hovElem');

    document.body.appendChild(div);

    followMouse(div);
});

leaderboardTxt.addEventListener('mouseleave', () => {
    if (div) {
        div.remove();
    }
});

avgGuessCount.addEventListener('mouseenter', () => {
    div = document.createElement('div');
    let p = document.createElement('p');

    if (gamesPlayed == 1) {
        p.textContent = `${gamesPlayed} game played`;
    } else {
        p.textContent = `${gamesPlayed} games played`;
    }

    div.appendChild(p);
    div.classList.add('hovElem');

    document.body.appendChild(div);

    followMouse(div);
});

avgGuessCount.addEventListener('mouseleave', () => {
    if (div) {
        div.remove();
    }
});

//LeaderBoard
let tableElems = document.querySelector('#leaderboard table');
let leaderboard = document.getElementById('leaderboard');

//Change to real scores later
let metrics = [
    {user: "user2", avg: 3.60, games: 10, guesses: 36, adjustedAvg: ""},
    {user: "user3", avg: 3.60, games: 20, guesses: 72, adjustedAvg: ""},
    {user: "user4", avg: 3.80, games: 60, guesses: 228, adjustedAvg: ""},
    {user: "user5", avg: 5, games: 25, guesses: 125, adjustedAvg: ""},
    {user: "user6", avg: 4.15, games: 100, guesses: 415, adjustedAvg: ""},
    {user: "user7", avg: 2.5, games: 12, guesses: 30, adjustedAvg: ""},
    {user: "user8", avg: 2.56, games: 25, guesses: 64, adjustedAvg: ""}
];

function addScores(items) {
    let totalGuesses = items.reduce((sum, player) => sum + player.guesses, 0);
    let totalGames = items.reduce((sum, player) => sum + player.games, 0);

    let avgAvg = totalGuesses / totalGames;
    //console.log(`${totalGuesses} / ${totalGames} = ${avgAvg}`);

    for (let i = 0; i < items.length; i++) {
        let average = (items[i].avg * items[i].games + avgAvg * 20) / (items[i].games + 20);
        items[i].adjustedAvg = average;
        //console.log(`${items[i].user} Adjusted Average: ${items[i].adjustedAvg}`);
    }

    let ltgScores = items.sort((a, b) => a.adjustedAvg - b.adjustedAvg);

    for (let i = 0; i < items.length; i++) {

        let tr = document.createElement('tr');
        tr.classList.add('userScore');

        let td = document.createElement('td');

        if (ltgScores[i].games > 1) {
            td.textContent = `${ltgScores[i].user} - ${ltgScores[i].avg} avg guesses (${ltgScores[i].games} total games)`;
        }

        if (ltgScores[i].avg == avgGuesses) {
            td.style.color = 'red';
            td.style.textShadow = '0.2vh 0.2vh 0.4vh purple';
        }

        tr.appendChild(td);
        tableElems.appendChild(tr);
    }
}

function viewBoard() {
    let displayScores = [...metrics];

    if (gamesPlayed > 1) {
        displayScores.push(playerMetrics);
        //console.log(displayScores);
    }
    
    addScores(displayScores);

    leaderboard.style.display = 'flex';
}

function closeBoard() {
    leaderboard.style.display = 'none';

    let trElems = document.querySelectorAll('.userScore');
    trElems.forEach(elem => elem.remove());
}
