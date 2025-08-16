import { Empty, Flex, Spin } from 'antd';
import { CustomPagination } from '../../shared/components/pagination/pagination';
import { Post } from '../../entities/post/post';
import style from './forum.module.css';
import { useGetAllPostsQuery } from '../../app/api/forumApi';
import { useSearchParams } from 'react-router';

export const Forum = () => {
  const pageSize = 10;
  const { data: posts, isLoading } = useGetAllPostsQuery();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPosts = posts?.slice(startIndex, endIndex) ?? [];

  return (
    <Flex
      vertical
      justify="space-between"
      flex="1"
      className={style.forumContainer}
    >
      <Flex wrap gap="middle" justify="center" className={style.postsContainer}>
        {isLoading ? (
          <Spin size="large" />
        ) : posts !== undefined ? (
          paginatedPosts.map(({ title, body, id }) => (
            <Post key={`${title}_${id}`} id={id} title={title} body={body} />
          ))
        ) : (
          <Empty />
        )}
      </Flex>
      <CustomPagination
        pageSize={pageSize}
        dataLength={posts ? posts.length : 0}
      />
    </Flex>
  );
};
