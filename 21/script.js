// 全局变量
let currentConceptExample = 0;

// 添加物品类型数组
const items = [
    { name: '苹果', className: 'apple' },
    { name: '香蕉', className: 'banana' },
    { name: '小汽车', className: 'car' },
    { name: '草莓', className: 'strawberry' },
    { name: '菠萝', className: 'pineapple' }
];

const conceptExamples = [
    { num1: 1, num2: 1, text: "1组，每组1个苹果", additionText: "1 = 1", multiplicationText: "1 × 1 = 1" },
    { num1: 1, num2: 2, text: "1组，每组2个苹果", additionText: "2 = 2", multiplicationText: "1 × 2 = 2" },
    { num1: 1, num2: 3, text: "1组，每组3个苹果", additionText: "3 = 3", multiplicationText: "1 × 3 = 3" },
    { num1: 1, num2: 4, text: "1组，每组4个苹果", additionText: "4 = 4", multiplicationText: "1 × 4 = 4" },
    { num1: 1, num2: 5, text: "1组，每组5个苹果", additionText: "5 = 5", multiplicationText: "1 × 5 = 5" },
    { num1: 1, num2: 6, text: "1组，每组6个苹果", additionText: "6 = 6", multiplicationText: "1 × 6 = 6" },
    { num1: 1, num2: 7, text: "1组，每组7个苹果", additionText: "7 = 7", multiplicationText: "1 × 7 = 7" },
    { num1: 1, num2: 8, text: "1组，每组8个苹果", additionText: "8 = 8", multiplicationText: "1 × 8 = 8" },
    { num1: 1, num2: 9, text: "1组，每组9个苹果", additionText: "9 = 9", multiplicationText: "1 × 9 = 9" },
    { num1: 2, num2: 1, text: "2组，每组1个苹果", additionText: "1 + 1 = 2", multiplicationText: "2 × 1 = 2" },
    { num1: 2, num2: 2, text: "2组，每组2个苹果", additionText: "2 + 2 = 4", multiplicationText: "2 × 2 = 4" },
    { num1: 2, num2: 3, text: "2组，每组3个苹果", additionText: "3 + 3 = 6", multiplicationText: "2 × 3 = 6" },
    { num1: 2, num2: 4, text: "2组，每组4个苹果", additionText: "4 + 4 = 8", multiplicationText: "2 × 4 = 8" },
    { num1: 2, num2: 5, text: "2组，每组5个苹果", additionText: "5 + 5 = 10", multiplicationText: "2 × 5 = 10" },
    { num1: 2, num2: 6, text: "2组，每组6个苹果", additionText: "6 + 6 = 12", multiplicationText: "2 × 6 = 12" },
    { num1: 2, num2: 7, text: "2组，每组7个苹果", additionText: "7 + 7 = 14", multiplicationText: "2 × 7 = 14" },
    { num1: 2, num2: 8, text: "2组，每组8个苹果", additionText: "8 + 8 = 16", multiplicationText: "2 × 8 = 16" },
    { num1: 2, num2: 9, text: "2组，每组9个苹果", additionText: "9 + 9 = 18", multiplicationText: "2 × 9 = 18" },
    { num1: 3, num2: 1, text: "3组，每组1个苹果", additionText: "1 + 1 + 1 = 3", multiplicationText: "3 × 1 = 3" },
    { num1: 3, num2: 2, text: "3组，每组2个苹果", additionText: "2 + 2 + 2 = 6", multiplicationText: "3 × 2 = 6" },
    { num1: 3, num2: 3, text: "3组，每组3个苹果", additionText: "3 + 3 + 3 = 9", multiplicationText: "3 × 3 = 9" },
    { num1: 3, num2: 4, text: "3组，每组4个苹果", additionText: "4 + 4 + 4 = 12", multiplicationText: "3 × 4 = 12" },
    { num1: 3, num2: 5, text: "3组，每组5个苹果", additionText: "5 + 5 + 5 = 15", multiplicationText: "3 × 5 = 15" },
    { num1: 3, num2: 6, text: "3组，每组6个苹果", additionText: "6 + 6 + 6 = 18", multiplicationText: "3 × 6 = 18" },
    { num1: 3, num2: 7, text: "3组，每组7个苹果", additionText: "7 + 7 + 7 = 21", multiplicationText: "3 × 7 = 21" },
    { num1: 3, num2: 8, text: "3组，每组8个苹果", additionText: "8 + 8 + 8 = 24", multiplicationText: "3 × 8 = 24" },
    { num1: 3, num2: 9, text: "3组，每组9个苹果", additionText: "9 + 9 + 9 = 27", multiplicationText: "3 × 9 = 27" },
    { num1: 4, num2: 1, text: "4组，每组1个苹果", additionText: "1 + 1 + 1 + 1 = 4", multiplicationText: "4 × 1 = 4" },
    { num1: 4, num2: 2, text: "4组，每组2个苹果", additionText: "2 + 2 + 2 + 2 = 8", multiplicationText: "4 × 2 = 8" },
    { num1: 4, num2: 3, text: "4组，每组3个苹果", additionText: "3 + 3 + 3 + 3 = 12", multiplicationText: "4 × 3 = 12" },
    { num1: 4, num2: 4, text: "4组，每组4个苹果", additionText: "4 + 4 + 4 + 4 = 16", multiplicationText: "4 × 4 = 16" },
    { num1: 4, num2: 5, text: "4组，每组5个苹果", additionText: "5 + 5 + 5 + 5 = 20", multiplicationText: "4 × 5 = 20" },
    { num1: 4, num2: 6, text: "4组，每组6个苹果", additionText: "6 + 6 + 6 + 6 = 24", multiplicationText: "4 × 6 = 24" },
    { num1: 4, num2: 7, text: "4组，每组7个苹果", additionText: "7 + 7 + 7 + 7 = 28", multiplicationText: "4 × 7 = 28" },
    { num1: 4, num2: 8, text: "4组，每组8个苹果", additionText: "8 + 8 + 8 + 8 = 32", multiplicationText: "4 × 8 = 32" },
    { num1: 4, num2: 9, text: "4组，每组9个苹果", additionText: "9 + 9 + 9 + 9 = 36", multiplicationText: "4 × 9 = 36" },
    { num1: 5, num2: 1, text: "5组，每组1个苹果", additionText: "1 + 1 + 1 + 1 + 1 = 5", multiplicationText: "5 × 1 = 5" },
    { num1: 5, num2: 2, text: "5组，每组2个苹果", additionText: "2 + 2 + 2 + 2 + 2 = 10", multiplicationText: "5 × 2 = 10" },
    { num1: 5, num2: 3, text: "5组，每组3个苹果", additionText: "3 + 3 + 3 + 3 + 3 = 15", multiplicationText: "5 × 3 = 15" },
    { num1: 5, num2: 4, text: "5组，每组4个苹果", additionText: "4 + 4 + 4 + 4 + 4 = 20", multiplicationText: "5 × 4 = 20" },
    { num1: 5, num2: 5, text: "5组，每组5个苹果", additionText: "5 + 5 + 5 + 5 + 5 = 25", multiplicationText: "5 × 5 = 25" },
    { num1: 5, num2: 6, text: "5组，每组6个苹果", additionText: "6 + 6 + 6 + 6 + 6 = 30", multiplicationText: "5 × 6 = 30" },
    { num1: 5, num2: 7, text: "5组，每组7个苹果", additionText: "7 + 7 + 7 + 7 + 7 = 35", multiplicationText: "5 × 7 = 35" },
    { num1: 5, num2: 8, text: "5组，每组8个苹果", additionText: "8 + 8 + 8 + 8 + 8 = 40", multiplicationText: "5 × 8 = 40" },
    { num1: 5, num2: 9, text: "5组，每组9个苹果", additionText: "9 + 9 + 9 + 9 + 9 = 45", multiplicationText: "5 × 9 = 45" },
    { num1: 6, num2: 1, text: "6组，每组1个苹果", additionText: "1 + 1 + 1 + 1 + 1 + 1 = 6", multiplicationText: "6 × 1 = 6" },
    { num1: 6, num2: 2, text: "6组，每组2个苹果", additionText: "2 + 2 + 2 + 2 + 2 + 2 = 12", multiplicationText: "6 × 2 = 12" },
    { num1: 6, num2: 3, text: "6组，每组3个苹果", additionText: "3 + 3 + 3 + 3 + 3 + 3 = 18", multiplicationText: "6 × 3 = 18" },
    { num1: 6, num2: 4, text: "6组，每组4个苹果", additionText: "4 + 4 + 4 + 4 + 4 + 4 = 24", multiplicationText: "6 × 4 = 24" },
    { num1: 6, num2: 5, text: "6组，每组5个苹果", additionText: "5 + 5 + 5 + 5 + 5 + 5 = 30", multiplicationText: "6 × 5 = 30" },
    { num1: 6, num2: 6, text: "6组，每组6个苹果", additionText: "6 + 6 + 6 + 6 + 6 + 6 = 36", multiplicationText: "6 × 6 = 36" },
    { num1: 6, num2: 7, text: "6组，每组7个苹果", additionText: "7 + 7 + 7 + 7 + 7 + 7 = 42", multiplicationText: "6 × 7 = 42" },
    { num1: 6, num2: 8, text: "6组，每组8个苹果", additionText: "8 + 8 + 8 + 8 + 8 + 8 = 48", multiplicationText: "6 × 8 = 48" },
    { num1: 6, num2: 9, text: "6组，每组9个苹果", additionText: "9 + 9 + 9 + 9 + 9 + 9 = 54", multiplicationText: "6 × 9 = 54" },
    { num1: 7, num2: 1, text: "7组，每组1个苹果", additionText: "1 + 1 + 1 + 1 + 1 + 1 + 1 = 7", multiplicationText: "7 × 1 = 7" },
    { num1: 7, num2: 2, text: "7组，每组2个苹果", additionText: "2 + 2 + 2 + 2 + 2 + 2 + 2 = 14", multiplicationText: "7 × 2 = 14" },
    { num1: 7, num2: 3, text: "7组，每组3个苹果", additionText: "3 + 3 + 3 + 3 + 3 + 3 + 3 = 21", multiplicationText: "7 × 3 = 21" },
    { num1: 7, num2: 4, text: "7组，每组4个苹果", additionText: "4 + 4 + 4 + 4 + 4 + 4 + 4 = 28", multiplicationText: "7 × 4 = 28" },
    { num1: 7, num2: 5, text: "7组，每组5个苹果", additionText: "5 + 5 + 5 + 5 + 5 + 5 + 5 = 35", multiplicationText: "7 × 5 = 35" },
    { num1: 7, num2: 6, text: "7组，每组6个苹果", additionText: "6 + 6 + 6 + 6 + 6 + 6 + 6 = 42", multiplicationText: "7 × 6 = 42" },
    { num1: 7, num2: 7, text: "7组，每组7个苹果", additionText: "7 + 7 + 7 + 7 + 7 + 7 + 7 = 49", multiplicationText: "7 × 7 = 49" },
    { num1: 7, num2: 8, text: "7组，每组8个苹果", additionText: "8 + 8 + 8 + 8 + 8 + 8 + 8 = 56", multiplicationText: "7 × 8 = 56" },
    { num1: 7, num2: 9, text: "7组，每组9个苹果", additionText: "9 + 9 + 9 + 9 + 9 + 9 + 9 = 63", multiplicationText: "7 × 9 = 63" },
    { num1: 8, num2: 1, text: "8组，每组1个苹果", additionText: "1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8", multiplicationText: "8 × 1 = 8" },
    { num1: 8, num2: 2, text: "8组，每组2个苹果", additionText: "2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 16", multiplicationText: "8 × 2 = 16" },
    { num1: 8, num2: 3, text: "8组，每组3个苹果", additionText: "3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 24", multiplicationText: "8 × 3 = 24" },
    { num1: 8, num2: 4, text: "8组，每组4个苹果", additionText: "4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 = 32", multiplicationText: "8 × 4 = 32" },
    { num1: 8, num2: 5, text: "8组，每组5个苹果", additionText: "5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 = 40", multiplicationText: "8 × 5 = 40" },
    { num1: 8, num2: 6, text: "8组，每组6个苹果", additionText: "6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 48", multiplicationText: "8 × 6 = 48" },
    { num1: 8, num2: 7, text: "8组，每组7个苹果", additionText: "7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 = 56", multiplicationText: "8 × 7 = 56" },
    { num1: 8, num2: 8, text: "8组，每组8个苹果", additionText: "8 + 8 + 8 + 8 + 8 + 8 + 8 + 8 = 64", multiplicationText: "8 × 8 = 64" },
    { num1: 8, num2: 9, text: "8组，每组9个苹果", additionText: "9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 = 72", multiplicationText: "8 × 9 = 72" },
    { num1: 9, num2: 1, text: "9组，每组1个苹果", additionText: "1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 9", multiplicationText: "9 × 1 = 9" },
    { num1: 9, num2: 2, text: "9组，每组2个苹果", additionText: "2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 18", multiplicationText: "9 × 2 = 18" },
    { num1: 9, num2: 3, text: "9组，每组3个苹果", additionText: "3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 27", multiplicationText: "9 × 3 = 27" },
    { num1: 9, num2: 4, text: "9组，每组4个苹果", additionText: "4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 = 36", multiplicationText: "9 × 4 = 36" },
    { num1: 9, num2: 5, text: "9组，每组5个苹果", additionText: "5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 = 45", multiplicationText: "9 × 5 = 45" },
    { num1: 9, num2: 6, text: "9组，每组6个苹果", additionText: "6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 54", multiplicationText: "9 × 6 = 54" },
    { num1: 9, num2: 7, text: "9组，每组7个苹果", additionText: "7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 = 63", multiplicationText: "9 × 7 = 63" },
    { num1: 9, num2: 8, text: "9组，每组8个苹果", additionText: "8 + 8 + 8 + 8 + 8 + 8 + 8 + 8 + 8 = 72", multiplicationText: "9 × 8 = 72" },
    { num1: 9, num2: 9, text: "9组，每组9个苹果", additionText: "9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 = 81", multiplicationText: "9 × 9 = 81" }
];

