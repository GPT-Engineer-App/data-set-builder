# data-set-builder

输出界面用中文显示:
1. 数据集构建界面：
- 功能：
- 提供数据集上传和管理功能。
- 显示数据集的基本信息，如数据量、特征数量等。
- 允许用户对数据集进行预处理，如数据清洗、特征选择等。
 2. 模型训练界面：
- 功能：
- 展示模型训练的参数设置，如模型选择、训练轮数、学习率等。
- 提供启动训练按钮，并显示训练进度和日志信息。
- 显示训练过程中的损失曲线和准确率曲线。
 3. 模型验证与评估界面：
- 功能：
- 提供测试数据集的导入和效果对比功能。
- 展示模型在测试数据集上的预测结果和性能评估指标，如准确率、召回率、F1值等。
- 提供可视化的效果对比图表，帮助用户评估模型的预测能力。
 4. 模型调整界面：
- 功能：
- 允许用户调整训练参数、数据增强方式、数据标注质量等操作。
- 提供实时反馈和验证效果，帮助用户优化模型性能。
- 支持保存不同参数设置下的模型版本。
5. 模型存储界面：
- 功能：
- 提供模型保存功能，将训练好的模型存储为单独的文件。
- 允许用户管理已保存的模型文件，包括查看、导出和删除操作。
- 支持模型文件的版本管理和备份。


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/data-set-builder.git
cd data-set-builder
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
