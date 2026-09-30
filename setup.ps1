# Ejecutar DENTRO de la carpeta Perfil3_App:  .\setup.ps1
# 1) Cambia el nombre de abajo por el tuyo
$nombre = "Perfil3_NombreApellido"

$origen = Get-Location
$destino = Join-Path (Split-Path $origen -Parent) $nombre

# Crea el proyecto base (genera package.json y versiones correctas)
Set-Location (Split-Path $origen -Parent)
npx create-expo-app@latest $nombre --template blank

# Copia los archivos de la app
Copy-Item "$origen\App.js","$origen\app.json","$origen\eas.json","$origen\README.md" $destino -Force
Copy-Item "$origen\assets","$origen\src" $destino -Recurse -Force

# Instala navegacion
Set-Location $destino
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

Write-Host "Listo. Abre la carpeta $destino en VS Code y ejecuta: npx expo start"