let speechSynthesis = window.speechSynthesis;
let speechUtterance = new SpeechSynthesisUtterance();
speechUtterance.lang = 'zh-CN';
speechUtterance.rate = 0.9; // 语速稍慢，适合儿童

// 存储已解锁的乘法表数字
let unlockedNumbers = [1, 2, 3, 4, 5]; // 初始解锁 1-5

// 故事数据
const stories = [
    {
        image: "rabbit.png",
        text: "小兔子要分3组，每组4根胡萝卜。",
        question: "小兔子总共需要多少根胡萝卜？",
        options: [8, 12, 7, 10],
        answer: 12,
        explanation: "3组，每组4根胡萝卜，3 × 4 = 12根胡萝卜。"
    },
    {
        image: "dolphin.png",
        text: "海豚妈妈带着5个小海豚，每个小海豚要吃2条小鱼。",
        question: "小海豚们总共要吃多少条小鱼？",
        options: [7, 15, 10, 5],
        answer: 10,
        explanation: "5个小海豚，每个吃2条小鱼，5 × 2 = 10条小鱼。"
    },
    {
        image: "elephant.png",
        text: "4只小象，每只小象有4条腿。",
        question: "这些小象总共有多少条腿？",
        options: [8, 12, 16, 20],
        answer: 16,
        explanation: "4只小象，每只有4条腿，4 × 4 = 16条腿。"
    }
];
let currentStory = 0;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 初始化各部分功能
    initNavigation();
    initConcepts();
    initPractice();
    initStory();
    initTable();
    initChallenge();
    
    // 设置语音朗读功能
    setupSpeech();
});

