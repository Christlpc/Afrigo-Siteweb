@echo off
chcp 65001 >nul
color 0A

echo ========================================
echo    🚗 AFRIGO WEBSITE - DEMARRAGE 🚗
echo ========================================
echo.

REM Vérifier si Node.js est installé
echo 🔍 Vérification de Node.js...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js n'est pas installé !
    echo 📥 Téléchargez Node.js depuis : https://nodejs.org/
    pause
    exit /b 1
)

node --version
echo ✅ Node.js est installé
echo.

REM Vérifier si npm est installé
echo 🔍 Vérification de npm...
where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm n'est pas installé !
    pause
    exit /b 1
)

npm --version
echo ✅ npm est installé
echo.

echo ========================================
echo.

REM Vérifier si node_modules existe
if not exist "node_modules\" (
    echo 📦 Installation des dépendances...
    echo ⏳ Cela peut prendre quelques minutes...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ❌ Erreur lors de l'installation des dépendances
        pause
        exit /b 1
    )
    echo.
    echo ✅ Dépendances installées avec succès !
) else (
    echo ✅ Les dépendances sont déjà installées
)

echo.
echo ========================================
echo.
echo 🚀 Démarrage du serveur de développement...
echo.
echo 📱 Le site sera accessible à :
echo    http://localhost:3000
echo.
echo 💡 Pour arrêter le serveur, appuyez sur Ctrl+C
echo.
echo ========================================
echo.

REM Démarrer le serveur
npm run dev

