/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
    constructor (width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize (newWidth, newHeigth) {
        this.width = newWidth;
        this.height = newHeigth;
    }
}

export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        if(newSize.width < 1) newSize.width = 1;
        if(newSize.height < 1) newSize.height = 1;

        if(newSize.width > this.screenSize.width) {
            newSize.width = this.screenSize.width - this.position.x;
        }
        if(newSize.height > this.screenSize.height) {
            newSize.height = this.screenSize.height - this.position.y;
        }

        this.size.width = newSize.width;
        this.size.height = newSize.height;
    }

    move(newPosition) {
        if(newPosition.x < 0) newPosition.x = 0;

        if(newPosition.y < 0) newPosition.y = 0;

        if(newPosition.x + this.size.width > this.screenSize.width) {
            newPosition.x = this.screenSize.width - this.size.width;
        }

        if(newPosition.y + this.size.height > this.screenSize.height) {
            newPosition.y = this.screenSize.height - this.size.height;
        }

        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}

export const changeWindow = (updatedWindow) => {
    updatedWindow.size.width = 400;
    updatedWindow.size.height = 300;
    updatedWindow.position.x = 100;
    updatedWindow.position.y = 150;

    return updatedWindow;
}