// 初始化导航
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活跃状态
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // 添加当前活跃状态
            button.classList.add('active');
            const targetSection = document.getElementById(button.dataset.section);
            targetSection.classList.add('active');
        });
    });
}

// 设置语音朗读
function setupSpeech() {
    const speechElements = document.querySelectorAll('.speech-text');
    speechElements.forEach(element => {
        element.addEventListener('click', () => {
            const text = element.dataset.speech || element.textContent;
            speak(text);
        });
    });
}

// 语音朗读函数
function speak(text) {
    // 停止任何正在进行的朗读
    speechSynthesis.cancel();
    
    speechUtterance.text = text;
    speechSynthesis.speak(speechUtterance);
}

// 概念部分初始化
function initConcepts() {
    // 随机选择一个起始示例
    currentConceptExample = Math.floor(Math.random() * conceptExamples.length);
    updateConceptExample();
    
    // 设置"数一数"按钮
    const countApplesBtn = document.getElementById('countApplesBtn');
    countApplesBtn.addEventListener('click', countApples);
    
    // 设置导航箭头
    const prevExampleBtn = document.getElementById('prevExampleBtn');
    const nextExampleBtn = document.getElementById('nextExampleBtn');
    
    // 修改按钮文本
    prevExampleBtn.textContent = '换一个';
    nextExampleBtn.textContent = '换一个';
    
    // 为两个按钮添加相同的随机切换功能
    const showRandomExample = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * conceptExamples.length);
        } while (newIndex === currentConceptExample); // 确保不会重复显示同一个例子
        currentConceptExample = newIndex;
        updateConceptExample();
    };
    
    prevExampleBtn.addEventListener('click', showRandomExample);
    nextExampleBtn.addEventListener('click', showRandomExample);
}

