/**
 *
 * Home.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

 import React from 'react';
 import Helmet from 'react-helmet';

 import messages from './messages';


 import { FormattedMessage } from 'react-intl';
 import H2 from 'components/widgets/H2';

 import styles from './styles.css';

 import CalendarContainer from 'containers/Calendar';

 function Home() {
   return (
     <article>
       <Helmet
         title="Home Page"
         meta={[
           { name: 'description', content: 'A React.js Calendar application homepage' },
         ]}
       />
       <div>
         <section className={`${styles.textSection} ${styles.centered}`}>
           <H2>
             <FormattedMessage {...messages.startHeader} />
           </H2>
           <p>
             <FormattedMessage {...messages.startMessage} />
           </p>
         </section>
         <CalendarContainer />
       </div>
     </article>
   );
 }

 Home.propTypes = {

 };

 export default Home;
