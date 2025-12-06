# Скрипт для отправки изменений на GitHub
Write-Host "Проверка статуса репозитория..." -ForegroundColor Cyan
git status

Write-Host "`nПопытка отправки изменений на GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Изменения успешно отправлены!" -ForegroundColor Green
    Write-Host "GitHub Actions автоматически задеплоит новую версию сайта." -ForegroundColor Green
} else {
    Write-Host "`n✗ Ошибка при отправке изменений." -ForegroundColor Red
    Write-Host "`nВозможные решения:" -ForegroundColor Yellow
    Write-Host "1. Проверьте настройки учетных данных GitHub" -ForegroundColor White
    Write-Host "2. Используйте Personal Access Token вместо пароля" -ForegroundColor White
    Write-Host "3. Или используйте GitHub Desktop для отправки изменений" -ForegroundColor White
    Write-Host "`nКоманда для ручной отправки:" -ForegroundColor Cyan
    Write-Host "git push origin main" -ForegroundColor White
}