// 更新概念示例
function updateConceptExample() {
    const example = conceptExamples[currentConceptExample];
    const applesContainer = document.querySelector('.apples-container');
    const exampleTexts = document.querySelectorAll('.example-text p');
    const indicators = document.querySelectorAll('.indicator');
    const prevExampleBtn = document.getElementById('prevExampleBtn');
    const nextExampleBtn = document.getElementById('nextExampleBtn');
    
    // 随机选择一个物品
    const randomItem = items[Math.floor(Math.random() * items.length)];
    
    // 更新物品展示
    applesContainer.innerHTML = '';
    for (let i = 0; i < example.num1; i++) {
        const group = document.createElement('div');
        group.className = 'apple-group';
        
        for (let j = 0; j < example.num2; j++) {
            const item = document.createElement('div');
            item.className = randomItem.className;
            group.appendChild(item);
        }
        
        applesContainer.appendChild(group);
    }
    
    // 更新文字描述
    document.querySelector('.visual-example .example-text:first-child p').innerHTML = `这是 <span class="highlight speech-text" data-speech="${example.num1}">${example.num1}</span> 组，每组有 <span class="highlight speech-text" data-speech="${example.num2}">${example.num2}</span> 个${randomItem.name}`;
    exampleTexts[1].innerHTML = `我们可以这样计算：<span class="highlight">${example.additionText}</span>`;
    exampleTexts[2].innerHTML = `也可以写成：<span class="highlight speech-text" data-speech="${example.num1}乘${example.num2}等于${example.num1 * example.num2}">${example.multiplicationText}</span>`;
    
    // 更新指示器
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentConceptExample);
    });
    
    // 更新按钮状态
    prevExampleBtn.disabled = currentConceptExample === 0;
    nextExampleBtn.disabled = currentConceptExample === conceptExamples.length - 1;
    
    // 重新设置语音点击事件
    setupSpeech();
    
    // 清除计数结果
    document.getElementById('countResult').textContent = '';
}

// 数一数的函数
function countApples() {
    const example = conceptExamples[currentConceptExample];
    const result = example.num1 * example.num2;
    const countResult = document.getElementById('countResult');
    
    // 获取当前显示的物品类型
    const currentItem = document.querySelector('.apple-group div').className;
    const itemName = items.find(item => item.className === currentItem).name;
    
    countResult.textContent = `总共有 ${result} 个${itemName}！`;
    speak(`总共有${result}个${itemName}！`);
    countResult.classList.add('bounce');
    
    setTimeout(() => {
        countResult.classList.remove('bounce');
    }, 1000);
}

// 练习部分初始化
function initPractice() {
    const practiceTabs = document.querySelectorAll('.practice-tab');
    const practiceContents = document.querySelectorAll('.practice-content');
    
    practiceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            practiceTabs.forEach(t => t.classList.remove('active'));
            practiceContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.dataset.practice).classList.add('active');
            
            // 初始化对应的游戏
            if (tab.dataset.practice === 'drag') {
                initDragGame();
            } else if (tab.dataset.practice === 'match') {
                initMatchGame();
            } else if (tab.dataset.practice === 'puzzle') {
                initPuzzleGame();
            }
        });
    });
    
    // 默认初始化拖拽游戏
    initDragGame();
}

