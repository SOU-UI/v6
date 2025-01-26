document.addEventListener('DOMContentLoaded', () => {
  console.log("YouTubeページが読み込まれました");

  // コメントボックスを追加する関数
  function addCommentBox() {
    const commentBox = document.createElement('div');
    commentBox.id = 'comment-box';
    commentBox.style.position = 'fixed';
    commentBox.style.bottom = '10px';
    commentBox.style.right = '10px';
    commentBox.style.width = '300px';
    commentBox.style.height = '150px';
    commentBox.style.backgroundColor = 'white';
    commentBox.style.border = '1px solid #ccc';
    commentBox.style.padding = '10px';
    commentBox.style.zIndex = '1000';

    const textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.style.height = '100px';
    textarea.placeholder = 'コメントを入力してください...';

    const button = document.createElement('button');
    button.textContent = '送信';
    button.style.marginTop = '10px';

    button.addEventListener('click', () => {
      alert(`コメント: ${textarea.value}`);
      textarea.value = '';
    });

    commentBox.appendChild(textarea);
    commentBox.appendChild(button);
    document.body.appendChild(commentBox);
  }

  // コメントボックスを追加
  addCommentBox();
});
