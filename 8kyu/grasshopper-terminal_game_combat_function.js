/* Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0. */

function combat(health, damage) {
    if (health - damage < 0) {
        return 0
    } else {
        return health - damage 
    }
}
console.log(combat(100, 120));
