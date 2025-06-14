import * as React from 'react';
import { ChakraProvider, Box, Flex, Input, Text, Container, Heading } from '@chakra-ui/react';
import { QRCodeSVG } from 'qrcode.react';

function App() {
  const [text, setText] = React.useState('');

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
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
