class Player {
    constructor(icon, power, health, move0, move1, move2) {
        document.getElementById("player").textContent = icon;
        this.power = power;
        this.health = health;
        this.moves = [move0, move1, move2];
        document.getElementById("action1").textContent = moves[0];
        document.getElementById("action2").textContent = moves[1];
        document.getElementById("action3").textContent = moves[2];

    };

    useMove() {

    };

    gainItem (id) {
        
    };

    gainEffect () {

    };
};

var player = new Player("🧙‍♀️", 4, 2, "Zap", "Blast", "Heal");