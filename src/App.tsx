import * as React from 'react';
import { Layout, Input, Typography, Card, Space, ConfigProvider } from 'antd';
import { QRCodeSVG } from 'qrcode.react';
import dsBridge from 'dsbridge';
import VConsole from 'vconsole';
import { useTranslation } from 'react-i18next';
import './i18n';

const { Content } = Layout;
const { Title, Text } = Typography;

// 仅在开发环境中初始化vconsole和dsBridge调试模式
if (process.env.NODE_ENV === 'development') {
  new VConsole();
  // 启用dsBridge调试模式
  // dsBridge.debug = true;
}

function App() {
  const [text, setText] = React.useState('');
  const [version, setVersion] = React.useState('0.0.2');
  const { t } = useTranslation();

  React.useEffect(() => {
    // 尝试获取原生App版本号
    const getAppVersion = () => {
      try {
        console.log('call ：app.getAppVersion');
        
        // dsBridge.call('app.getAppVersion', null, (v: string) => {
        //   console.log('当前应用版本：', v);
        //   if (v) {
        //     setVersion(v);
        //   }
        // });
        setVersion(dsBridge.call('app.getAppVersion'));
      } catch (error) {
        console.log(t('error.versionFailed'), error);
      }
    };

    getAppVersion();
  }, [t]);

  return (
    <ConfigProvider>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Content style={{ padding: '40px 24px' }}>
          <div style={{ maxWidth: '768px', margin: '0 auto' }}>
            <Space direction="vertical" size="large" style={{ width: '100%', display: 'flex' }}>
              <Title level={1} style={{ color: '#1890ff', textAlign: 'center' }}>
                {t('title')}
              </Title>
              
              <Card style={{ width: '100%' }}>
                <Space direction="vertical" size="middle" style={{ width: '100%', display: 'flex' }}>
                  <Text style={{ fontSize: '16px', color: '#666' }}>
                    {t('inputLabel')}
                  </Text>
                  <Input
                    placeholder={t('inputPlaceholder')}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    size="large"
                  />
                  
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    justifyContent: 'center' 
                  }}>
                    {text && (
                      <QRCodeSVG
                        value={text}
                        size={256}
                        level="H"
                        includeMargin={true}
                      />
                    )}
                  </div>
                </Space>
              </Card>

              <Text style={{ 
                textAlign: 'center', 
                color: '#999', 
                fontSize: '14px' 
              }}>
                {t('version')} {version}
              </Text>
            </Space>
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
