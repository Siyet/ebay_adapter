# PAW
Сервис централизованного мониторинга заказов из разрозненных источников и отправки заказов через различные почтовые сервисы.

Схема [https://www.mindmeister.com/1135360406?t=5aax5agh1J#](https://www.mindmeister.com/1135360406?t=5aax5agh1J#)

## Установка окружения
### Arch
```bash
yaourt -Syu
yaourt -S nodejs npm
```
### Ubuntu
```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential npm
```
## Запуск
Переходим в директорию проекта и выполняем:
```bash
npm install
node index.js
```