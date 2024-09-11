function combat(health, damage) {
    // Write your code here
    let newhealth = health - damage 
    if (newhealth < 0) {
        newhealth = 0;
    }
    return newhealth
}