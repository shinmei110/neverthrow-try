export type FetchError = Validation400Error | Validation500Error | UnexpectedStatusError | NetworkError;

export class Validation400Error extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Validation400Error';
  }
}

export class Validation500Error extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Validation500Error';
  }
}

export class UnexpectedStatusError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnexpectedError';
  }
}

export class NetworkError extends Error {
  constructor() {
    super();
    this.name = 'NetworkError';
  }
}
