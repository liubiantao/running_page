interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  // siteUrl: 'https://yihong.run',
  logo: 'https://pic1.zhimg.com/0e1328dff949078e96f3fe95125a0137_xl.jpg?source=32738c0c&needBackground=1',
  description: 'Personal site and blog',
  // navLinks: [
  //   {
  //     name: 'Summary',
  //     url: `${getBasePath()}/summary`,
  //   },
  //   {
  //     name: 'Blog',
  //     url: 'https://github.com/yihong0618/gitblog',
  //   },
  //   {
  //     name: 'About',
  //     url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
  //   },
  // ],
};

export default data;
