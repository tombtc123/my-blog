#!/usr/bin/env node

/**
 * 批量修复 Markdown 文件中的加粗语法问题
 * 修复中文汉字和 ** 之间缺少空格的问题
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 目标目录
const blogDir = path.join(__dirname, 'src', 'content', 'blog');

// 检查目录是否存在
if (!fs.existsSync(blogDir)) {
	console.error(`错误：目录不存在 ${blogDir}`);
	process.exit(1);
}

// 获取所有 .md 文件
const files = fs.readdirSync(blogDir)
	.filter(file => file.endsWith('.md'))
	.map(file => path.join(blogDir, file));

if (files.length === 0) {
	console.log('没有找到 .md 文件');
	process.exit(0);
}

console.log(`找到 ${files.length} 个 Markdown 文件\n`);

let totalFixed = 0;

files.forEach(filePath => {
	const fileName = path.basename(filePath);
	let content = fs.readFileSync(filePath, 'utf-8');
	const originalContent = content;
	
	// 修复规则 1: 汉字** -> 汉字 **
	// 只匹配中文字符（不包括标点）后紧跟 **
	content = content.replace(/([\u4e00-\u9fa5])\*\*/g, '$1 **');
	
	// 修复规则 2: **汉字 -> ** 汉字
	// 只匹配 ** 后紧跟中文字符（不包括标点）
	content = content.replace(/\*\*([\u4e00-\u9fa5])/g, '** $1');
	
	// 清理多余的格式：修复 ** 文字： ** 这种格式为 **文字：**
	// 匹配 ** 空格 内容 空格 ** 或 ** 空格 内容：空格 **
	content = content.replace(/\*\* +([^\n]+?) + \*\*/g, '**$1**');
	
	// 修复行首的 ** 空格 格式
	content = content.replace(/^\*\* +/gm, '**');
	
	// 修复行尾的 空格 ** 格式
	content = content.replace(/ + \*\*$/gm, '**');
	
	// 检查是否有修改
	if (content !== originalContent) {
		fs.writeFileSync(filePath, content, 'utf-8');
		const changes = (content.match(/\*\*/g) || []).length - (originalContent.match(/\*\*/g) || []).length;
		console.log(`✓ 已修复: ${fileName}`);
		totalFixed++;
	} else {
		console.log(`- 无需修复: ${fileName}`);
	}
});

console.log(`\n完成！共修复 ${totalFixed} 个文件。`);
