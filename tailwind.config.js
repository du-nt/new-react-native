const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        btn: {
          padding: 3,
          borderRadius: 10,
          textTransform: 'uppercase',
          backgroundColor: '#333',
        },
        '.body-text': 'text-red-800',
      });
    }),
  ],
};
