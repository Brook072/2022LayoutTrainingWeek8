module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT: '0.75rem',
      },
    },
    screens:{
      'lg': '1320px',
    },
    extend: {
      backgroundImage:{
        
        'logo':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/logo.svg')",
        'recommend-1':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art01.jpg')",
        'recommend-2':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art02.jpg')",
        'recommend-3':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art21.jpg')",
        'ranking-1':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art04.jpg')",
        'ranking-2':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art05.jpg')",
        'ranking-3':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art06.jpg')",
        'ranking-4':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art13.jpg')",
        'ranking-5':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art07.jpg')",
        'ranking-6':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/art08.jpg')",
        'artist-1':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/artist01.jpg')",
        'artist-2':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/artist02.jpg')",
        'artist-3':"url('https://brook072.github.io/2022LayoutTrainingWeek8/assets/images/artist03.jpg')",
        // for dev
        // 'logo':"url('../images/logo.svg')",
        // 'recommend-1':"url('../images/art01.jpg')",
        // 'recommend-2':"url('../images/art02.jpg')",
        // 'recommend-3':"url('../images/art21.jpg')",
        // 'ranking-1':"url('../images/art04.jpg')",
        // 'ranking-2':"url('../images/art05.jpg')",
        // 'ranking-3':"url('../images/art06.jpg')",
        // 'ranking-4':"url('../images/art13.jpg')",
        // 'ranking-5':"url('../images/art07.jpg')",
        // 'ranking-6':"url('../images/art08.jpg')",
        // 'artist-1':"url('../images/artist01.jpg')",
        // 'artist-2':"url('../images/artist02.jpg')",
        // 'artist-3':"url('../images/artist03.jpg')",
      },
      borderWidth:{
        '1':'1px',
        '16':'16px'
      },
      boxShadow:{
        '2':'0px 2px 6px #00000029;',
      },
      colors:{
        'primary':'#F0F0F0',
        'secondary': '#E6553B'
      },
      fontFamily: {
        'squada': 'Squada One',
        'paytone':'Paytone One'
      },
      fontSize:{
        'sm': ['0.875rem','20px'],
        'base': '1rem',
        'base-1':['1rem', '17px'],
        'lg': ['18px', '19px'],
        'lg-1': ['18px', '26px'],
        'xl': ['1.25rem','29px'],
        'xl-1': ['1.25rem','26px'],
        '2xl': ['1.5rem','35px'],
        '3xl':['2rem', '34px'],
        '4xl':['2.875rem', '40px']
      },
      height:{
        '4.5':'1.125rem',
        '22.5':'5.625rem',
        '58':'14.5rem',
        '85':'21.25rem',
        '93':'23.25rem',
        '125':'31.25rem',
      },
      lineHeight:{
        '34':'8.5rem',
      },
      margin:{
        '11px':'11px',
      },
      spacing:{
        '70':'17.5rem',
        '85':'21.25rem',
      },
      width:{
        '21':'5.25rem',
        '22':'5.5rem',
        '38':'8.75rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}