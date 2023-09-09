/****************************
This library implements a script runner over the Youtube API

Architecture:




****************************/

class Review {
    constructor(externalSource: string, videoProvider: string, videoId: string, participants: Participant[], sets: Set[], comments: Comment[]);

    validate(setLabel: string) {

    }
}

class Chapter {
    constructor(public participants: ChapterParticipant[], public label: string, public description: string, public playback: number, public start: number, public end: number, public annotation: Annotation);

    validate(chapterLabel: string) {
        
    }
}

class Participant {
    constructor(public reviewerId: string, public name: string, public externalId: string, public externalName: string);
}

class Sets {
    constructor(public label: string, public description: string, public assocation: Assocation, public occasion: string, public date: Date, public chapters: Chapter[]);
}

class Assocation {
    constructor(public source: string, public label: string);
}

class ChapterParticipant {
    constructor(public reviewerId: string, public x: number, public y: number, public styleId: string, public style: string);
}

class Annotation {
    constructor(public x: number, public y: number, public note: string, public duration: number);
}

class Comment {
    constructor(public at: number, public byId: string, public by: string, public comment: string);
}

