import React from 'react';

interface IProps {
  dismiss: () => void;
  addToWhiteList: () => void;
  warn: string;
}

const Alert: React.FC<IProps> = ({ dismiss, addToWhiteList, warn }) => {
  return (
    <div className="container-pd">
      <div className="container2-pd">
        <div className="card-pd">
          <div className="flex-center-pd">
            <div className="inner-pd">
              <img
                className=""
                src="https://cdn-icons-png.flaticon.com/128/4334/4334130.png"
                alt="Phishing Site Icon"
              />
            </div>
            <h2 className="heading-pd">Phishing Site Detected!</h2>
            <p className="description-pd">{warn}</p>
          </div>
          <div className="actions-pd">
            <button onClick={addToWhiteList} className="secondaryBtn-pd">
              Add to WhiteList
            </button>
            <button onClick={dismiss} className="primaryBtn-pd">
              Visit the site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
