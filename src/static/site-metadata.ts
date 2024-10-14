interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '🚵‍♂️Les entraînements de SAM0TA',
  siteUrl: 'https://run.oceanum.top/',
  logo: 'https://avatars.githubusercontent.com/u/96814993?s=400&u=7da8db7a41d066feca9dc0de575ff84a945651a4&v=4',
  description: '',
  keywords: '',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.oceanum.top',
    },
    {
      name: 'About',
      url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
