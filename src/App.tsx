import * as React from 'react';
import { ChakraProvider, Box, Flex, Input, Text, Container, Heading } from '@chakra-ui/react';
import { QRCodeSVG } from 'qrcode.react';
import dsBridge from 'dsbridge';
import VConsole from 'vconsole';

// 仅在开发环境中初始化vconsole和dsBridge调试模式
if (process.env.NODE_ENV === 'development') {
  new VConsole();
  // 启用dsBridge调试模式
  // dsBridge.debug = true;
}

function App() {
  const [text, setText] = React.useState('');
  const [version, setVersion] = React.useState('0.0.2');

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
        console.log('获取版本号失败，使用默认版本号', error);
      }
    };

    getAppVersion();
  }, []);

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.50" py={10}>
        <Container maxW="container.md">
          <Flex direction="column" gap={8}>
            <Heading as="h1" size="xl" color="blue.600">
              二维码生成器
            </Heading>
            
            <Box w="100%" bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Flex direction="column" gap={4}>
                <Text fontSize="lg" color="gray.600">
                  请输入要生成二维码的文本：
                </Text>
                <Input
                  placeholder="在此输入文本..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  size="lg"
                />
                
                <Box p={4} bg="gray.50" borderRadius="md" display="flex" justifyContent="center">
                  {text && (
                    <QRCodeSVG
                      value={text}
                      size={256}
                      level="H"
                      includeMargin={true}
                    />
                  )}
                </Box>
              </Flex>
            </Box>

            <Text textAlign="center" color="gray.500" fontSize="sm">
              版本 {version}
            </Text>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