// 拖拽游戏初始化
function initDragGame() {
    const dragGroupCount = document.getElementById('dragGroupCount');
    const dragItemCount = document.getElementById('dragItemCount');
    const candySource = document.getElementById('candySource');
    const boxesContainer = document.getElementById('boxesContainer');
    const dragResult = document.getElementById('dragResult');
    
    // 随机生成问题
    const num1 = Math.floor(Math.random() * 5) + 1; // 1-5组
    const num2 = Math.floor(Math.random() * 5) + 1; // 每组1-5个
    
    dragGroupCount.textContent = num1;
    dragItemCount.textContent = num2;
    
    // 清空容器
    candySource.innerHTML = '';
    boxesContainer.innerHTML = '';
    dragResult.innerHTML = '';
    
    // 创建糖果源
    for (let i = 0; i < num1 * num2; i++) {
        const candy = document.createElement('div');
        candy.className = 'candy';
        candy.draggable = true;
        candy.addEventListener('dragstart', dragStart);
        candySource.appendChild(candy);
    }
    
    // 创建盒子
    for (let i = 0; i < num1; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.dataset.groupIndex = i;
        box.dataset.count = 0;
        box.addEventListener('dragover', dragOver);
        box.addEventListener('drop', drop);
        boxesContainer.appendChild(box);
    }
    
    // 拖拽相关函数
    function dragStart(e) {
        e.dataTransfer.setData('text/plain', 'candy');
        e.target.classList.add('dragging');
    }
    
    function dragOver(e) {
        e.preventDefault();
    }
    
    function drop(e) {
        e.preventDefault();
        
        const box = e.target.closest('.box');
        if (!box) return;
        
        // 检查盒子中已有的糖果数量
        const currentCount = parseInt(box.dataset.count);
        if (currentCount < num2) {
            const candy = document.querySelector('.candy.dragging');
            if (candy) {
                candy.classList.remove('dragging');
                candy.removeEventListener('dragstart', dragStart);
                candySource.removeChild(candy);
                
                const newCandy = document.createElement('div');
                newCandy.className = 'candy';
                box.appendChild(newCandy);
                
                box.dataset.count = currentCount + 1;
                
                // 检查是否完成
                checkDragCompletion();
            }
        }
    }
    
    // 检查是否完成拖拽游戏
    function checkDragCompletion() {
        const boxes = document.querySelectorAll('.box');
        let completed = true;
        
        boxes.forEach(box => {
            if (parseInt(box.dataset.count) !== num2) {
                completed = false;
            }
        });
        
        if (completed) {
            dragResult.innerHTML = `<p>太棒了！${num1} × ${num2} = ${num1 * num2}</p>`;
            speak(`太棒了！${num1}乘以${num2}等于${num1 * num2}`);
            showReward(`你完成了 ${num1} × ${num2} = ${num1 * num2}`, 'stars');
            
            // 延迟后重新初始化游戏
            setTimeout(() => {
                initDragGame();
            }, 3000);
        }
    }
}

// 连线游戏初始化
function initMatchGame() {
    const matchArea = document.getElementById('matchArea');
    const checkMatchBtn = document.getElementById('checkMatchBtn');
    
    matchArea.innerHTML = '';
    
    // 创建连线游戏
    const equations = [];
    const visuals = [];
    
    // 创建4个连线题目
    for (let i = 0; i < 4; i++) {
        const num1 = Math.floor(Math.random() * 5) + 1;
        const num2 = Math.floor(Math.random() * 5) + 1;
        const result = num1 * num2;
        
        // 创建等式
        const equationDiv = document.createElement('div');
        equationDiv.className = 'match-item';
        equationDiv.innerHTML = `<div class="match-equation">${num1} × ${num2} = ?</div>`;
        equationDiv.dataset.result = result;
        equationDiv.dataset.matched = 'false';
        equationDiv.dataset.index = i;
        equationDiv.addEventListener('click', selectMatchItem);
        equations.push(equationDiv);
        
        // 创建可视化表示
        const visualDiv = document.createElement('div');
        visualDiv.className = 'match-item';
        
        const visualContent = document.createElement('div');
        visualContent.className = 'match-visual';
        
        // 计算总星星数
        const totalStars = num1 * num2;
        
        // 确定每行最多显示的星星数(最多10个)
        const starsPerRow = Math.min(10, totalStars);
        
        // 计算需要的行数
        const rowsNeeded = Math.ceil(totalStars / starsPerRow);
        
        // 创建星星容器
        for (let row = 0; row < rowsNeeded; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            rowDiv.style.justifyContent = 'center';
            rowDiv.style.gap = '5px';
            rowDiv.style.marginBottom = '5px';
            
            // 计算这一行应该显示多少个星星
            const starsInThisRow = (row === rowsNeeded - 1 && totalStars % starsPerRow !== 0) 
                ? totalStars % starsPerRow 
                : starsPerRow;
            
            // 在当前行添加星星
            for (let j = 0; j < starsInThisRow; j++) {
                const star = document.createElement('div');
                star.className = 'match-star';
                rowDiv.appendChild(star);
            }
            
            visualContent.appendChild(rowDiv);
        }
        
        visualDiv.appendChild(visualContent);
        visualDiv.dataset.result = result;
        visualDiv.dataset.matched = 'false';
        visualDiv.dataset.index = i + 4; // 后四个索引
        visualDiv.addEventListener('click', selectMatchItem);
        visuals.push(visualDiv);
    }
    
    // 乱序排列视觉部分
    visuals.sort(() => Math.random() - 0.5);
    
    // 添加到匹配区域
    equations.forEach(eq => matchArea.appendChild(eq));
    visuals.forEach(vis => matchArea.appendChild(vis));
    
    // 当前选中的项
    let selectedItems = [];
    
    // 选择连线项的函数
    function selectMatchItem() {
        // 如果已经匹配，则不处理
        if (this.dataset.matched === 'true') return;
        
        // 如果已选择两个，则不处理
        if (selectedItems.length === 2) return;
        
        // 选中当前项
        this.style.backgroundColor = '#ffe0b5';
        selectedItems.push(this);
        
        // 如果已选择两个，检查是否匹配
        if (selectedItems.length === 2) {
            if (selectedItems[0].dataset.result === selectedItems[1].dataset.result) {
                // 匹配成功
                selectedItems.forEach(item => {
                    item.style.backgroundColor = '#c8e6c9';
                    item.dataset.matched = 'true';
                });
                
                // 语音反馈
                const result = selectedItems[0].dataset.result;
                speak(`很好，这是${result}！`);
                
                // 检查是否完成所有匹配
                checkAllMatched();
            } else {
                // 匹配失败，重置
                setTimeout(() => {
                    selectedItems.forEach(item => {
                        item.style.backgroundColor = '';
                    });
                    selectedItems = [];
                }, 1000);
                
                speak('再试一次！');
            }
        }
    }
    
    // 检查是否完成所有匹配
    function checkAllMatched() {
        const allItems = matchArea.querySelectorAll('.match-item');
        let allMatched = true;
        
        allItems.forEach(item => {
            if (item.dataset.matched === 'false') {
                allMatched = false;
            }
        });
        
        if (allMatched) {
            speak('太棒了！你完成了所有匹配！');
            showReward('你完成了所有匹配！', 'confetti');
            
            // 延迟后重新初始化游戏
            setTimeout(() => {
                initMatchGame();
            }, 3000);
        } else {
            // 重置选择
            selectedItems = [];
        }
    }
    
    // 检查按钮
    checkMatchBtn.addEventListener('click', () => {
        selectedItems = [];
        checkAllMatched();
    });
}

