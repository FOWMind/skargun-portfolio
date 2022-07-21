const API = {
  URL: process.env.API_URL,
  KEY: process.env.API_KEY,
  ENDPOINTS: {
    VIEW_WORKS: process.env.API_VIEW_WORKS,
    VIEW_SINGLE_WORK: process.env.API_VIEW_SINGLE_WORK,
    CREATE_SINGLE_WORK: process.env.API_CREATE_SINGLE_WORK,
  },
}

const LOAD_STATES = {
  DEFAULT: 'idle',
  IDLE: 'idle',
  IN_PROGRESS: 'inProgress',
  FINISHED: 'finished',
}

export { API, LOAD_STATES }
