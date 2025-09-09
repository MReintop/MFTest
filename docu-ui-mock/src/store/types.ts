import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import store from '.';

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
