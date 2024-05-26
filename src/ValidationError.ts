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

export class ValidationUnExpectedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationUnExpectedError';
  }
}