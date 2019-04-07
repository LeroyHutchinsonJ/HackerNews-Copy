import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

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

            <tr className="lowerTags">
              <td>
                {newsObject.authorNameWithPoints}

                <li className="lowerTagList">
                  <Moment date={newsObject.time} fromNow />
                </li>
                <li className="lowerTagList">|{newsObject.flag}</li>
                <li className="lowerTagList">|{newsObject.hide}</li>
                <li className="lowerTagList">|{newsObject.comments}</li>
                <li className="lowerTagList">|{newsObject.instapaper}</li>
                <li className="lowerTagList">|{newsObject.savetopocket}</li>
              </td>
            </tr>
          </table>
        </li>
      ))}
    </ol>
  );
};

export default NewsBox;
