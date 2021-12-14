import {ReactComponent as ErrorSvg} from '../error.svg';
import './ErrorPage.css';

function SVGComponent() {
      return (
            <main>
                  <ErrorSvg />
                  <h1 id="errorText">O-o-oh! Something broke.</h1>
            </main>
      );
}

export default SVGComponent;

