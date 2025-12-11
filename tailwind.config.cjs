module.exports = {
content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
brandPink: '#ffb6d5'
},
keyframes: {
'slide-up': {
'0%': { opacity: '0', transform: 'translateY(24px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
},
animation: {
'slide-up': 'slide-up 600ms ease-out both'
}
}
},
plugins: []
}