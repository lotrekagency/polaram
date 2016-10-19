export const TEST = process.env.NODE_ENV === 'test';
export const API_ENDPOINT = `${TEST ? 'http://localhost/' : 'http://localhost:3000/'}`;
