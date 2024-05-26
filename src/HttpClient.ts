import {HttpView} from "./HttpView";

export async function fetchData(url: string): Promise<HttpView> {
    const response: Response = await fetch(url);

    if (!response.ok) {
        switch (response.status) {
            case 400:
                throw new Validation400Error('Bad Request');
            case 404:
                throw new Validation404Error('Not Found');
            case 500:
                throw new Validation500Error('Internal Server Error');
            default:
                throw new ValidationUnExpectedError(`Unexpected status code: ${response.status}`);
        }
    }

    return await response.json();
}

export class Validation400Error extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Validation400Error';
    }
}

export class Validation404Error extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Validation404Error';
    }
}

export class Validation500Error extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Validation500Error';
    }
}

export class ValidationUnExpectedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationUnExpectedError';
    }

}
