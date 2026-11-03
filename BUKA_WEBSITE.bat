@echo off
title Portfolio Putri Hayyufi Sa'adah
echo ====================================================================
echo  MEMBUKA WEBSITE PERSONAL PORTOFOLIO - PUTRI HAYYUFI SA'ADAH
echo  Tema Desain: Dusty Pink Luxury
echo ====================================================================
echo.
echo Sedang membuka browser ke http://localhost:5173 ...
start http://localhost:5173
echo.
echo Server aktif di background.
echo Jangan tutup jendela ini selama ingin mengakses website.
echo ====================================================================
call npm.cmd run dev -- --host 0.0.0.0 --port 5173
pause
