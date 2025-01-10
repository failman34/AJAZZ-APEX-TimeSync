@echo off
set ProcessName=iot_driver_v187.exe

TaskList /FI "ImageName EQ %ProcessName%" 2>nul| Find /I "%ProcessName%">nul||(
echo lol
start "" "C:\Users\Madvert\AppData\Roaming\AJAZZ Driver\iot_driver_v187.exe"
)
timeout /t 2 /nobreak >nul
node script.js
timeout /t 3 /nobreak >nul

taskkill /F /IM %ProcessName%
exit