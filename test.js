const multiply = require('./multiply');

// Проверка
const result = multiply(5, 3);

if (result === 15) {
  console.log('✅ Тест пройден!');
  process.exit(0);
} else {
  console.log(`❌ Ошибка: ожидалось 15, получили ${result}`);
  process.exit(1);
}