// 拼图游戏初始化
function initPuzzleGame() {
    const puzzleArea = document.getElementById('puzzleArea');
    const puzzlePieces = document.getElementById('puzzlePieces');
    const puzzleSlots = document.querySelectorAll('.puzzle-slot');
    const checkPuzzleBtn = document.getElementById('checkPuzzleBtn');
    
    // 随机生成题目
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    const result = num1 * num2;
    
    // 清空拼图槽和拼图块
    puzzleSlots.forEach(slot => {
        slot.innerHTML = '';
        slot.dataset.value = '';
    });
    puzzlePieces.innerHTML = '';
    
    // 创建拼图块
    const pieces = [num1, num2, result];
    
    // 添加一些干扰项
    pieces.push(num1 + num2);
    pieces.push(Math.abs(num1 - num2));
    pieces.push(result + 1);
    pieces.push(result - 1);
    pieces.push(Math.floor(Math.random() * 10) + 1);
    
    // 去重并乱序
    const uniquePieces = [...new Set(pieces)];
    uniquePieces.sort(() => Math.random() - 0.5);
    
    // 创建拼图块
    uniquePieces.forEach(value => {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.textContent = value;
        piece.dataset.value = value;
        piece.draggable = true;
        
        piece.addEventListener('dragstart', dragStart);
        puzzlePieces.appendChild(piece);
    });
    
    // 为拼图槽添加放置事件
    puzzleSlots.forEach(slot => {
        slot.addEventListener('dragover', dragOver);
        slot.addEventListener('drop', drop);
    });
    
    // 拖拽相关函数
    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.value);
        e.target.classList.add('dragging');
    }
    
    function dragOver(e) {
        e.preventDefault();
    }
    
    function drop(e) {
        e.preventDefault();
        
        const slot = e.target;
        if (!slot.classList.contains('puzzle-slot')) return;
        
        const value = e.dataTransfer.getData('text/plain');
        const piece = document.querySelector(`.puzzle-piece.dragging`);
        
        if (piece) {
            piece.classList.remove('dragging');
            
            // 如果槽已有内容，移除并返回到拼图块区域
            if (slot.dataset.value) {
                const oldValue = slot.dataset.value;
                const oldPiece = document.createElement('div');
                oldPiece.className = 'puzzle-piece';
                oldPiece.textContent = oldValue;
                oldPiece.dataset.value = oldValue;
                oldPiece.draggable = true;
                oldPiece.addEventListener('dragstart', dragStart);
                puzzlePieces.appendChild(oldPiece);
                
                slot.innerHTML = '';
            }
            
            // 将拼图块放入槽
            const newPiece = document.createElement('div');
            newPiece.className = 'puzzle-piece';
            newPiece.textContent = value;
            newPiece.dataset.value = value;
            slot.innerHTML = '';
            slot.appendChild(newPiece);
            slot.dataset.value = value;
            
            // 从原始区域移除
            puzzlePieces.removeChild(piece);
        }
    }
    
    // 检查按钮
    checkPuzzleBtn.addEventListener('click', () => {
        // 获取槽中的值
        const values = [];
        puzzleSlots.forEach(slot => {
            values.push(parseInt(slot.dataset.value) || 0);
        });
        
        // 检查是否完成方程
        if (values[0] * values[1] === values[2] && values.every(v => v > 0)) {
            speak(`太棒了！${values[0]}乘以${values[1]}等于${values[2]}`);
            showReward(`${values[0]} × ${values[1]} = ${values[2]}`, 'stars');
            
            // 延迟后重新初始化游戏
            setTimeout(() => {
                initPuzzleGame();
            }, 3000);
        } else {
            speak('再试一次！');
        }
    });
}

