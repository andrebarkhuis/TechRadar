// Imports models
import { Vote } from './vote';

export class Blip {

    public id: string;
    public angle: number;
    public timestamp: number;
    public value: number;

    constructor(public name: string, public description: string, public quadrant: string, public creator: string, public userId: number) {
        this.id = this.generateId();
        this.angle = this.generateAngle();
        this.timestamp = Date.now();
    }

    public setId(id: string): Blip {
        this.id = id;
        return this;
    }

    public setAngle(angle: number): Blip {
        this.angle = angle;
        return this;
    }

    public setTimestamp(timestamp: number): Blip {
        this.timestamp = timestamp;
        return this;
    }

    public setValue(votes: Vote[]): Blip {

        let newValue = votes.filter(x => x.id == this.id && x.isUpVote).length - votes.filter(x => x.id == this.id && !x.isUpVote).length;

        if (newValue < 0) {
            newValue = 0;
        }

        if (newValue > 100) {
            newValue = 100;
        }

        this.value = newValue;
        return this;
    }


    private generateAngle(): number {
        return Math.random() * 90
    }

    private generateId(): string {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + '-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + '-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + '-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + '-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
            + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
}