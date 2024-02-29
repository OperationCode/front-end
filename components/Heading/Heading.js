import { string, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
// import styles from './Heading.module.css';

Heading.propTypes = {
  className: string,
  hasHashLink: bool,
  hasTitleUnderline: bool,
  headingLevel: oneOf([1, 2, 3, 4, 5, 6]),
  text: string.isRequired,
};

Heading.defaultProps = {
  className: undefined,
  hasHashLink: true,
  hasTitleUnderline: false,
  headingLevel: 2,
};

function Heading({ className, hasHashLink, hasTitleUnderline, headingLevel, text }) {
  const anchorId = `${kebabCase(text)}-link`;
  const HeadingElement = `h${headingLevel}`;

  return (
    <div className="flex justify-center">
      <HeadingElement
        className={classNames(className, 'flex uppercase text-center my-4 mx-0', {
          'border-b-4 border-solid border-b-themePrimary mb-4s': hasTitleUnderline,
        })}
      >
        {hasHashLink ? (
          <div
            className="relative [&>a]:absolute [&>a]:-left-8 [&>a]:top-2"
            data-testid={`Heading Content ${anchorId}`}
          >
            <a
              className="sm:opacity-0 sm:hidden sm:none"
              id={anchorId}
              href={`#${anchorId}`}
              data-testid="Hash Link"
            >
              <ScreenReaderOnly>Scroll Link for {text}</ScreenReaderOnly>
              <LinkIcon className="w-4 leading-9 h-8 -my-1 mx-2 outline-none" />
            </a>

            {text}
          </div>
        ) : (
          text
        )}
      </HeadingElement>
    </div>
  );
}

export default Heading;
