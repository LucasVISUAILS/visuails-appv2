@echo off
cd /d "%~dp0"
echo ===================================
echo  VISUAILS - push naar GitHub
echo ===================================
echo.
echo Wijzigingen toevoegen...
git add -A
echo.
echo Committen...
git commit -m "Update %date% %time%"
echo.
echo Pushen naar GitHub (Cloudflare Pages bouwt automatisch opnieuw)...
git push
echo.
echo ===================================
echo  Klaar. Controleer hierboven op foutmeldingen.
echo ===================================
pause
