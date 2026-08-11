# 🚜 MAQ-CAT - App Móvil de Maquinaria Pesada

Aplicación móvil híbrida para la consulta y visualización de maquinaria pesada industrial estilo **Caterpillar** (Modo Oscuro, Amarillo Caterpillar `#FFCD00`, contenedores metalizados y especificaciones técnicas de alta precisión).

Desarrollada en **React Native + Expo Router**, 100% offline y estática.

---

## 📱 Pantallas Implementadas

1. **Inicio (Hero Screen - "THE POWER HYDRA")**:
   - Cabecera con logo central **MAQ-CAT**.
   - Imagen Hero de excavadora en mina con iluminación dramática.
   - Título principal **"THE POWER HYDRA"** y subtítulo.
   - Botón CTA **"EXPLORAR CATÁLOGO"**.
   - Insignia de telemetría `SYS.OP.1`.

2. **Catálogo de Maquinaria**:
   - Listado de 4 tarjetas verticales con fotos, modelo destacado, especificaciones rápidas y botón **"VER DETALLES"**:
     - **EXCAVADORAS**: Cat 390F L
     - **CARGADORES FRONTALES**: Cat 988K
     - **MOTONIVELADORAS**: Cat 14M
     - **CAMIONES MINEROS**: Cat 797F

3. **Detalle de Producto (Doblaje Dinámico para las 4 Máquinas)**:
   - Banner superior con foto y etiqueta de categoría (*TRANSPORTE PESADO*, *EXCAVACIÓN PESADA*, etc.).
   - Módulos de especificaciones técnicas: **Módulo de Potencia** (Motor), **Rendimiento Bruto** (HP/kW) y **Carga Útil / Peso Operativo**.
   - Sección de **Resumen Operativo** detallando características del chasis y resistencia.
   - Selector inferior para navegar entre las 4 máquinas al instante.

4. **Información & Descargas**:
   - Insignia y logo institucional **MAQ-CAT**.
   - Sección **"Acerca de la App"** con versión `v2.4.0 (Stable)` y fecha de actualización.
   - Botón amarillo destacado **"DESCARGAR AHORA"** y enlaces a **Google Play** y **App Store**.

---

## 🚀 Cómo Ejecutar la Aplicación

### Requisitos Previos:
- Node.js 18+
- Aplicación **Expo Go** instalada en tu teléfono (iOS o Android).

### Pasos:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo Expo**:
   ```bash
   npx expo start
   ```

3. **Ver la app en tu teléfono**:
   - Abre la cámara (iOS) o la app **Expo Go** (Android) y escanea el código QR mostrado en la terminal.

4. **Ver en la Web**:
   ```bash
   npm run web
   ```

---

## 🐙 Subir el Proyecto a GitHub

```bash
git init
git add .
git commit -m "feat: MAQ-CAT React Native Expo app with 4 screens"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/maq-cat.git
git push -u origin main
```
