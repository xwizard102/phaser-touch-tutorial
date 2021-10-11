const config = {
    type: Phaser.AUTO,
    parent: "game",
    backgroundColor: "#5DACD8",
    scale: {
        mode: Phaser.Scale.RESIZE
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

const game = new Phaser.Game(config);

// var isClicking = false;

function preload() {
    this.load.spritesheet('plane', 'plane.png', {
        frameWidth: 32,
        frameHeight: 48
    });
}

function create() {
    plane = this.add.sprite(32, 48, 'plane', 4);
    plane.setScale(2);
}

const stepMultiplier = 5;

function update() {
    // 1. move to POINTER upon CLICK
    // if (!this.input.activePointer.isDown && isClicking) {
    //     plane.y = this.input.activePointer.position.y;
    //     isClicking = false;
    // }
    // else if (this.input.activePointer.isDown && !isClicking) {
    //     isClicking = true;
    // }
    
    // 2. Drag
    // if (this.input.activePointer.isDown)
    //     plane.y = this.input.activePointer.position.y;

    // 3. Animate movement
    if (this.input.activePointer.isDown) {
        moveCharacter(plane, 'x', stepMultiplier);
        moveCharacter(plane, 'y', stepMultiplier);
    }
}

function moveCharacter(character, axisName, stepMultiplier) {
    let dir = Math.sign(game.input.activePointer.position[axisName] - character[axisName]);
    character[axisName] += stepMultiplier * dir;
}