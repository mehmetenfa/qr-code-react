/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#39A7FF',
        toggleBlue1: '#77C2D0',
        toggleBlue2: '#022F47',
        toggleIcon: '#222222',
        white: '#FFFFFF',
        white1: '#D9D9D9',
        bodyStroke: '#898787',
        black: '#000000',
        inputBarBorder: '#BFBFBF',
        placeHolder: '#959393',
        qrContainerBlur: '#CFCFCF',
        qrContainer: '#D2D2D2',
        qrContainerBorder: '#D2D2D2',
        white2: '#D9D9D9',
        downloadButtonBorder: '#B8B4B4',
        notificationBorder: '#929292',
        notificationRectangle: '#CDCDCD',
        notificationRectangleStroke: '#C5C5C5',
        notificationHeader: '#32B61D',
        notificationHeaderBottomStroke: '#9A9A9A',
        notificationContent: '#737373',
      }
    },
  },
  plugins: [],
}
