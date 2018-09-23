import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Playfair Display', 'serif'],
  headerWeight: '400',
  bodyFontFamily: ['Assistant', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  includeNormalize: true,
  overrideStyles: ({}, options, styles) => ({
    h2: {
      color: '#6C6C6C',
      fontStyle: 'italic',
      letterSpacing: '2px'
    }
  }),
  googleFonts: [
    {
      name: 'Assistant',
      styles: [
        '300',
        '700',
      ],
    },
    {
      name: 'Playfair Display',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})

export default typography