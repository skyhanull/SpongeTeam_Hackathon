/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4DABF7', // 원하는 색상 코드로 변경
      },
      padding: {
        customPadding: '20px 30px', // 원하는 패딩 값 (예: 2rem)
      },
    },
  },
  plugins: [],
};
