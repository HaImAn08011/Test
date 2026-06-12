const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Простой маршрут
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Тест Node.js</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background: #f0f0f0; }
        h1 { color: #28a745; }
        .info { background: white; padding: 20px; border-radius: 10px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="info">
        <h1>✅ Node.js работает!</h1>
        <p>Ваш сервер успешно запущен.</p>
        <p>Порт: ${PORT}</p>
        <p>Время: ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `);
});

// Дополнительный маршрут /ping (для проверки API)
app.get('/ping', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`✅ Тестовый сервер запущен на порту ${PORT}`);
});
