import React from "react";
import css from "./styles.module.scss";

/**
 * Atom AnchorLink
 *
 * A simple link with an anchor
 */
function AnchorLink(props) {
  const {
    className = "",
    children,
    link,
    linkLabel,
    anchorText,
    size,
    arrowPosition,
    hasArrow = true,
    removeUnderline = false,
    color,
    invertArrow = false,
    isExternal = false,
    ...other
  } = props;

  const Tag = link ? "a" : "button";

  const modifiedLink = `${link}${anchorText ? `#${anchorText}` : ""}`;

  return (
    <>
      <Tag
        className={`${css["link-label"]} ${className}`}
        href={modifiedLink || undefined}
        data-size={size}
        data-arrow-position={arrowPosition}
        data-remove-underline={removeUnderline ? true : undefined}
        data-color={color}
        data-invert={invertArrow}
        target={isExternal ? "_blank" : null}
        rel={isExternal ? "noopener" : null}
        {...other}
      >
        <span className={css["children-container"]}>{linkLabel}</span>
        {hasArrow && !isExternal && (
          <svg
            className={css["arrow-icon"]}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.3335 2.66669L11.3335 8.00002L5.3335 13.3334" />
          </svg>
        )}
        {isExternal && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css["teste"]}
          >
            <path d="M11.5663 8.1V12H3.33301V3.76667H7.23301" />
            <path d="M7.2334 8.1L12.0001 3.33333M12.0001 3.33333H8.96673M12.0001 3.33333V6.36667" />
          </svg>
        )}
      </Tag>
    </>
  );
}

export default AnchorLink;