// 故事模式初始化
function initStory() {
    updateStory();
    
    const nextStoryBtn = document.getElementById('nextStoryBtn');
    nextStoryBtn.addEventListener('click', () => {
        currentStory = (currentStory + 1) % stories.length;
        updateStory();
    });
}

// 更新故事
function updateStory() {
    const story = stories[currentStory];
    const storyImage = document.getElementById('storyImage');
    const storyText = document.getElementById('storyText');
    const storyQuestion = document.getElementById('storyQuestion');
    const storyOptions = document.getElementById('storyOptions');
    const storyFeedback = document.getElementById('storyFeedback');
    
    storyImage.style.backgroundImage = `url(${story.image})`;
    storyText.textContent = story.text;
    storyQuestion.textContent = story.question;
    storyFeedback.textContent = '';
    
    // 创建选项
    storyOptions.innerHTML = '';
    story.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'story-option';
        button.textContent = option;
        button.addEventListener('click', () => {
            if (option === story.answer) {
                storyFeedback.textContent = '对了！' + story.explanation;
                storyFeedback.className = 'story-feedback correct';
                speak('答对了！' + story.explanation);
                showReward('聪明的小朋友！', 'confetti');
            } else {
                storyFeedback.textContent = '再想想看！';
                storyFeedback.className = 'story-feedback incorrect';
                speak('再想想看！');
            }
        });
        storyOptions.appendChild(button);
    });
    
    // 朗读故事
    setTimeout(() => {
        speak(story.text);
    }, 500);
}

// 显示奖励
function showReward(message, type) {
    const rewardContainer = document.getElementById('rewardContainer');
    const rewardMessage = document.getElementById('rewardMessage');
    const rewardAnimation = document.getElementById('rewardAnimation');
    const rewardCloseBtn = document.getElementById('rewardCloseBtn');
    
    rewardMessage.textContent = message;
    
    // 设置奖励动画
    rewardAnimation.innerHTML = '';
    if (type === 'stars') {
        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animation = `bounce ${Math.random() * 1 + 0.5}s infinite`;
            rewardAnimation.appendChild(star);
        }
    } else if (type === 'confetti') {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = Math.random() * 100 + '%';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            rewardAnimation.appendChild(confetti);
        }
    }
    
    // 显示奖励
    rewardContainer.style.display = 'flex';
    
    // 关闭奖励
    rewardCloseBtn.addEventListener('click', () => {
        rewardContainer.style.display = 'none';
    });
    
    // 语音祝贺
    speak('太棒了！' + message);
}

// 乘法表部分初始化
function initTable() {
    const tableNumberButtons = document.getElementById('tableNumberButtons');
    const multiplicationTable = document.getElementById('multiplicationTable');
    const tableVisual = document.getElementById('tableVisual');
    
    // 创建数字按钮 (1-9)
    tableNumberButtons.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        const button = document.createElement('button');
        button.className = 'number-btn';
        button.textContent = i;
        
        // 检查是否锁定
        if (!unlockedNumbers.includes(i)) {
            button.classList.add('locked');
        } else {
            button.addEventListener('click', () => {
                // 设置活跃状态
                document.querySelectorAll('.number-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                
                // 显示乘法表
                showMultiplicationTable(i);
            });
        }
        
        tableNumberButtons.appendChild(button);
    }
    
    // 默认显示1的乘法表
    showMultiplicationTable(1);
    document.querySelector('.number-btn').classList.add('active');
}

// 显示乘法表
function showMultiplicationTable(number) {
    const multiplicationTable = document.getElementById('multiplicationTable');
    const tableVisual = document.getElementById('tableVisual');
    
    multiplicationTable.innerHTML = '';
    
    // 显示指定数字的乘法表
    for (let i = 1; i <= 9; i++) {
        const result = number * i;
        
        const row = document.createElement('div');
        row.className = 'table-row';
        
        const cell = document.createElement('div');
        cell.className = 'table-cell';
        cell.textContent = `${number} × ${i} = ${result}`;
        
        cell.addEventListener('click', () => {
            speak(`${number}乘以${i}等于${result}`);
            showVisualRepresentation(number, i);
        });
        
        row.appendChild(cell);
        multiplicationTable.appendChild(row);
    }
    
    // 默认显示第一个视觉表示
    showVisualRepresentation(number, 1);
}

