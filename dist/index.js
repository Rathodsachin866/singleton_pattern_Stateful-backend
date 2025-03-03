"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store"); // Importing GameManager class
const logger_1 = require("./logger");
const gameManager = new store_1.GameManager(); // ❌ Error: Redeclaring 'GameManager' as a variable
(0, logger_1.startLogger)();
setInterval(() => {
    gameManager.addGame(Math.random().toString()); // ❌ GameManager is now a constant, not a class
}, 5000);
