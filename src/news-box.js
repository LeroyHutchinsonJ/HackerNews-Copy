import React from "react";
import PropTypes from "prop-types";

var NewsBox = ({ newsArray }) => {
  return (
    <ol className="newsBox">
      {newsArray.map(newsObject => (
        <li key={newsObject.id}>
          <table>
            <tr>
              <td className="articleName">{newsObject.articleName}</td>
              <td className="website">{newsObject.websiteLink}</td>
            </tr>

            <tr className="lowerTags">a</tr>
          </table>
        </li>
      ))}
    </ol>
  );
};

export default NewsBox;
