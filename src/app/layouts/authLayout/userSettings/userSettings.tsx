import { SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex } from 'antd';
import { noAuthItems } from './settings';

export const UserSettings = () => {
  return (
    <Flex gap="middle" align="center">
      <Dropdown menu={{ items: noAuthItems }} trigger={['click']}>
        <Button size="middle" shape="circle" icon={<SettingOutlined />} />
      </Dropdown>
    </Flex>
  );
};
