export const FullsizeCardLayout = () => {
  return (
    <div>
      <div className="card-main">
        <div className="card-header">
          <button className="profile-button" onClick={() => {}}>
            <img src="./user.png" />
          </button>
          <div className="info">
            <span className="nick-name">{props.nickName}</span>
            <span className="user-id">{props.userId}</span>
          </div>
          <div className="button-wrapper">
            <div>
              <button className="favorite-button" onClick={() => {}}>
                <img className="" src="./on_star.png" />
              </button>
              <p className="favorite-count">{props.favoriteCount}</p>
            </div>
            <button className="more-button" onClick={() => {}}>
              <img className="" src="./more.png" />
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="text-content">
            <p>{props.textContent}</p>
            <span className="upload-time">{props.uploadTime}</span>
          </div>
        </div>

        <div className="card-footer">
          <div>
            <div>
              <button className="comments" onClick={() => {}}>
                <img src="./comment.png" />
              </button>
              <span className="comment-count"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}