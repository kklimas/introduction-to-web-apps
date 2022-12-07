export class Journey {
    id: number;
    name: string;
    country: string;
    ticketsLeft: number;
    cost: number;
    startDate: Date;
    endDate: Date;
    description: string;
    img: string;
    stars: number;
}

export class JourneyComment {
    id: number;
    journeyId: number;
    username: string;
    text: string;
    stars: number;

    journeyName: string;
    journeyImgPath: string;
}

export class JourneyCommentDTO {
    stars: number;
    votes: number;
}

export class JourneyFilter {
    query: string = '';
    countries: string[] = [];
    startDate: Date;
    endDate: Date;
    minCost: number;
    maxCost: number;
    stars: number[];
}