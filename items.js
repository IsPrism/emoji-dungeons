class Item {
    constructor(id, name, stat, increase, effect) {
        this.id = id
        this.name = name
        if(stat = "health") {
            Player.health = Player.health + increase
        };
    };
};