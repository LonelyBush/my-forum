import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type Posts } from '../interfaces/api';

export const forumApi = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    getAllPosts: build.query<Posts[], void>({
      query: () => `posts`,
    }),
    getPost: build.query<Posts, string>({
      query: (num) => `posts/${num}`,
    }),
    getPostComments: build.query<Posts, string>({
      query: (num) => `posts/${num}/comments`,
    }),
    getPostByUserId: build.query<Posts, string>({
      query: (num) => `posts?userId=${num}`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetPostCommentsQuery,
  useGetPostByUserIdQuery,
} = forumApi;
