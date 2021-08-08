import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '付枫明',
  });

  return (
    <DefaultFooter
      copyright={`2021 ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/MotorFu/chain-store-web',
          blankTarget: true,
        },
      ]}
    />
  );
};
