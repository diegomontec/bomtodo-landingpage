// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        titulo: 'var(--font-titulo)',
        descricao: 'var(--font-descricao)',
        button: 'var(--font-button)',
      },
      colors: {
        'bg-azul': '#192648',
        'bg-creme': '#eee1c6',
        'bg-gradiente': 'radial-gradient(180deg, #b17a19 0%, #fffede 100%)'
      },
    },
  },
}
