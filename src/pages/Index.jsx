import { Box, Button, Flex, Heading, Input, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { FaUpload, FaPlay, FaSave, FaChartLine, FaAdjust } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>机器学习平台</Heading>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>数据集构建</Tab>
          <Tab>模型训练</Tab>
          <Tab>模型验证与评估</Tab>
          <Tab>模型调整</Tab>
          <Tab>模型存储</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Button leftIcon={<FaUpload />}>上传数据集</Button>
              <Text>数据集信息：1000条数据，20个特征</Text>
              <Button>数据预处理</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Input placeholder="模型选择" />
              <Input placeholder="训练轮数" />
              <Input placeholder="学习率" />
              <Button leftIcon={<FaPlay />}>开始训练</Button>
              <Progress value={40} size="sm" colorScheme="green" />
              <Text>训练日志：正在训练...</Text>
              <Flex>
                <FaChartLine />
                <Text ml={2}>损失曲线</Text>
              </Flex>
              <Flex>
                <FaChartLine />
                <Text ml={2}>准确率曲线</Text>
              </Flex>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Button leftIcon={<FaUpload />}>导入测试数据集</Button>
              <Text>模型准确率：95%</Text>
              <Text>召回率：90%</Text>
              <Text>F1值：92%</Text>
              <Button>效果对比图表</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Input placeholder="调整训练参数" />
              <Input placeholder="数据增强方式" />
              <Button leftIcon={<FaAdjust />}>应用调整</Button>
              <Text>调整反馈：参数优化成功</Text>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Button leftIcon={<FaSave />}>保存模型</Button>
              <Text>已保存模型：模型v1.0</Text>
              <Button>导出模型</Button>
              <Button>删除模型</Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;
