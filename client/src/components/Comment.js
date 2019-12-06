import React from 'react';

function Comment({content, createdAt, id}) {
  return (
    <div className="col-8 col-md-7 col-lg-6">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/"+id}>{ content }</Link>
        </div>
        <div className="card-footer small text-muted text-right">
          { createdAt }
        </div>
      </div>
    </div>
  );
}

export default Comment;
