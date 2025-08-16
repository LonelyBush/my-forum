import { Card, Typography } from 'antd';
import style from './post.module.css';
import { NavLink } from 'react-router';

const { Text } = Typography;

interface PostsProps {
  id: number;
  title: string;
  body: string;
}

export const Post = ({ title, body, id }: PostsProps) => {

  return (
    <Card
      className={style.postContainer}
      title={title}
      extra={<NavLink to={`/forum/${id}`}>More</NavLink>}
    >
      <Text ellipsis>{body}</Text>
    </Card>
  );
};