// 显示视觉表示
function showVisualRepresentation(num1, num2) {
    const tableVisual = document.getElementById('tableVisual');
    tableVisual.innerHTML = '';
    
    // 计算总星星数
    const totalStars = num1 * num2;
    
    // 确定每行最多显示的星星数(最多10个)
    const starsPerRow = Math.min(10, totalStars);
    
    // 计算需要的行数
    const rowsNeeded = Math.ceil(totalStars / starsPerRow);
    
    // 创建星星容器
    for (let row = 0; row < rowsNeeded; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'visual-row';
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.gap = '10px';
        rowDiv.style.marginBottom = '10px';
        
        // 计算这一行应该显示多少个星星
        const starsInThisRow = (row === rowsNeeded - 1 && totalStars % starsPerRow !== 0) 
            ? totalStars % starsPerRow 
            : starsPerRow;
        
        // 在当前行添加星星
        for (let i = 0; i < starsInThisRow; i++) {
            const item = document.createElement('div');
            item.className = 'visual-item';
            rowDiv.appendChild(item);
        }
        
        tableVisual.appendChild(rowDiv);
    }
    
    // 添加文本说明
    const explanation = document.createElement('div');
    explanation.className = 'visual-explanation';
    explanation.textContent = `${num1} × ${num2} = ${num1 * num2}`;
    explanation.style.textAlign = 'center';
    explanation.style.marginTop = '10px';
    explanation.style.fontSize = '1.2rem';
    explanation.style.fontWeight = 'bold';
    tableVisual.appendChild(explanation);
}

// 挑战模式初始化
function initChallenge() {
    const startChallengeBtn = document.getElementById('startChallengeBtn');
    const timer = document.getElementById('timer');
    const score = document.getElementById('score');
    const challengeQuestion = document.getElementById('challengeQuestion');
    const challengeOptions = document.getElementById('challengeOptions');
    const challengeFeedback = document.getElementById('challengeFeedback');
    
    let challengeInterval;
    let currentTime = 60;
    let currentScore = 0;
    let isRunning = false;
    
    // 开始挑战按钮
    startChallengeBtn.addEventListener('click', () => {
        if (isRunning) return;
        
        // 重置
        currentTime = 60;
        currentScore = 0;
        timer.textContent = currentTime;
        score.textContent = currentScore;
        challengeFeedback.textContent = '';
        startChallengeBtn.textContent = '重新开始';
        isRunning = true;
        
        // 开始计时
        challengeInterval = setInterval(() => {
            currentTime--;
            timer.textContent = currentTime;
            
            if (currentTime <= 0) {
                clearInterval(challengeInterval);
                endChallenge();
            }
        }, 1000);
        
        // 生成第一个问题
        generateChallengeQuestion();
    });
    
    // 生成问题
    function generateChallengeQuestion() {
        // 只使用已解锁的数字
        const num1 = unlockedNumbers[Math.floor(Math.random() * unlockedNumbers.length)];
        const num2 = unlockedNumbers[Math.floor(Math.random() * unlockedNumbers.length)];
        const correctAnswer = num1 * num2;
        
        challengeQuestion.textContent = `${num1} × ${num2} = ?`;
        
        // 生成选项
        challengeOptions.innerHTML = '';
        
        // 生成错误答案
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrong = Math.floor(Math.random() * 30) + 1;
            if (wrong !== correctAnswer && !wrongAnswers.includes(wrong)) {
                wrongAnswers.push(wrong);
            }
        }
        
        // 所有选项
        const allOptions = [...wrongAnswers, correctAnswer];
        // 打乱选项
        allOptions.sort(() => Math.random() - 0.5);
        
        // 创建选项按钮
        allOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'challenge-option';
            button.textContent = option;
            
            button.addEventListener('click', () => {
                if (!isRunning) return;
                
                if (option === correctAnswer) {
                    // 正确答案
                    currentScore++;
                    score.textContent = currentScore;
                    challengeFeedback.textContent = '答对了！';
                    challengeFeedback.className = 'challenge-feedback correct';
                    
                    // 解锁进度
                    checkUnlock();
                    
                    // 新问题
                    setTimeout(() => {
                        generateChallengeQuestion();
                        challengeFeedback.textContent = '';
                    }, 1000);
                } else {
                    // 错误答案
                    challengeFeedback.textContent = `错了，正确答案是 ${correctAnswer}`;
                    challengeFeedback.className = 'challenge-feedback incorrect';
                    
                    // 新问题
                    setTimeout(() => {
                        generateChallengeQuestion();
                        challengeFeedback.textContent = '';
                    }, 1500);
                }
            });
            
            challengeOptions.appendChild(button);
        });
    }
    
    // 结束挑战
    function endChallenge() {
        isRunning = false;
        startChallengeBtn.textContent = '开始挑战';
        challengeQuestion.textContent = '时间到！';
        challengeOptions.innerHTML = '';
        
        // 显示最终分数
        showReward(`你的得分是 ${currentScore} 分！`, 'confetti');
        
        // 检查是否解锁新数字
        checkUnlock();
    }
    
    // 检查是否解锁新数字
    function checkUnlock() {
        if (currentScore >= 5 && !unlockedNumbers.includes(6)) {
            unlockedNumbers.push(6);
            showReward('你解锁了数字 6！', 'stars');
            initTable(); // 更新乘法表
        } else if (currentScore >= 10 && !unlockedNumbers.includes(7)) {
            unlockedNumbers.push(7);
            showReward('你解锁了数字 7！', 'stars');
            initTable();
        } else if (currentScore >= 15 && !unlockedNumbers.includes(8)) {
            unlockedNumbers.push(8);
            showReward('你解锁了数字 8！', 'stars');
            initTable();
        } else if (currentScore >= 20 && !unlockedNumbers.includes(9)) {
            unlockedNumbers.push(9);
            showReward('你解锁了数字 9！恭喜你掌握了完整的乘法表！', 'confetti');
            initTable();
        }
    }
} 