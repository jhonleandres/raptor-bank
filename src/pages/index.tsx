import { NextPage, NextPageContext } from 'next';

import { Desktop } from '../templates/desktop';
import { Mobile } from '../templates/mobile';

// const ShowMobile = dynamic(() =>mobile() ? import('../templates/mobile') : import('../templates/desktop'), { ssr: false });
interface Props {
  userAgent?: string;
  isMobileView: boolean;
}
const Home: NextPage<Props> = ({ isMobileView }) => {
  return isMobileView == true ? (
    <Mobile>
      <div>a</div>
    </Mobile>
  ) : (
    <Desktop>
      <div>b</div>
    </Desktop>
  );
};
Home.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  const isMobileView = userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
  // return { userAgent };
  return { isMobileView: Boolean(isMobileView) };
};
// Home.getInitialProps = async ({ req }: NextPageContext) => {
//   // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   const isMobileView =
//     req ? req.headers['user-agent'] : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };
export default Home;
