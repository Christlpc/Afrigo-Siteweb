# Script PowerShell pour démarrer le projet Afrigo

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   🚗 AFRIGO WEBSITE - DEMARRAGE 🚗   " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Node.js est installé
Write-Host "🔍 Vérification de Node.js..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js est installé : $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js n'est pas installé !" -ForegroundColor Red
    Write-Host "📥 Téléchargez Node.js depuis : https://nodejs.org/" -ForegroundColor Yellow
    exit
}

# Vérifier si npm est installé
Write-Host "🔍 Vérification de npm..." -ForegroundColor Yellow
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm --version
    Write-Host "✅ npm est installé : $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm n'est pas installé !" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si node_modules existe
if (-Not (Test-Path "node_modules")) {
    Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
    Write-Host "⏳ Cela peut prendre quelques minutes..." -ForegroundColor Yellow
    Write-Host ""
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Dépendances installées avec succès !" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
        exit
    }
} else {
    Write-Host "✅ Les dépendances sont déjà installées" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Démarrage du serveur de développement..." -ForegroundColor Yellow
Write-Host ""
Write-Host "📱 Le site sera accessible à :" -ForegroundColor Cyan
Write-Host "   http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "💡 Pour arrêter le serveur, appuyez sur Ctrl+C" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Démarrer le serveur
npm run dev




