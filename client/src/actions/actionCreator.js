import ACTION from './actiontsTypes';

//----- USER -----
export const createUser = user => ({
  type: ACTION.CREATE_USER,
  user
});
export const loginUser = user => ({
  type: ACTION.LOGIN_USER,
  user
});
export const userLogout = (refreshToken) => ({
  type: ACTION.USER_LOGOUT,
  refreshToken,
});
export const getUser = () => ({
  type: ACTION.GET_USER
});

export const getUserResponse = () => ({
  type: ACTION.USERS_RESPONSE
});


// ----- ADMIN -----
export const getAllUser = () => ({
  type: ACTION.GET_ALL_USER,
});
export const banUserById = (userId, isBanned) => ({
  type: ACTION.BAN_USER_BY_ID,
  userId,
  isBanned,
});


// ----- CONTEST -----
export const nextContestStage = () => ({
  type: ACTION.NEXT_STAGE_CONTEST,
});
export const prevContestStage = () => ({
  type: ACTION.PREV_STAGE_CONTEST,
});
export const addToContestQueue = stage => ({
  type: ACTION.ADD_TO_CONTEST_QUEUE,
  stage
});
export const createContest = contest => ({
  type: ACTION.CREATE_CONTEST_ACTION,
  contest
});